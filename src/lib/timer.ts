import React from "react";

class IdleTimer {
  timeout;
  onTimeOut;
  interval: any;
  onExpired: any;
  eventHandler?: any;
  timeoutTracker?: any;

  constructor({
    timeOut,
    onTimeOut,
    onExpired,
  }: {
    timeOut: number;
    onTimeOut: () => void;
    onExpired: () => void;
  }) {
    this.timeout = timeOut;
    this.onTimeOut = onTimeOut;

    const expiredTime = parseInt(localStorage.getItem("_expiredTime")!) || 0;
    if (expiredTime > 0 && expiredTime < Date.now()) {
      console.log('it is 0')
      onExpired();
      return;
    }

    this.eventHandler = this.updateExpiredTime.bind(this);
    this.tracker();
    this.startInterval();
  }

  startInterval() {
    this.updateExpiredTime();

    this.interval = setInterval(() => {
      const ls = localStorage.getItem("_expiredTime")!;
      const expiredTime = parseInt(ls) || 0;

      if (expiredTime < Date.now()) {
        if (this.onTimeOut) {
          this.onTimeOut();
          // this.cleanUp();
        }
      }
    }, 1000);
  }

  updateExpiredTime() {
    console.log('user active')
    if (this.timeoutTracker) {
      clearTimeout(this.timeoutTracker);
    }

    this.timeoutTracker = setTimeout(() => {
      localStorage.setItem(
        "_expiredTime",
        JSON.stringify(Date.now() + this.timeout * 1000)
      );
    }, 300);
  }

  tracker() {
    window.addEventListener("mousemove", this.eventHandler);
    window.addEventListener("scroll", this.eventHandler);
    window.addEventListener("keydown", this.eventHandler);
  }

  cleanUp() {
    clearInterval(this.interval);
    window.removeEventListener("mousemove", this.eventHandler);
    window.removeEventListener("scroll", this.eventHandler);
    window.removeEventListener("keydown", this.eventHandler);
  }
}

export default IdleTimer;

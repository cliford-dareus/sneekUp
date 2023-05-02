import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import {
  DasboardDayDisplay,
  DashboardHeader,
  MenuToggle,
  Navigation,
  NavigationBackground,
} from "./styles";
import useGetTime, { Time } from "../../hooks/useGetTime";
import { useEffect, useRef } from "react";
import { useCycle, useScroll } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import Navigations from "../Navigation";
import NavigationProfile from "../NavigationProfile";

const sidebar = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 360px 40px)",
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      // damping: 40,
    },
  },
};

const index = () => {
  const time = useGetTime();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (scrollYProgress?.get() > 0 && isOpen == true) {
      toggleOpen();
    }
  }, [scrollYProgress?.get()]);

  return (
    <DashboardHeader>
      <DasboardDayDisplay>
        {time.day !== "" ? time.day : "Loading..."}
      </DasboardDayDisplay>

      <Navigation
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle
          variants={{
            open: { color: "white" },
            closed: { color: "white", transition: { delay: 0.5 } },
          }}
          transition={{ duration: 1 }}
          onClick={() => toggleOpen()}
        >
          {!isOpen ? <RiMenu4Line /> : <RiCloseLine />}
        </MenuToggle>

        <Navigations />
        <NavigationProfile />

        <NavigationBackground variants={sidebar} />
      </Navigation>
      {/* Maybe add a Music player in the header */}
    </DashboardHeader>
  );
};

export default index;

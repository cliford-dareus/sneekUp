export const removeValuesFromArray = (valuesArray: string[], value: string) => {

    const valueIndex = valuesArray.findIndex(entry => entry === value)
    if(valueIndex === -1) {
      return
    }
    valuesArray.splice(valueIndex, 1)
  }

  export class Pin {
    constructor(){
    }

    create(name: string, pin: number){
      const alreadyExist = this.get(name);

      if(alreadyExist?.length !== 0){
        return alreadyExist
      }

      localStorage.setItem(name, JSON.stringify(pin))
    }

    get(name: string){
      const user = localStorage.getItem(name);
      return user? JSON.parse(user) : [];
    }

    delete(name: string){}
  }
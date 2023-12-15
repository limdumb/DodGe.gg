import { asiaInstance, ddragonInstance, krInstance } from "../API/instance"

export const regionInstance = (region) => {
  if(region === "kr"){
    return krInstance
  }

  if(region === "asia"){
    return asiaInstance
  }

  if(region === "dragon"){
    return ddragonInstance
  }
}
import {isNumberic} from "./_validate.js"

export function addUnit(val){
  if(val !== undefined && val !== null){
    return isNumberic(val) ? `${val}px` : val
  }
}
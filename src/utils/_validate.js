
export function isNumberic(val){
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}
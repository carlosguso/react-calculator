function isNumber(name) {
    if(!isNaN(parseInt(name))){
      return true;
    }
    return false;
}
 
function getCalc(state = {}, name) {
    if(name === "AC") {
      return {first: null,
        second: null,
        operation: null};
    }

    if(name === "2nd") {
        return {nd: true};
    }

    if(name === "rad"){
        return {rad: true};
    }
        
    console.log(isNumber(name));
}

export default getCalc;
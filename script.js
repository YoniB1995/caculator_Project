
//  קוד ראשון ללא קיצורים 02.03
// let i = 2;
// let numberArray = [];
// function numClickOne(){
//     let numOne= 1;
//     inputLine.value = numOne;
//     numberArray.push(parseInt(inputLine.value));
//    console.log(numberArray);
// }
// function numClickTwo(){
//     let numTwo =2;
//     inputLine.value = numTwo;
//     numberArray.push(parseInt(inputLine.value));
//     console.log(numberArray);
// }
// function numClickThree(){
//     let numThree = 3;
//     inputLine.value = numThree;
//     numberArray.push(parseInt(inputLine.value));
//     console.log(numberArray);
// }
// function numClickFour(){
//     let numFour= 4;
//     inputLine.value = numFour;
//     numberArray.push(parseInt(inputLine.value));
//     console.log(numberArray);
// }
// function numClickFive(){
//     let numFive = 5;
//     inputLine.value = numFive;
//     numberArray.push(parseInt(inputLine.value));
// }
// function numClickSix(){
//     let numSix = 6;
//     inputLine.value = numSix;
//     numberArray.push(parseInt(inputLine.value));
// }
// function numClickSeven(){
//     let numSeven = 7;
//     inputLine.value = numSeven;
//     numberArray.push(parseInt(inputLine.value));
// }
// function numClickEight(){
//     let numEight = 8;
//     inputLine.value = numEight;
//     numberArray.push(parseInt(inputLine.value));
// }
// function numClickNine(){
//     let numNine = 9;
//     inputLine.value = numNine;
//     numberArray.push(parseInt(inputLine.value));
// }
// function sumResult(){
//     inputResult.value = "+"

// }
// function minResult(){
//     inputResult.value = "-"

// }
// function divResult(){
//     inputResult.value = "%"

// }
// function multiResult(){
//     inputResult.value = "*"

// }
// function resetBtn(){
//     inputResult.value="CLEARED";
//     inputLine.value= 0;
//     numberArray= [];
//     console.log(numberArray);
// }

// console.log(numberArray)
// function finalResult(){

//     if (inputResult.value == "+"){
//  inputLine.value = numberArray[0]+numberArray[1]
//     }
//     if (inputResult.value == "-"){
//  inputLine.value = numberArray[0]-numberArray[1]
//     }
//     if (inputResult.value == "%"){
//  inputLine.value = numberArray[0]/numberArray[1]
//     }
//     if (inputResult.value == "*"){
//  inputLine.value = numberArray[0]*numberArray[1]
//     }
// if(numberArray.length>2){
//  if (inputResult.value == "+"){
//  finalRes.innerHTML =parseInt(finalRes.innerHTML)+numberArray[i];
//  i++
//     } 
//  if (inputResult.value == "-"){
//  finalRes.innerHTML = parseInt(finalRes.innerHTML)-numberArray[i]
//  i++
//     } 
//  if (inputResult.value == "*"){
//  finalRes.innerHTML = parseInt(finalRes.innerHTML)*numberArray[i]
//  i++
//     } 
//  if (inputResult.value == "%"){
//  finalRes.innerHTML = parseInt(finalRes.innerHTML)/numberArray[i]
//  i++
//     } 
//  }
// }
/*--------------------------------------------------------*/
// קוד סופי לפרוייקט
let numberArray = [];

function getNumClick(num){
    numberArray.push(num);
     inputLine.value = num;
     numTwo = inputLine.value;
     if (inputResult.value == '.') {
        numOne = numberArray[0];
        numberArray[0]=Number(`${numOne}.${numTwo}`);
         inputLine.value = numberArray[0];
         numberArray.pop();
     }
}
function useOperator(operator){
    
    switch (operator) {
        case "+":
            inputResult.value = "+";
            break;
        case "-":
            inputResult.value = "-"
            break;
        case "/":
            inputResult.value = "%"
            break;
        case "*":
            inputResult.value = "*"
            break;
        case "AC":
            inputResult.value = "CLEARED";
            inputLine.value = null;
            numberArray = [];
            break;
        case ".":
            inputResult.value = '.';
             inputLine.value += `.`
        default:
            break;
    }
}

function finalResult(){
   switch (inputResult.value) {
        case "+":
            inputLine.value = numberArray[0] + numberArray[1];
            numberArray = [];
            numberArray[0] = Number(inputLine.value);
            break;
        case "-":
            inputLine.value = numberArray[0] - numberArray[1];
            numberArray = [];
            numberArray[0] = Number(inputLine.value);
            break;
        case "%":
            inputLine.value = numberArray[0] / numberArray[1];
            numberArray = [];
            numberArray[0] = Number(inputLine.value);
            break;
        case "*":
            inputLine.value = numberArray[0] * numberArray[1];
            numberArray = [];
            numberArray[0] = Number(inputLine.value);
            break;
        default:
            break;
    }
}

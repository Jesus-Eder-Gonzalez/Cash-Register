var display = document.getElementById('display');
var balance = 0;
var calcArr = [];
var operArr = [];
var calcStr = '';
var storedVal;
var checkBal = false;
// var currentIndex = 0;


function updateDisplay(number) {
    //console.log(number);
    display.innerText = number;
    if(number < 0){
        display.style.color ='red';
    } else {
        display.style.color ='black';
    }

    //console.log(display.innerText);
}

function clearDisplay() {
    var number = 0;
    display.innerText = number;
}

function getNumber() {
    //console.log(display.innerText);
    if(checkBal === true) {
        display.innerText = 0;
        checkBal = false;
    }
    if(display.innerText === '0') {
        if(this.innerText === '.'){
            updateDisplay('0.');
        } else {
            updateDisplay(this.innerText);
        }
    } else if (display.innerText.includes('.') && this.innerText === '.') {

    }else {
        updateDisplay(display.innerText+this.innerText);
    }
}

function getBalance(){
    checkBal = true;
    clearDisplay();
    updateDisplay(balance);
}

function storeVal () {
    storedVal = display.innerText;
    clearDisplay();
    return storedVal;
}

function depositCash(){
    deposit = storeVal();
    balance = parseFloat(balance) + parseFloat(deposit);
    updateDisplay(balance);
}

function withdrawCash(){
    deposit = storeVal();
    balance = parseFloat(balance) - parseFloat(deposit);
    updateDisplay(balance);
}

function operatorSwitch() {
    var currOper = this.innerText;
    console.log(currOper);
    if (currOper === '=') {
        calcStr += storeVal();
        console.log(calcStr);
        updateDisplay(calculations.mathEval(calcStr));
        calcStr = '';
    } else {
        calcStr += storeVal() + currOper;
    }
}


// function operatorSwitch() {
//     var currOper = this.innerText;
//     console.log(currOper);
//     if (currOper === '=') {
//         calcArr.push(storeVal());
//         console.log(calcArr);
//         console.log(operArr);
//         updateDisply(calculations.mathEval(calcArr, operArr));

//     } else {
//         calcArr.push(storeVal());
//         operArr.push(currOper);
//     }
// }

// function operatorSwitch() {
//     var currOper = this.innerText;
//     calcArr.push(storeVal());
//     calcArr.push(currOper);
//     if(calcArr.length > 2) {
//         console.log(calcArr  + " switch: " +  calcArr[1]);
//         console.log("equals: ", calcArr[calcArr.length-1]);
//         switch (calcArr[1]) {
//             case '+':
//             var temp = calculations.add(parseFloat(calcArr[0]), parseFloat(calcArr[2]));
//             console.log(temp);
//             calcArr.shift();
//             calcArr.shift();
//             calcArr.shift();
//             console.log(calcArr);
//             calcArr.unshift(temp);
//             console.log(calcArr);
//             break;

//             case '-':
//             var temp = calculations.sub(parseFloat(calcArr[0]), parseFloat(calcArr[2]));
//             console.log(temp);
//             calcArr.shift();
//             calcArr.shift();
//             calcArr.shift();
//             console.log(calcArr);
//             calcArr.unshift(temp);
//             console.log(calcArr);
//             break;

//             case '*':
//             var temp = calculations.mult(parseFloat(calcArr[0]), parseFloat(calcArr[2]));
//             console.log(temp);
//             calcArr.shift();
//             calcArr.shift();
//             calcArr.shift();
//             console.log(calcArr);
//             calcArr.unshift(temp);
//             console.log(calcArr);
//             break;

//             case '/':
//             var temp = calculations.div(parseFloat(calcArr[0]), parseFloat(calcArr[2]));
//             console.log(temp);
//             calcArr.shift();
//             calcArr.shift();
//             calcArr.shift();
//             console.log(calcArr);
//             calcArr.unshift(temp);
//             console.log(calcArr);
//             break;
//         }

//         if(calcArr[calcArr.length-1] === '=') {
//             updateDisplay(calcArr[0]);
//             calcArr = [];
//         }
//     }

// }

// function operatorSwitch() {
//     if(this.innerText === '='){
//         console.log(currentIndex);
//         calcArr[currentIndex] = storeVal();
//         var expStr = '';
//         for (i = 0; i < calcArr.length; i++){
//             expStr += calcArr[i];
//         }

//         calcArr[currentIndex+1] = eval(expStr);
//         updateDisplay(calcArr[currentIndex+1]);
//         currentIndex = 0;
//         calcArr = [];
//     } else {
//         calcArr[currentIndex] = storeVal();
//         calcArr[currentIndex+1] = this.innerText;
//         currentIndex += 2;
//     }
//     console.log(calcArr);
// }

var numbers = document.getElementsByClassName('number');
for(i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', getNumber);
    //console.log(numbers[i].innerText);
}

var operators = document.getElementsByClassName('operator');
for(i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', operatorSwitch);
    //console.log(numbers[i].innerText);
}

// updateDisplay(10.00);

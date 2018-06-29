var calculations = (function(){
    
    return{
        add: add,
        sub: sub,
        mult: mult,
        div: div,
        mathEval: mathEval

    }
    function add(number1, number2) {
        return number1+ number2;
    }

    function sub(number1, number2) {
        return number1-number2;
    }

    function mult (number1, number2) {
        return number1*number2;
    }

    function div (number1, number2) {
        return number1/number2;
    }

    function mathEval(calcStr){
    var orderOp = ['*', '/', '+', '-'];
    var operators = calcStr.match(/[*/+-]/gi);
    var operations = calcStr;
    var length = operators.length;
    var tempStr = '';
    var tempResult = '';
    var replaceResult = 0;
    var tempNum;
    console.log(operators.length);

    while(length > 0){

        for( j = 0; j < orderOp.length; j++){
            for(k = 0; k < operators.length; k++){
                if (orderOp[j] === operators[k]) {
                    console.log(operations);
                    console.log(orderOp[j], j);
                    tempStr = new RegExp('[0-9.]+['+orderOp[j]+'][0-9.]+');
                    console.log(tempStr);
                    
                    tempResult = operations.match(tempStr).toString();
                    console.log('Result: '+tempResult);

                    length--;
                    switch (orderOp[j]) {
                        case '*':
                        tempNum = tempResult.split(orderOp[j]);
                        console.log('tempNum: '+tempNum);
                        replaceResult = mult(parseFloat(tempNum[0]),parseFloat(tempNum[1]));
                        console.log('join: ' + tempResult + 'replace: '+replaceResult);
                        operations = operations.replace(tempResult, replaceResult);
                        break;

                        case '/':
                        tempNum = tempResult.split(orderOp[j]);
                        console.log('tempNum: '+tempNum);
                        replaceResult = div(parseFloat(tempNum[0]),parseFloat(tempNum[1]));
                        
                        console.log('join: ' + tempResult + 'replace: '+replaceResult);
                        operations = operations.replace(tempResult, replaceResult);
                        break;

                        case '+':
                        tempNum = tempResult.split(orderOp[j]);
                        console.log('tempNum: '+tempNum);
                        replaceResult = add(parseFloat(tempNum[0]),parseFloat(tempNum[1]));

                        console.log('join: ' + tempResult + 'replace: '+replaceResult);
                        operations = operations.replace(tempResult, replaceResult);
                        break;

                        case '-':
                        tempNum = tempResult.split(orderOp[j]);
                        console.log('tempNum: '+tempNum);
                        replaceResult = sub(parseFloat(tempNum[0]),parseFloat(tempNum[1]));
                        console.log('join: ' + tempResult + 'replace: '+replaceResult);
                        operations = operations.replace(tempResult, replaceResult);
                        break;
                    }

                    // console.log(tempStr);
                }
            }
        }
        console.log(operators);

        i--;
    }
    return operations;
    }
})()
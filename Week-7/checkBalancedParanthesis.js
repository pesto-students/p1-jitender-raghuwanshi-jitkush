const parenthesisChecker = (bracket) => {
    let myStack = [];
    for(el of bracket){
        if(el == '(' || el == '{' || el == '['){
            myStack.push(el);
            continue;
        }
        else if((el == ')' && myStack[myStack.length - 1 ] == '(') ||
                (el == '}' && myStack[myStack.length - 1] == '{') ||
                (el == ']' && myStack[myStack.length - 1] == '[')) {
             myStack.pop();
             continue;
        }
    }
    if(myStack != null){
        console.log(`not balanced`);
    }
    else{
        console.log(`balanced`)
    }
}


let par= `[()][][]}{`;
parenthesisChecker(par);
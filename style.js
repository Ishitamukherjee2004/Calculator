let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
 let arr = Array.from(buttons);
 
arr.forEach(button=>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(event.target.innerHTML=='AC'){
            string = "";
            input.value = string;
        }
        else if(event.target.innerHTML=='DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(event.target.innerHTML=='%'){
            let operators = ['+', '-', '*', '/'];
            let lastOperatorIndex = -1;
            for (let i = string.length - 1; i >= 0; i--) {
                if (operators.includes(string[i])) {
                    lastOperatorIndex = i;
                    break;
                }
            }
            let number = parseFloat(string.substring(lastOperatorIndex + 1));
            let percentage = number * 0.01;
            string = percentage.toString();
            input.value = string; 
        }
        else{
            string += event.target.innerHTML;
            input.value = string;

        }

    })
})


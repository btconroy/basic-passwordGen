const num = document.getElementById('input');
const submit = document.getElementById('btn');
const message = document.getElementById('msg');

// List of characters to use
const charList = ['&', 'l', 2, 'c', 'm', 'A', 's', '?', 6, 'p', 'u', '"', 0, 'B', 'b', 'g', 9, '*', 'C', 'q', '$', 't', 'D', 'f', 'h', 'a', '/', 'o', 'E', 'j', '!', 'F', 'i', 'G', 1, 7, '#', 'r', 'y', 'H', 'x', 'z', '~', 5, 'v', 'I', 'w', '(', 'J', 'K', 'L', 3, 'M', 'N', '@', 'O', 'P', 'k', 'Q', 'd','R', ')', 'S', 0, '`', 'T', 'U', '%', 'V', 8, 'W', '^', 'X', 'n', 'Y', 4, 'e', 'Z'];

// Functions that calls random numbers for the character since loop will use same character called in loop 

function diffChar() {
    const randNum = Math.round(Math.random()*charList.length);
    return randNum;
}

// function used to generate random password 

function randomGen() {
    const charNum = num.value;
    const pswOutput = [];
    let i = 0;
    const select = Math.round(Math.random()*charNum);
    const intPick = Math.round(Math.random()*9);

    do {

    // produce character and push into array

        const randChar = charList[diffChar()];
        pswOutput.push(randChar);
        i++
        
    } while (i < charNum);
 
    // check to see if there is a number and add one if there in none

    pswOutput.forEach((val) => {
        const newArr = [];
        newArr.push(typeof val);

        if(newArr.includes('number')) {
            message.innerHTML = pswOutput.join('');
        } else {
            pswOutput[select] = intPick;
            message.innerHTML = pswOutput.join('');
        }
    }) 


}

// Event listener when button is clicked

submit.addEventListener('click', randomGen)
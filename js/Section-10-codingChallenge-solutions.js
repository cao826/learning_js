                   /* Section 10 Coding Challenge 1 */

// Starter code for coding challenge 1
const acceptableAnswers = new Set(['0', '1', '2', '3']);

const checkInput = function (input) {
    if (acceptableAnswers.has(input)) {
        console.log('input was acceptable!');
        return true; 
    } else {
        console.log('User input is invalid!');
        return false;
    }
}

const poll = {
question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    getInput() {
        console.log(this.question);
        console.log(this.options);
        console.log(this.options.join('\n'));
        let promptString = this.question + "\n" + this.options.join('\n');
        console.log(promptString);
        const userResponse = prompt(promptString);
        console.log(userResponse, typeof userResponse);
        return userResponse;
    },
    updatePoll(userInput) {
        if (checkInput(userInput)) {
            console.log('I am adding to the answers section!)');
            const index = Number(userInput);
            this.answers[index]++;
            console.log(this.answers);
            return true;
        }
        return false;
    },
    showResults(type){
        switch (type) {
            case 'array':
                console.log(this.answers);
                break;
            case 'string':
                const why = [...this.answers]; 
                for (let i = 0; i < why.length; i++){
                    why[i] = why[i].toString();
                }
                console.log(`Poll results are ${why.join(',')}`);
                break;
            default:
                console.log(this.answers);
                break;
        }
    },
    runPoll(){
        const userResponse = this.getInput();
        let updateStatus = this.updatePoll(userResponse);
        if (updateStatus){
            this.showResults('string');
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.runPoll.bind(poll));


                      /* Section 10 coding Challenge 2 */

(function () {
const header = document.querySelector('h1'); header.style.color = 'red';

const body = document.querySelector('body')
    body.addEventListener('click', function(){
    header.style.color = 'blue';
});
}

)();


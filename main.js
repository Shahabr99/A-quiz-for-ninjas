const correctAnswer = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    //Checking the answers.
    let score = 0;
    userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswer.forEach((answer,index) => {
       if(answer === correctAnswer[index]) {                    //comparison.
           score += 25;
       } 
    });
    //show result on page.
    window.scrollTo(0,0);
    result.classList.remove('d-none');
    //Animation score.
    let output = 0;                                             //using another variable to show the score with animation.
    
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});
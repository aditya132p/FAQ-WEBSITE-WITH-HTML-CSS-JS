const accord = document.querySelectorAll(".content");

 accord.forEach( function (question) {
    const icon = question.querySelector(".icon");
    const answer = question.querySelector(".answer");

    question.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');

    });
    
})


const quesions = document.querySelectorAll(".question");

quesions.forEach(function (question){
    const btn = question.querySelector(".question-btn");

    btn.addEventListener('click', function () {
        quesions.forEach(function (item){
            if(item !== question){
                item.classList.remove('.show-text');
            }
        });
        question.classList.toggle('show-text');
    });

})
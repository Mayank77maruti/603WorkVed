const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.nextElementSibling.style.display = 'none';
            }
        });
    });
});

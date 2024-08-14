document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');

    function handleScroll() {
        serviceItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    // Запускаем при скролле
    window.addEventListener('scroll', handleScroll);

    // Запускаем сразу, чтобы проверить, видны ли элементы на старте
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#contacts a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff5722';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#009688';
        });
    });
});
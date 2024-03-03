document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('#wrapper');
    const question = document.querySelector('#question');
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');

    // Ensure all elements are found before proceeding
    if (wrapper && question && yes && no) {
        const wrapperRect = wrapper.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();

        yes.addEventListener('click', () => {
            question.innerHTML = 'I Love You Too';
        });

        no.addEventListener('mouseover', () => {
            const i = Math.floor(Math.random() * (wrapperRect.width - noRect.width)) + 1;
            const j = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;
            no.style.left = i + 'px';
            no.style.top = j + 'px';
        });
    } else {
        console.error('One or more elements not found');
    }
});

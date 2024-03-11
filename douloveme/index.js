document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('#wrapper');
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const question = document.querySelector('#question');

    if (wrapper && yes && no && question) {
        yes.addEventListener('click', () => {
            question.innerHTML = 'I Love You Too';
        });

        no.addEventListener('mouseover', () => {
            const wrapperRect = wrapper.getBoundingClientRect();
            const noRect = no.getBoundingClientRect();

            const wrapperWidth = wrapperRect.width - noRect.width;
            const wrapperHeight = wrapperRect.height - noRect.height;

            const randomLeft = Math.floor(Math.random() * wrapperWidth);
            const randomTop = Math.floor(Math.random() * wrapperHeight);

            no.style.left = randomLeft + 'px';
            no.style.top = randomTop + 'px';
        });
    } else {
        console.error('One or more elements not found');
    }
});

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const hereBtn = document.getElementById('hereBtn');
const thereBtn = document.getElementById('thereBtn');

const animations = {
    pageLeft: [
        { offset: 0, opacity: '1', left: '0' },
        { offset: 1, opacity: '0', left: '-50px' }
    ],
    pageRight: [
        { offset: 0, opacity: '1', left: '0' },
        { offset: 1, opacity: '0', left: '50px' }
    ]
};
let page = 1;

hereBtn.addEventListener('click', () => {
    if (page == 1) return;
    page = 1;
    page2.animate(animations.pageRight, { duration: 150, easing: 'ease-in', fill: 'forwards' });
    page1.animate(animations.pageLeft, { duration: 150, delay: 100, easing: 'ease-in', direction: 'reverse', fill: 'forwards' });
});

thereBtn.addEventListener('click', () => {
    if (page == 2) return;
    page = 2;
    page1.animate(animations.pageLeft, { duration: 150, easing: 'ease-in', fill: 'forwards' });
    page2.animate(animations.pageRight, { duration: 150, delay: 100, easing: 'ease-in', direction: 'reverse', fill: 'forwards' });
});
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hidden');
}

function showProfileForm() {
    const profileSection = document.querySelector('#profile');
    profileSection.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.flip-card-inner');
        inner.style.transform =
            inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
});
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hidden');

    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}


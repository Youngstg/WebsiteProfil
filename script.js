const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 7.0}deg)">${char}</span>`
).join('');

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', toggleButton.checked);
    });
});

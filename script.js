const message = 'Halo Goblok';
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const messageUpper = message.toUpperCase();
const animatedText = document.getElementById('animatedText');

let i = 0;
let j = 0;
let interval;

function startAnimation() {
    interval = setInterval(() => {
        if (i === messageUpper.length-1) {
            clearInterval(interval);
            animatedText.textContent = messageUpper;
            setTimeout(() => {
                i = 0;
                j = 0;
                startAnimation();
            }, 5000);
            return;
        }
        const suffix = alphabet[j];
        animatedText.textContent = messageUpper.slice(0, i + 1) + suffix;
        j++;

        if (j === alphabet.length) {
            j = 0;
            i++;
        }
    }, 20);
}

startAnimation();


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

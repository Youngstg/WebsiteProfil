const toggleSwitch = document.getElementById('modeSwitch');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // save theme preference to localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Check localStorage for theme preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

const img = document.querySelector('.img-container img');

const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split('').map(
            (char, i) =>
            `<span style="transform:rotate(${i * 7.0}deg)">${char}</span>`
        ).join('');



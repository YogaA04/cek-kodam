let previousName = '';
const result = document.getElementById('result')
const kodamImage = document.getElementById('kodamImage');
const image = document.getElementById('image')
const kodamDescription = document.getElementById('kodamDescription');

const randomKodam = async () => {
    const response = await fetch('kodam_500.json');
    const data = await response.json();
    const randomKodam = data[Math.floor(Math.random() * data.length)];
    return randomKodam
}

const cekKodam = async () => {
    const name = document.getElementById('nameInput').value;

    if (result.className === 'result show' && name !== previousName) {
        result.classList.remove('show')
        image.classList.remove('show')
    }

    if (name && name !== previousName) {
        previousName = name;
        const kodam = await randomKodam()

        setTimeout(() => {
            result.innerText = `Halo ${name}, kodam Anda adalah: ${kodam.name}`;
            result.classList.add('show');
            kodamImage.src = kodam.image;
            kodamImage.style.display = 'block';
            image.classList.add('show')
            kodamDescription.innerText = kodam.description;
        }, 1000)
    } else if (!name) {
        result.innerText = 'Silakan masukkan nama Anda.';
        result.classList.add('show');
    }
}

window.onload = function() {
    alert('Ini hanyalah sebuah joks');
}
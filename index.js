const userPassword = document.getElementById('password');
const userName = document.getElementById('username');
const LoginBtn = document.querySelector('.login-btn');

const StrongBar = document.getElementById('strong-bar');
const StrongText = document.getElementById('strong-text');

// funcion de validacion de contraseña (solo 8 caracteres)
userPassword.addEventListener('input',  () => {
    const value= userPassword.value;
    if(value.length >= 8){
        userPassword.style.borderBottom= "2px solid green";
    }
    else{
        userPassword.style.borderBottom= "2px solid red";
    }
});

document.querySelector('form').addEventListener('submit', (e) => {
    if (userPassword.value.length < 8){ 
        e.preventDefault();
        alert('la contraseña debe tener minimo 8 caractéres') 
}
});
// strong/weak password bar
userPassword.addEventListener('input', () => {
    const value = userPassword.value;
    let strength = 0;

    if (value.length > 0) {
        if (value.length >= 8) strength++;
        if (/[A-Z]/.test(value)) strength++; 
        if (/[0-9]/.test(value)) strength++; 
        if (/[^A-Za-z0-9]/.test(value)) strength++; 
        if (value.length >= 12 && strength >= 3) strength++;
    }

    const colors = ['#444','red', 'orange', 'yellow', 'lightgreen', 'green'];
    const labels = ['Vacio', 'Muy débil', 'Débil', 'Media', 'Fuerte', 'Muy fuerte'];
    StrongBar.style.width = (strength * 25) + '%';
    StrongBar.style.backgroundColor = colors[strength] 
    StrongText.innerText = labels[strength];

    anime({
        targets: '#strong-bar',
        width: (strength * 25) + '%',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
    });
});
document.addEventListener('DOMContentLoaded', () => {
const textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const tl = anime.timeline({ easing: 'easeOutExpo' });
tl
    .add({
        targets: '#preloader',
        opacity: [1, 0],
        duration: 1000,
        delay: 1200,
        duration: 800,
        complete: function() {
            document.getElementById('preloader').style.display = 'none';
        }
    })
    .add({
        targets: '.letters, .letter',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: (el, i) => 75 * i 
    })

    .add({
        targets: '#username, #password, .login-btn',
        opacity: [0, 1],
        duration: 350,
        translateX: [20, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
    }, "-=500")

    .add({
        targets: ['.main-form', '.wave-container'],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 700
    }, "-=750");
});

// seguridad
document.querySelector('form').addEventListener('submit', () => {
    console.clear();
});
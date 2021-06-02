'use strict';

const input__alert = document.querySelector('.input__alert');

function generatePassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()/|_+?:[] ";
    const passwordLenght = document.getElementById("passwordLenght").value;
    let password = '';

    for (let i = 0; i < passwordLenght; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
    input__alert.innerHTML = "Mot de passe copié !";
}

function copyPassword() {
    const copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand('copy');
    input__alert.classList.toggle('active');
    setTimeout(function () {
        input__alert.classList.toggle('active');
    }, 2000)
}
// Tableaux des caractères
var lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*()_+-={}[]|;:,.<>?';

// Fonction pour générer un mot de passe aléatoire
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecial) {
    var allCharacters = '';
    
    if (useUppercase) {
        allCharacters += uppercaseAlphabet;
    }
    
    if (useLowercase) {
        allCharacters += lowercaseAlphabet;
    }
    
    if (useNumbers) {
        allCharacters += numbers;
    }
    
    if (useSpecial) {
        allCharacters += specialCharacters;
    }
    
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }
    return password;
}

// Fonction pour mettre à jour le mot de passe affiché
function updatePassword() {
    var maxLength = 25;

    var lengthInput = document.getElementById('long');
    var length = parseInt(lengthInput.value);

    var useUppercase = document.getElementById('checkbox1').checked;
    var useLowercase = document.getElementById('checkbox2').checked;
    var useNumbers = document.getElementById('checkbox3').checked;
    var useSpecial = document.getElementById('checkbox4').checked;

    if (!length || length <= 0 || length > maxLength) {
        document.querySelector('.mid > p').textContent = "Veuillez cocher les caractères souhaités et saisir un nombre entre 1 et " + maxLength + " pour la longueur.";
    } else {
        var password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecial);
        document.querySelector('.mid > p').textContent = password;
    }
}

document.querySelector('button').addEventListener('click', updatePassword);
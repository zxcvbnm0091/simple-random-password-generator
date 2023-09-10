let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveBtn')

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+-={}[],./<>?`~"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for(let index = 0; index < len; index++){
        generator += data[~~Math.floor(Math.random() * data.length)]

    }
    
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert("Password has been generated")
    }, 1000)
}

function savePassword(){
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert("berhasil disimpan")
    }, 1000)
}


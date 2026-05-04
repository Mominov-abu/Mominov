let login + prompt('Login')
let parol + prompt('Parol')

if (login === 'admin' && parol === "12345"){
    console.log("Tizimga hush kelibsiz ! ");
}
else{
    console.log("Parol yoki admin xato ! ");
}
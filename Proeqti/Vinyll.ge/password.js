const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    passwordStrength.textContent = strength;
});
function checkPasswordStrength(password) {
    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;
    const regexNumber = /[0-9]/;

    if (!password) {
        return 'პაროლი არ არის შეყვანილი';
    } else if (regexLowercase.test(password) && !regexUppercase.test(password) && !regexNumber.test(password)) {
        return 'სუსტი'; 
    } else if (regexLowercase.test(password) && regexNumber.test(password)) {
        return 'საშუალო'; 
    } else if (regexUppercase.test(password) && regexLowercase.test(password) && regexNumber.test(password)) {
        return 'ძლიერი'; 
    } else {
        return 'პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ ასოს და ერთ რიცხვს';
    }
}

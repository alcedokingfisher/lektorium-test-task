function validateForm() {
    const emailInput = document.registrationForm.email;
    const passwordInput = document.registrationForm.password;

    formRemoveError(emailInput);
    formRemoveError(passwordInput);

    if (testEmail(emailInput)) {
        formAddError(emailInput);
        return false;
    } else if (passwordInput.value.length < 6) {
        formAddError(passwordInput);
        return false;
    }
}

function testEmail(emailInput) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(emailInput.value);
}

function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
}

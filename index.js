const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

// File section
const filesForm = document.getElementById('files-form');
const emailInput = document.getElementById('files-input');

filesForm.addEventListener('submit', (e) => {

    filesForm.classList.remove('error');

    if(!emailInput.value || !emailValidationRegex.test(emailInput.value)) {
        e.preventDefault();
        filesForm.classList.add('error');
    }
})

// Access section
const accessForm = document.getElementById('access-form');
const accessEmailInput = document.getElementById('access-input');

accessForm.addEventListener('submit', (e) => {

    accessForm.classList.remove('error');

    if(!accessEmailInput.value || !emailValidationRegex.test(accessEmailInput.value)) {
        e.preventDefault();
        accessForm.classList.add('error');
    }
})



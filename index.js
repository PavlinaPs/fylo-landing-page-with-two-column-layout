const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

const filesForm = document.getElementById('files-form');
const emailInput = document.getElementById('files-input');

filesForm.addEventListener('submit', (e) => {

    filesForm.classList.remove('error');

    if(!emailInput.value || !emailValidationRegex.test(emailInput.value)) {
        e.preventDefault();
        filesForm.classList.add('error');
    }
})



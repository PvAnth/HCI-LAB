const nav = document.querySelector('.header-menu-slider-container');
const detailToggle = document.querySelector('desc-logo');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dob = document.getElementById("date");
checkbox = document.querySelector('input[name="name"]:checked')

const setError = (element, message) => { 
    const errorDisplay = document.querySelector('.error');
    errorDisplay.innerHTML = message;
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const dobValue = dob.value;

    var valid1 = false
    var valid2 = false
    var valid3 = false
    var valid4 = false
    
    today = new Date()
    date = new Date(dobValue)

    if(usernameValue.length < 1) {
        setError(username, 'Username is empty');
    } else if(usernameValue.length < 4 || usernameValue.length > 25){
        setError(username, 'Username length must be more than 4 word or less than 25 word')
    } else {
        valid1 = true;
    }
    
    if(valid1 == true){
        if(emailValue === '') {
            setError(email, 'Email is empty');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Input valid email address');
        } else {
            valid2 = true;
        }
        if(valid2 == true){
            if(passwordValue === '') {
                setError(password, 'Password is empty');
            } else if (passwordValue.length < 8 ) {
                setError(password, 'Password must be at least 8 character.')
            } else {
                valid3 = true;
            }
            if(valid3 == true){
                if(date >= today){
                    setError(date, "Date is illegal")
                } 
            }
        }
    }

};

submit = document.getElementById("submits")
submit.addEventListener('click', function(e) {
    e.preventDefault()
    validateInputs()
})
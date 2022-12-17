const custom_alert = document.querySelector('.alert');
const close = document.querySelector('.close');
const progress = document.querySelector('.progress');

const root = document.querySelector(':root');
const alertTitle = document.querySelector('.alert-title');
const alertText = document.querySelector('.alert-text');
const icon = document.querySelector('.icon');

const icons = {
    success: 'fa-check',
    error: 'fa-exclamation',
    warning: 'fa-exclamation',
    time: 'fa-clock'
}

const colors = {
    success: '#4fc07e',
    error: '#ec4848',
    warning: '#ecc048',
    time: '#488fec'
}

let timeout1, timeout2;

close.addEventListener('click', () => {
    custom_alert.classList.remove('active');

    setTimeout(() => {
        progress.classList.remove('active');
    }, 400);

    clearTimeout(timeout1);
    clearTimeout(timeout2);
});

const setAlertProperties = (title, text, alertType) => {
    alertTitle.innerText = title;
    alertText.innerText = text;
    icon.classList.add(icons[alertType]);
    root.style.setProperty('--alert', colors[alertType]);
}

const showAlert = (alertType, word) => {

    icon.classList.remove('fa-check', 'fa-exclamation', 'fa-clock');

    switch(alertType) {
        case 'success':
            setAlertProperties('Congratulations!', `You guessed the word ${word} correctly`, alertType);
            break;
        case 'error':
            setAlertProperties('Oops!', `${word} is not the correct word`, alertType);
            break;
        case 'warning':
            setAlertProperties("Pay attention!", 'Please write a word', alertType);
            break;
        case 'time':
            setAlertProperties("Time's up!", `${word} was the correct word`, alertType);
            break;
        default:
            break;
    }

    custom_alert.classList.add('active');
    progress.classList.add('active');
    
    timeout1 = setTimeout(() => {
        custom_alert.classList.remove('active');
    }, 3000);

    timeout2 = setTimeout(() => {
        progress.classList.remove('active');
    }, 3400);
}


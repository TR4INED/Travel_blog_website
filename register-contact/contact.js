function handleContact(event) {
    event.preventDefault();

    const formContainer = document.querySelector('.form-container');
    const thankYouMessage = document.querySelector('.thank-you-message');

    
    formContainer.classList.add('hide');

    setTimeout(() => {
        thankYouMessage.classList.add('show');
    }, 500); 

    
    setTimeout(() => {
        thankYouMessage.classList.remove('show');
        formContainer.classList.remove('hide'); 
        formContainer.querySelector('form').reset(); 
    }, 3500);
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_uzjme9e',
        'template_hjk4zhb',
        event.target,
        'VTbmBMKyJs7BxetV4'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporaily unavailable. Please contact me directly on Towkirmiah5@gmail.com"
        );
    })
}



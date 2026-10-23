function showSecret() {

    const message = document.getElementById(«secretMessage»);

    if (message) {

        message.classList.toggle(«show»);

    }

}

const revealElements = document.querySelectorAll(«.reveal»);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add(«visible»);

        }

    });

};

window.addEventListener(«scroll», revealOnScroll);

window.addEventListener(«load», revealOnScroll);

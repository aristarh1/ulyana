function showSecret() {

    var message = document.getElementById(String.fromCharCode(115,101,99,114,101,116,77,101,115,115,97,103,101));

    if (message) {

        message.classList.toggle(String.fromCharCode(115,104,111,119));

    }

}

var revealElements = document.querySelectorAll(String.fromCharCode(46,114,101,118,101,97,108));

var revealOnScroll = function() {

    revealElements.forEach(function(element) {

        var windowHeight = window.innerHeight;

        var elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add(String.fromCharCode(118,105,115,105,98,108,101));

        }

    });

};

window.addEventListener(String.fromCharCode(115,99,114,111,108,108), revealOnScroll);

window.addEventListener(String.fromCharCode(108,111,97,100), revealOnScroll);

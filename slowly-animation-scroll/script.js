const HTML = document.querySelector('html');
HTML.classList.add('js');

function initTabNav(defaultIndex = 0) {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    if (!tabcontent.length || !tabmenu.length) return;

    function activeTab(index) {
        if (!tabcontent[index] || !tabmenu[index]) return;

        tabcontent.forEach((section) => {
            section.classList.remove('ativo');
        });

        tabmenu.forEach((item) => {
            item.classList.remove('ativo');
        });

        tabcontent[index].classList.add('ativo');
        tabmenu[index].classList.add('ativo');
    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function () {
            activeTab(index);
        });
    });

    activeTab(defaultIndex);
}

function initAccordionNav() {
    const faqmenu = document.querySelectorAll('.js-faqmenu dt');
    if (faqmenu.length) {
        faqmenu[0].classList.add('accordionActive');
        faqmenu[0].nextElementSibling.classList.add('accordionActive');

        function activeAccordion() {
            this.classList.toggle('accordionActive');
            this.nextElementSibling.classList.toggle('accordionActive');
        }

        faqmenu.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }

}

initTabNav(0);
initAccordionNav();

function slowMenuScroll() {
    const pageLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        let hrefLink = event.currentTarget.getAttribute('href');
        let section = document.querySelector(hrefLink);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    pageLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

slowMenuScroll();

function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const middleScreen = window.innerHeight * 0.6;
        sections[0].classList.add('ativo');

        function animationScroll() {

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - middleScreen) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
            })


        }

        window.addEventListener('scroll', animationScroll);
    }
}

initScrollAnimation();



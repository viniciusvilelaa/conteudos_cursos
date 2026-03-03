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





$(document).ready(function () {
    // Toggle menu and burger icon
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Close menu when clicking on a menu item
    $('.header_link').click(function (event) {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

    // Close menu when clicking anywhere outside the menu
    $(document).click(function (event) {
        if (!$(event.target).closest('.header').length) {
            $('.header_burger, .header_menu').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    // Prevent closing menu when clicking inside the menu
    $('.header_menu').click(function (event) {
        event.stopPropagation();
    });
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector('.back-to-top').style.display = "block";
    } else {
        document.querySelector('.back-to-top').style.display = "none";
    }
}

let tab = function(){
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tabs__content'),
    tabName;

    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(tabName){
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active')

        })
        
    }

    

};


tab();
// const order = document.querySelector('.order-course');
// const about = document.querySelector('.about');
// const start = document.querySelector('.start');
// const advantages = document.querySelector('.advantages');
// const partners = document.querySelector('.partners');
// const program = document.querySelector('.program');
// const mentors = document.querySelector('.mentors');
// const form = document.querySelector('.form');

// // preloader
// setTimeout(function (){
//     const loader = document.querySelector('.preloader')
//     loader.remove();
//     section.style.display = 'flex';
//     header.style.display = 'flex';
//     footer.style.display = ' ';
//     order.style.display = 'flex';
//     about.style.display = 'flex';
//     start.style.display = 'flex';
//     advantages.style.display = 'flex';
//     partners.style.display = 'flex';
//     program.style.display = 'flex';
//     mentors.style.display = 'flex';
//     form.style.display = 'flex';
// }, 2000)
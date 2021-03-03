// ************************************************************
// variables
const navbar = document.querySelector('.navUp')

// event listeners
document.addEventListener('scroll', moveNavUp)

// functions
function moveNavUp(evt) {

    // check page scrollDown or not
    if (window.scrollY > 100) {

        // style the navbar when scroll
        navbar.style.backgroundColor = '#6743b0'
        navbar.style.padding = '0'
        navbar.style.zIndex = '2'

    } else {

        // reset styles when doc at top
        navbar.style.backgroundColor = ''
        navbar.style.padding = '0.8rem'
    }
}
// ************************************************************
console.log(document.documentElement.clientHeight)

// const items = document.querySelectorAll('.card');

// const isInViewport = el => {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// const run = () =>
//     items.forEach(item => {
//         if (isInViewport(item)) {
//             item.classList.add('show');
//         }
//     });

// // Events
// window.addEventListener('load', run);
// window.addEventListener('resize', run);
// window.addEventListener('scroll', run);
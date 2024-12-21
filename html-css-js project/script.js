// dark/light mode
const mode = window.localStorage.getItem('mode') || 'light'
document.body.classList.add(mode === 'light' ? 'light-theme' : 'dark-theme')

const themeBtn = document.querySelectorAll('.theme-btn')
for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.add(mode === 'light' ? 'light' : 'dark')

    themeBtn[i].addEventListener('click', () => {
        const currentMode = document.body.classList.contains('light-theme') ? 'light' : 'dark'
        const newMode = currentMode === 'light' ? 'dark' : 'light'
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(`${newMode}-theme`)
        window.localStorage.setItem('mode', newMode)

        for (let j = 0; j < themeBtn.length; j++) {
            themeBtn[j].classList.remove('light', 'dark')
            themeBtn[j].classList.toggle(newMode)
        }
    })
}
// mobile nav btn
const mobileBtn = document.querySelector('.nav-menu-btn')
const navCloseBtn = document.querySelector('.nav-close-btn')
const mobileNav = document.querySelector('.mobile-nav')
const navClose = () => { mobileNav.classList.toggle('active') }
const navOpen = () => { mobileNav.classList.toggle('active') }
mobileBtn.addEventListener('click', () => { mobileNav.classList.toggle('active') })
navCloseBtn.addEventListener('click', () => { mobileNav.classList.toggle('active') })

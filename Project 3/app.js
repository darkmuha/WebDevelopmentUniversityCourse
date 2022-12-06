const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const sections = document.querySelectorAll('section')
const navigationList = document.querySelectorAll('.navbar-item')
const herosButton = document.querySelector('.heroBtn')
const dealsButton = document.querySelector('.dealsBtn')
const staffsButton = document.querySelector('.staffsBtn')
const aboutsButton = document.querySelector('.aboutsBtn')

herosButton.addEventListener('click', () => {
  herosButton.textContent = 'Book me! Button Clicked'
})

dealsButton.addEventListener('click', () => {
  dealsButton.textContent = 'Book, Button Clicked'
})

staffsButton.addEventListener('click', () => {
  staffsButton.textContent = 'Learn More, Button Clicked'
})

aboutsButton.addEventListener('click', () => {
  aboutsButton.textContent = 'History, Button Clicked'
})

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  let curr = ''
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    // const sectionHeight = section.clientHeight
    if (scrollY + 5 > sectionTop) {
      curr = section.getAttribute('id')
    }
  })
  navigationList.forEach((li) => {
    li.classList.remove('underLine')
    if (li.classList.contains(curr)) {
      li.classList.add('underLine')
    }
  })
})

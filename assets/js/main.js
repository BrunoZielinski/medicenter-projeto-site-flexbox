const menuBtn = document.querySelector('.menu-btn i'),
  nav = document.querySelector('nav.nav')

menuBtn.onclick = () => {
  nav.classList.toggle('show-menu')

  if (nav.classList.contains('show-menu')) {
    menuBtn.classList.remove('fa-bars')
    menuBtn.classList.add('fa-times')
  } else {
    menuBtn.classList.add('fa-bars')
    menuBtn.classList.remove('fa-times')
  }
}

document.querySelector('.btn-to-top').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

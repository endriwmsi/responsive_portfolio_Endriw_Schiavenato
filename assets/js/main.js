$(document).ready(() =>{
  /* Trocar fundo do Header */
  function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50){
      header.classList.add('scroll-header');
    }else{
      header.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  
  /* Modal dos serviços */
  const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')
  
  let modal = function(modalClick){
      modalViews[modalClick].classList.add('active-modal')
  }
  
  modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
      modal(i)
    })
  })
  
  modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
      modalViews.forEach((mv) =>{
        mv.classList.remove('active-modal')
      })
    })
  })
  
  /* Scroll Reveal */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
  })
  sr.reveal(`.home__data`)
  sr.reveal(`.home__handle`, {delay: 700})
  sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'botton'})
  
  /* MiXITUP FILTER */
  let mixerPortfolio = mixitup('.work__container',{
    selectors: {
      target: '.work__card'
    },
    animation: {
      duration: 300
    }
  })
  
  /* Active Work */
  const linkWork = document.querySelectorAll('.work__item')
  function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
  }
 
  linkWork.forEach(l => l.addEventListener('click', activeWork))
  
  /* Swiper Testimonial */
  let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  });
  
  /* Active link por scroll sections*/
  const sections = document.querySelectorAll('section[id]')
  const scrollActive = () =>{
      const scrollY = window.pageYOffset
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
  
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)
  
  /* Light / Dark Theme */
  const themeButton = document.getElementById('theme-button')
  const lightTheme = 'light-theme'
  const iconTheme = 'bx-sun'
  
  /* Tópico selecionado anteriormente (se o usuário for selecionado) */
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  
  /* Obtemos o tema atual que a interface possui validando a classe dark-theme */
  const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  
  /* Validamos se o usuário já escolheu um tema */
  if (selectedTheme) {
    /* Se o tema ja foi escolhido, perguntamos qual 
    foi o problema para saber se ativamos ou desativamos o escuro */
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }
  
  /* Ativa/desativa o tema manualmente com o botão */
  themeButton.addEventListener('click', () => {
      /* Adiciona ou remove o tema de luz/ícone */
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)
      /* Salva o tema e o ícone atual que o usuário escolheu */
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
})


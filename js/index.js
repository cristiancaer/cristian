/**********************************************/
/*  English Language default
/**********************************************/
(function enDefLang() {
    let esOpt = document.getElementsByClassName('es-opt')
    for (let i = 0; i < esOpt.length; i++) {
      esOpt[i].style.display = 'none'
    }
  }())
  
  /**********************************************/
  /*  Loader
  /**********************************************/
  let section = document.getElementsByTagName("section")
  let loader_ctn = document.getElementById("loader_ctn")
  
  for(let i=0; i<section.length; i++) {
    section[i].style.display = 'none'
  }
  window.addEventListener("load", () => {
    for(let i=0; i<section.length; i++) {
      section[i].style.display = 'flex'
    }
    loader_ctn.style.display = 'none'
  })
  
  /**********************************************/
  /*  Select Language
  /**********************************************/
  function selectLan(el) {
    let lang = el.selectedIndex
    let esOpt = document.getElementsByClassName('es-opt')
    let enOpt = document.getElementsByClassName('en-opt')
  
    // english
    if (lang === 0) {
      for (let i = 0; i < esOpt.length; i++) {
        esOpt[i].style.display = 'none'
        enOpt[i].style.display = 'block'
      }
      console.log('Hello!')
    // spanish
    } else {
      for (let i = 0; i < enOpt.length; i++) {
        enOpt[i].style.display = 'none'
        esOpt[i].style.display = 'block'
      }
      console.log('Hola!')
    }
  }
  /* Show Read More */
function openReadMore(id) {
    let readMoreTXT = document.getElementById(id)
    let readMoreSection = document.getElementById(id + '-section')
    let showLessTXT= document.getElementById("about-show-less")

    console.log("You're curious 👀")
    readMoreTXT.style.display = 'none'
    readMoreSection.style.display = 'block'
    showLessTXT.style.display='block'

  }
  function closeReadMore(id) {
    let readMoreTXT = document.getElementById("about-read-more")
    let readMoreSection = document.getElementById("about-read-more"+ '-section')
    let showLessTXT= document.getElementById("about-show-less")
    readMoreTXT.style.display = 'block'
    readMoreSection.style.display = 'none'
    showLessTXT.style.display='none'
  }
 /**********************************************/
/*  Main Hero 
/**********************************************/
function toContact() {
  let heroContact = document.getElementsByClassName('hero-contact')
  let heroContact_0 = heroContact[0]

  let contactEl = document.documentElement.offsetHeight - heroContact_0.offsetHeight

  window.scroll({
    top: contactEl,
    left: 0,
    behavior: 'smooth'
  })
}
/*  Function on Scroll of About Section
/**********************************************/
function onScroll() {
  let heroContact = document.getElementsByClassName('hero-contact')
  let heroContact_0 = heroContact[0]
  
  let docElScroll = document.documentElement.scrollTop

  if (docElScroll + 1 >= document.documentElement.offsetHeight - heroContact_0.offsetHeight) {
    heroContact_0.style.zIndex = '0'
    console.log('Do you want to get in touch? 🖤')
  } else {
    heroContact_0.style.zIndex = '-1'
  }
}
/**********************************************/
/*  Set a Functions when window scrolls
/**********************************************/
document.addEventListener("scroll", function() {
  onScroll()
})
  
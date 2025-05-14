
let secs = document.querySelectorAll(".sec")

secs.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (!div.classList.contains("active") || e.target.classList.contains("more-links")) {
      secs.forEach(div => div.classList.remove("active"))
      div.classList.add("active")
    } else {
      secs.forEach(div => div.classList.remove("active"))
    }
  })
})

let menu = document.querySelector("menu")
let mobileMenu = document.querySelector(".mobile-menu")
let header = document.querySelector("header")

window.onresize = function () {
  menuChange()
}
menuChange()

function menuChange() {
  if (document.documentElement.clientWidth > 600) {
    mobileMenu.remove()
    header.append(menu)
  } else {
    menu.remove()
    header.append(mobileMenu)
    mobileCase()
  }
}

function mobileCase() {
  // icon change 

  let imgIcon = document.querySelector(".mobile-menu .icon > img")

  let isBurger = true;
  imgIcon.onclick = function () {
    mobileMenu.classList.toggle("active")
    if (isBurger) {
      imgIcon.src = "./images/icon-close.png"
      isBurger = false
    } else {
      imgIcon.src = "./images/icon-hamburger.png"
      isBurger = true
    }
  }

  // links info appearing

  let mobileLinks = document.querySelectorAll(".mobile-links .link > p")


  mobileLinks.forEach(link => {
    link.onclick = (e) => {
      if (!link.parentElement.classList.contains("active")) {
        mobileLinks.forEach(link => !link.parentElement.classList.remove("active"))
        !link.parentElement.classList.add("active")
      } else {
        mobileLinks.forEach(link => !link.parentElement.classList.remove("active"))
      }
    }
  })

}
/* ------------------------------------
#               Constants
 -------------------------------------- */
const theBody = document.getElementById("theBody")
const theHMTL = document.getElementsByTagName("html")[0]


let currentUrl = window.location.href
let protocol = window.location.protocol
let urlSite = window.location.hostname
let path = window.location.pathname

let domain = protocol + '//' + urlSite + '/'


/* ------------------------------------
#              Menu Scroll
 -------------------------------------- */
window.onscroll = () => activeMenu()
const mediaQuery = window.matchMedia('(min-width: 768px)')

function activeMenu() {
    let header = document.getElementsByClassName("header")
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header[0].classList.add("active")
    } else {
        header[0].classList.remove("active")
    }
}


/* ------------------------------------
#                 Menu
 -------------------------------------- */
let burguer = document.getElementById('burguer')
let burguerNav = document.getElementById('burguerNav')
let header = document.getElementsByClassName("header")
let close = document.getElementsByClassName("close")


function menuHide() {
    burguer.addEventListener('click', () => hideShowMenu())

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => closeMenu())
    }
}
menuHide()

function hideShowMenu() {
    if (burguerNav.classList.contains('active')) {
        burguerNav.classList.remove('active')
        header[0].classList.remove('active')
    } else {
        burguerNav.classList.add('active')
        header[0].classList.add('active')
    }
}

function closeMenu() {
    if (burguerNav.classList.contains('active')) {
        burguerNav.classList.remove('active')
        header[0].classList.remove('active')
    }
}


function SlepOpenHide() {
    let buttonMenu = document.getElementsByClassName("sub-menu__btn")

    for (let i = 0; i < buttonMenu.length; i++) {
        buttonMenu[i].addEventListener('click', () => {
            showHideDrop('slep-menu', i)

            let dropmenu = document.getElementsByClassName('slep-menu')[i]
            let header = document.getElementsByClassName('header')[i]

            if (dropmenu.classList.contains('active')) {
                header.classList.add('slep-active')
                theBody.classList.add('-overHidden')
            } else {
                header.classList.remove('slep-active')
                theBody.classList.remove('-overHidden')
            }
        })

        closeDrop('slep-menu__close', 'slep-menu', i)
    }
}

SlepOpenHide()


/* ------------------------------------
#                 Slide
 -------------------------------------- */
function slideFunc() {
    let slep = document.getElementsByClassName( 'splide--slep' )
    let slepModal = document.getElementsByClassName( 'splide--slep-modal' )

    for ( let i = 0; i < slep.length; i++ ) {
        new Splide( slep[ i ], {
            type: 'slide',
            width: '1070px',
            perPage: 4,
            perMove: 1,
            pagination: false,
            autoWidth: true,
            gap: '40px',
        } ).mount( )
    }

    for ( let i = 0; i < slepModal.length; i++ ) {
        new Splide( slepModal[ i ], {
            type: 'slide',
            perPage: 2,
            perMove: 1,
            arrows: false,
            autoWidth: true,
            gap: '70px',
        } ).mount( )
    }
}
slideFunc()



/* ------------------------------------
#              Bookmarks
 -------------------------------------- */
let bookmarkMenu = document.getElementsByClassName('bookmarks')
for (i = 0; i < bookmarkMenu.length; i++) {
    const bookmark = bookmarkMenu[i]
    
    if (bookmark) createBookmarkMenu()
}

function createBookmarkMenu() {
    let h2s = document.querySelectorAll('h2')
    let bookmarkList = document.getElementsByClassName('bookmark__list')[0]

    for (i = 0; i < h2s.length; i++) {
        const h2Element = h2s[i]
        
        if (h2Element.id) {
            bookmarkList.innerHTML += `
                <li class="bookmark__item">
                    <a href="#${h2Element.id}">${h2Element.innerHTML}</a>
                </li>
            `
        }
    }
}

function bookmarkOpenHide() {
    let buttonDropdown = document.getElementsByClassName("bookmarks__title")

    for (let i = 0; i < buttonDropdown.length; i++) {
        for (let i = 0; i < buttonDropdown.length; i++) {
            buttonDropdown[i].addEventListener('click', () => showHideDrop('bookmarks',i))
        }
    }
}

bookmarkOpenHide()


/* ------------------------------------
#               Dropdown
 -------------------------------------- */
 
 function dropdownFunc() {
    let buttonDropdown = document.getElementsByClassName("dropdown")

     for (let i = 0; i < buttonDropdown.length; i++) {
         buttonDropdown[i].addEventListener('click', () => showHideDrop('dropmenu_list',i))
     }
 }
dropdownFunc()
 
function showHideDrop(dropClass, dropId) {
     let dropmenu = document.getElementsByClassName(dropClass)[dropId]
 
     if (dropmenu.classList.contains('active')) {
         dropmenu.classList.remove('active')
     } else {
         dropmenu.classList.add('active')
     }
}

function closeDrop(closeClass, dropClass, dropId) {
    let close = document.getElementsByClassName(closeClass)
    let dropmenu = document.getElementsByClassName(dropClass)[dropId]
    let header = document.getElementsByClassName('header')[dropId]

    for (let i = 0; i < close.length; i++) {

        close[i].addEventListener('click', () => {
            if (dropmenu.classList.contains('active')) {
                dropmenu.classList.remove('active')
                header.classList.remove('slep-active')
                theBody.classList.remove('-overHidden')
            }
        })

    }
}


// Acordiones
function acordionListOpenHide() {
    let buttonDropdown = document.getElementsByClassName("acordion-list__droptitle")

    for (let i = 0; i < buttonDropdown.length; i++) {
        for (let i = 0; i < buttonDropdown.length; i++) {
            buttonDropdown[i].addEventListener('click', () => showHideDrop('acordion-list__drop',i))
        }
    }
}
acordionListOpenHide()

function acordionListOpenHideMb() {
    let buttonDropdown = document.getElementsByClassName("acordion-list__header")

    for (let i = 0; i < buttonDropdown.length; i++) {
        for (let i = 0; i < buttonDropdown.length; i++) {
            buttonDropdown[i].addEventListener('click', () => showHideDrop('acordion-list',i))
        }
    }
}
acordionListOpenHideMb()

function actasOpenHide() {
    let buttonDropdown = document.getElementsByClassName("actas__header")

    for (let i = 0; i < buttonDropdown.length; i++) {
        for (let i = 0; i < buttonDropdown.length; i++) {
            buttonDropdown[i].addEventListener('click', () => showHideDrop('actas',i))
        }
    }
}
actasOpenHide()

/* ------------------------------------
#               Submenu
 -------------------------------------- */ 
function submenuOpenHide() {
    let anchor = document.getElementsByTagName('a')
    let numberDropdown = 0
    let numberOfDrops = []
    let countDropdown = []

    for (let i = 0; i < anchor.length; i++) {
        let isDropdown = anchor[i].getAttribute("title")

        if (isDropdown == 'dropdown') {
            numberOfDrops.push(i)

            for (let index = 0; index < 1; index++) {
                countDropdown.push(numberDropdown++)
            }            
        }
    }

    for (let i = 0; i < numberOfDrops.length; i++) {
        let numberAnchor = numberOfDrops[i]

        anchor[numberAnchor].addEventListener('click', () => showHideDrop('sub-menu', i))
    }
}

submenuOpenHide()


/* ------------------------------------
#      Increase/decrease font size 
 -------------------------------------- */
function increaseFont() {
    let increase = document.getElementById('increase')
    let max = 17
    
    increase.addEventListener('click', () => {
        let currentFontSize = parseFloat(window.getComputedStyle(theHMTL, null).fontSize)

        if (currentFontSize < max) {
            theHMTL.style.fontSize = ++currentFontSize + 'px'
        }
    })
}
increaseFont()

function decreaseFont() {
    let decrease = document.getElementById('decrease')
    let min = 13
    
    decrease.addEventListener('click', () => {
        let currentFontSize = parseFloat(window.getComputedStyle(theHMTL, null).fontSize)

        if (currentFontSize > min) {
            theHMTL.style.fontSize = --currentFontSize + 'px';
        }
    })
}
decreaseFont()

/* ------------------------------------
#            Change colors
 -------------------------------------- */
 function changeColorsTheme() {
    let colorChanger = document.getElementById('colorChanger')

    colorChanger.addEventListener('click', () => {
        if (theBody.classList.contains('change-color')) {
            theBody.classList.remove('change-color')
        } else {
            theBody.classList.add('change-color')
        }
    })
}
changeColorsTheme()


/* ------------------------------------
#                 Modal
 -------------------------------------- */

MicroModal.init({
    onShow: () => theBody.classList.add('-overHidden'),
    onClose: () => theBody.classList.remove('-overHidden'),
})


/* ------------------------------------
#                 Tabs
 -------------------------------------- */

function mostrarPestana(number, tabs, header) {
    for (let i = 0; i < tabs.length; i++) {        
        if (tabs[i].className.includes("active")) {
            tabs[i].className = tabs[i].className.replace(" active", "")
            header[i].className = header[i].className.replace(" active", "")
    
            break
        }
    }

    tabs[number].className += " active"
    header[number].className += " active"
}

function navegationTabs() {
    let tabs = document.getElementsByClassName("tabs__item")
    let headers = document.getElementsByClassName("header-tab")

    for (let i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener(
            'click', () => { 
                mostrarPestana(i, tabs, headers)
            }
        )

    }
}
navegationTabs()

function actasTabs() {
    let tabs = document.getElementsByClassName("tabs__item-actas")
    let headers = document.getElementsByClassName("actas-tab")

    for (let i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener(
            'click', () => { 
                mostrarPestana(i, tabs, headers)
            }
        )

    }
}
actasTabs()
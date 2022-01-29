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
#               Dropdown
 -------------------------------------- */
 
 function dropdownFunc() {
    let buttonDropdown = document.getElementsByClassName("dropdown")

    for (let i = 0; i < buttonDropdown.length; i++) {
        buttonDropdown[i].addEventListener('click', () => showHideDrop('dropdown__list',i))
    }
 }
dropdownFunc()
 
function showHideDrop(dropClass, dropId) {
    let dropmenus = document.getElementsByClassName(dropClass)
    let dropmenu = document.getElementsByClassName(dropClass)[dropId]

    if (dropmenu.classList.contains('active')) {
        dropmenu.classList.remove('active')
        return
    }

    for (let i = 0; i < dropmenus.length; i++) {        
        dropmenus[i].classList.remove('active')
    }

    dropmenu.classList.toggle('active')
}


/* ------------------------------------
#               Acordion
 -------------------------------------- */

function acordionFunction(number, content) {
    if (content[number].classList.contains('active')) {
        content[number].classList.remove('active')
        return
    }

    for (let i = 0; i < content.length; i++) {        
        content[i].classList.remove('active')
    }

    content[number].classList.toggle('active')
}

function acordionFaq() {
    let acordionBtn = document.getElementsByClassName("question__title")
    let contents = document.getElementsByClassName("acordion")

    for (let i = 0; i < acordionBtn.length; i++) {
        acordionBtn[i].addEventListener( 'click', () => acordionFunction(i, contents) )
    }
}
acordionFaq()

/* ------------------------------------
#                Modal
 -------------------------------------- */
function modalFunction() {
    let modal = document.getElementsByClassName("modal")
    let modalOverlay = document.getElementsByClassName("modal__overlay")
    let openBtn = document.getElementsByClassName("modal-btn")
    let closeBtn = document.getElementsByClassName("modal-close")

    for (let i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener('click', () => {
            if (!modal[i].classList.contains('active')) {
                modal[i].classList.add('active')
                theBody.classList.add('overHidden')
            }
        })

        window.onclick = function (event)  {
            if (event.target == modalOverlay[i]) { 
                modal[i].classList.remove('active')
                theBody.classList.remove('overHidden')
            }
        }

        closeBtn[i].addEventListener('click', () => {
            if (modal[i].classList.contains('active')) { 
                modal[i].classList.remove('active')
                theBody.classList.remove('overHidden')
            }
        })
    }

}

modalFunction()
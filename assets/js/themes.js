/* let body = document.querySelector('body')
let header = document.querySelector('header')
let toggleButtonsBackground = document.querySelector('.buttons')
let toggleBtnTheme = document.querySelectorAll('.btn_theme')
let calculatorDisplay = document.querySelector('.calculator__display')
let calculatorKeys = document.querySelector('.calculator__keys_table')
let keyStandard = document.querySelectorAll('.keys__standard')
let keyNumber = document.querySelectorAll('.keys__number')
let keyEqual = document.querySelector('.keys__equal')

let css = document.querySelector('lin')

function themeTwo() {
    body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    header.style.color = 'hsl(60, 10%, 19%)'
    toggleButtonsBackground.style.backgroundColor = 'hsl(0, 5%, 81%)'
    toggleBtnTheme.forEach(e => {
        e.style.backgroundColor = 'hsl(25, 98%, 40%)'
    })
    calculatorDisplay.style.backgroundColor = 'hsl(0, 0%, 93%)'
    calculatorDisplay.style.color = 'hsl(60, 10%, 19%)'
    calculatorKeys.style.backgroundColor = 'hsl(0, 5%, 81%)'
    keyStandard.forEach(e => {
        e.style.backgroundColor = 'hsl(185, 42%, 37%)'
        e.style.borderBottom = '4px solid hsl(185, 58%, 25%)'
        e.style.color = '#fff'
    })
    keyNumber.forEach(e => {
        e.style.backgroundColor = 'hsl(45, 7%, 89%)'
        e.style.borderBottom = '4px solid hsl(35, 11%, 61%)'
        e.style.color = 'hsl(60, 10%, 19%)'
    })
    keyEqual.style.backgroundColor = 'hsl(25, 98%, 40%)'
    keyEqual.style.borderBottom = ''
}

document.querySelector('.btn_theme').addEventListener('click', () => {
    themeTwo()
}) */

document.addEventListener('DOMContentLoaded', () => {

    let url1 = 'assets/css/style.css'
    let url2 = 'assets/css/style2.css'
    let url3 = 'assets/css/style3.css'
    let button = document.querySelectorAll('.btn_theme')

    button.forEach(e => {
        e.addEventListener('click', () => {
            if (e.getAttribute('value') == 1) criarTag(url1)
            if (e.getAttribute('value') == 2) criarTag(url2)
            if (e.getAttribute('value') == 3) criarTag(url3)
        })
    })

    function criarTag(url) {
        let estilo = document.createElement('link')
        estilo.rel = 'stylesheet'
        estilo.type = 'text/css'
        estilo.href = url
        document.body.appendChild(estilo)
    }

})
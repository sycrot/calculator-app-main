document.addEventListener('DOMContentLoaded', () => {

    let url1 = 'assets/css/style.css'
    let url2 = 'assets/css/style2.css'
    let url3 = 'assets/css/style3.css'
    let button = document.querySelectorAll('.btn_theme')
    let th = document.querySelectorAll('.btn_theme_th')

    selectLabels(button)
    selectLabels(th)

    function selectLabels(label) {
        label.forEach(e => {
            e.addEventListener('click', () => {
                if (e.getAttribute('value') == 1) {
                    criarTag(url1) 
                }
                if (e.getAttribute('value') == 2) {
                    criarTag(url2)
                }
                if (e.getAttribute('value') == 3) {
                    criarTag(url3)
                }
            })
        })
    }

    function criarTag(url) {
        let estilo = document.createElement('link')
        estilo.rel = 'stylesheet'
        estilo.type = 'text/css'
        estilo.href = url
        document.body.appendChild(estilo)
    }

})
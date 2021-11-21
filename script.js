function taboada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número para gerar uma tabuada.')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Esse linha de código limpa a tabuada. - Antes de mostrar a tabuada, o innerHTML de tab recebe: ''.
        while (c <= 10) {
            let item = document.createElement('option') //Criação de elementos do tipo "option" dentro de "select" porém através do JS.
            item.text = `${n} x ${c} = ${n * c}` //"item.text": a "var item" (elemento) vai ter como o seu texto a "template string".
            item.value = `tab${c}` //Em PHP, esse linha é importante. Ela permite selecionar, indidualmente, cada elemento de "item".
            tab.appendChild(item) //"item" será adicionada como um "filho" de "tab".
            c++ //"c++" garante que a var c continue subindo: 1, 2, 3, 4 e assim por diante - para poder gerar os múltiplos da tabuada.
        }
    }
}

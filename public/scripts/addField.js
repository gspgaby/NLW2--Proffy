// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Limpar os campos: Que campos?

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    //Limpar os campos: Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // pegar o field do momento e limpa ele
    fields.forEach(function(field) {
        // take the current field and clear
        field.value = ""
    })

    
    //Colocar na página: Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    
}
let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let respNome = document.querySelector("div#formulario_nome")
let BotaoDados = document.getElementById("BotaoDados")
let BotaoPronto = document.getElementById("BotaoPronto")
let BotaoRepitir = document.getElementById("BotaoRepitir")
const respostaPara_dados = document.getElementById("resp_dados")
const respostaPara_result = document.getElementById("resp_resultadoTOT")
let detecRepet = "sim"

let contPessoas = 1
let maiorIdade = 0
let nomesArquivo = []
let idadesArquivo = []
let detector_repetN = 0
let nome_maiorIdade = ""
function verificar() {
    if (idade.value > 130 || idade.value <= 0) {
        alert("[ERRO]: lamento, a idade está com valores irreais, tente trocalos.")
    } else { 
        if (nomesArquivo.length == 0) {

            nomesArquivo.push(nome.value)
            idadesArquivo.push(idade.value)
            contPessoas += 1
            respNome.innerHTML = `Dijite o ${contPessoas}° nome:`
            
            if (idade.value > maiorIdade) {
                maiorIdade = idade.value
                nome_maiorIdade = nome.value 
            }
            nome.value = ""
            idade.value = ""
            nome.focus()
        } else {

            for (let c = 0 ; c < 5 ; c++ ) {
                if (nome.value == nomesArquivo[c]) {
                    alert("[ERRO]: o nome não pode se repitir.")
                    detector_repetN = 1
                } 
            }

            if (detector_repetN == 0) {
                
                nomesArquivo.push(nome.value)
                idadesArquivo.push(idade.value)
                contPessoas += 1
                respNome.innerHTML = `Dijite o ${contPessoas}° nome:`

                if (idade.value > maiorIdade) {
                    maiorIdade = idade.value
                    nome_maiorIdade = nome.value 
                }
                nome.value = ""
                idade.value = ""
                nome.focus()
            }
            detector_repetN = 0
        }  

    }  
        
    if (contPessoas == 6) {
        respNome.innerHTML = `Dijite o 5° nome:`
        nome.setAttribute("disabled","disabled")
        idade.setAttribute("disabled","disabled")
        BotaoPronto.setAttribute("disabled","disabled")
        BotaoDados.removeAttribute("disabled")
    }
}

function dados() {
    BotaoRepitir.removeAttribute("disabled","disabled")
    BotaoDados.setAttribute("disabled","disabled")
    for (let c = 0 ; c < 5 ; c++) {
        respostaPara_dados.innerHTML += `Nome: ${nomesArquivo[c]} | Idade: ${idadesArquivo[c]} <br>`
    }
    
    respostaPara_result.innerHTML += `Idade média aproximada do grupo listado: ${mediaIdade()} <br>`
    respostaPara_result.innerHTML += `A pessoa com a maior idade é ${nome_maiorIdade} com ${maiorIdade} de idade.`
     
}

function mediaIdade() {

    let somaTot = 0
    for (let c = 0 ; c < 5 ; c++) {
        somaTot += Number(idadesArquivo[c])
    }
    let media = Number.parseInt(somaTot / 5)
    
    return media
}

function repitir() {
    respostaPara_dados.innerHTML = ``
    respostaPara_result.innerHTML = ``
    nome.value = ""
    idade.value = ""
    nome.focus()
    contPessoas = 1
    maiorIdade = 0
    nomesArquivo = []
    idadesArquivo = []
    detector_repetN = 0
    nome_maiorIdade = ""
    respNome.innerHTML = `Dijite o 1° nome:`
    nome.removeAttribute("disabled","disabled")
    idade.removeAttribute("disabled","disabled")
    BotaoPronto.removeAttribute("disabled","disabled")
    BotaoRepitir.setAttribute("disabled","disabled")
    
    
}
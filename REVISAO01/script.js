//Questão 01
let peso= 70
let altura= 1.7

document.querySelector("#out01").innerText= `${(peso/(altura*altura)).toFixed(2)}`

//Questão 02
let anosF= document.querySelector("#anos02")
let cigarroF= document.querySelector("#cigarro02")
let carteiraF= document.querySelector("#carteira02")

anosF.addEventListener('keydown', function(event){
	if(isNaN(event.key) && event.key!= "Backspace")event.preventDefault()
})

cigarroF.addEventListener('keydown', function(event){
	if(isNaN(event.key) && event.key!= "Backspace")event.preventDefault()
})

carteiraF.addEventListener('keydown', function(event){
	if(isNaN(event.key) && event.key!= "." && event.key!= "Backspace")event.preventDefault()
})

document.querySelector("#btn02").addEventListener("click", event=> {
	const nAnos02= Number(anosF.value)
	const nCigarro02= Number(cigarroF.value)
	const valor02= Number(carteiraF.value)

	document.querySelector("#out02").innerText= `R$ ${((nCigarro02/10)* (nAnos02*365)* valor02).toFixed(2)}`

	anosF.value= ``
	cigarroF.value= ``
	carteiraF.value= ``
})

//Questão 03
let amalia= document.querySelector("#amalia03")
let joaquim= document.querySelector("#joaquim03")
let out03= document.querySelector("#out03")

amalia.addEventListener("keydown", event=> {
	if(isNaN(event.key) && event.key!= "Backspace") event.preventDefault()
})

joaquim.addEventListener("keydown", event=> {
	if(isNaN(event.key) && event.key!= "Backspace") event.preventDefault()
})

document.querySelector("#btn03").addEventListener("click", event=> {
	const iAmalia= Number(amalia.value)
	const iJoaquim= Number(joaquim.value)

	if(iAmalia > iJoaquim) out03.innerText= `Amália com ${iAmalia} anos`
	else if(iJoaquim > iAmalia) out03.innerText= `Joaquim com ${iJoaquim} anos`
	else out03.innerText= `Ambos tem ${iJoaquim} anos`

	amalia.value= ``
	joaquim.value= ``
})
//Questão 04
let vida= document.querySelector("#saude04")
let dano= document.querySelector("#dano04")
let out04= document.querySelector("#out04")

vida.addEventListener("keydown", event=> {
	if(isNaN(event.key) && event.key!= "Backspace") event.preventDefault()
})

dano.addEventListener("keydown", event=> {
	if(isNaN(event.key) && event.key!= "Backspace") event.preventDefault()
})

document.querySelector("#btn04").addEventListener("click", event=> {
	qVida= Number(vida.value)
	qDano= Number(dano.value)

	if(qVida> qDano) out04.innerText= `O personagem sobreviverá com ${qVida- qDano} vida restante`
	else out04.innerText= `O morrerá`

	vida.value= ``
	dano.value= ``
})

//Questão 05
let txt05= document.querySelector("#txt05")
let nEscolhidos= []
let nSortidos= []
var qtdNum= 0

txt05.addEventListener("keydown", event=> {
	if(isNaN(event.key) && event.key!= "Backspace") event.preventDefault()
})

document.querySelector("#btn05").addEventListener("click", function() {
	qtdNum++
	let nTxt= Number(txt05.value)

	nEscolhidos.push(nTxt)
	txt05.value= ``

	document.querySelector("#out05").innerText= `${nEscolhidos}`

	if(qtdNum== 6) {
		for(let i=0; i<6; i++) nSortidos.push(Math.floor(Math.random()*60 + 1))

		document.querySelector("#btn05").remove()
		document.querySelector("#sortidos05").innerText= `Os números sortidos são: ${nSortidos}`
	}
})

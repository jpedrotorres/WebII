//Questão 01
let contaA= 0
let txt01= document.querySelector("#txt01")

document.querySelector("#sendBtn01").onclick= msg=> 
	document.querySelector("#out01").innerHTML= `A letra "a" apareceu ${contaA} vezes na sua frase`

document.querySelector("#clearBtn01").onclick= msg=> {
	document.querySelector("#out01").innerHTML= ``
	txt01.value= ``
	contaA= 0
}

txt01.addEventListener("keyup", event=> {
	if(event.code == "KeyA") contaA++

	if(event.key == "Enter") document.querySelector("#sendBtn01").click()
})

//Questão 02

document.querySelector("#txt02").addEventListener("keyup", event=> {
	
})

//Questão 03
function pressKey(e) {
	if(e.code== "KeyA") document.querySelector("#out03").innerHTML= "Parabéns pelo comando!"
}

document.addEventListener("keydown", function(event) {
	if(event.code== "ShiftLeft") document.addEventListener("keydown", pressKey)
})

//Questão 04
let screenGame= document.querySelector("#keyHero")
let btn04= document.querySelector("#btn04")
var gameStart= false
let erros= 0
let acertos= 0
let letra
let screenStart= screenGame.innerHTML

let contagem= `<div id= "containerC">
			<p>Acertos: <span id= "getAcerto">0</span></p>
			<p>Erros: <span id= "getErros">0</span></p>
			<p>Tempo: <span id= "getTempo">5</span>s</p>
		</div>
		<div id= "mostraTeclas">
			<span id= "tecla"></span>
		</div>`

btn04.addEventListener("click", event=> {
	gameStart= true

	screenGame.style.justifyContent= "flex-start"
	screenGame.innerHTML= contagem
	screenGame.querySelector("#containerC").style.alignSelf= "flex-start"

	letra= escolheLetra().toUpperCase()
	document.querySelector("#tecla").innerHTML= letra

	if(gameStart) {
		regresso()
		let intervalo= setInterval( event=> {
			regresso()
			letra= escolheLetra().toUpperCase()
			document.querySelector("#tecla").innerHTML= letra
		}, 5000)

		setTimeout ( event=> {
			clearInterval(intervalo)
			screenGame.style.justifyContent= "center"
			screenGame.innerHTML= screenStart
			document.removeEventListener("keydown", contaPonto)
		}, 50000)

		document.addEventListener("keydown", contaPonto)
		gameStart= false
	}
	console.log(gameStart)
})

let contaPonto= event=> {
	let plvPasse= "Key"

	if(verificaNum(letra)) plvPasse= "Digit"

	if(event.code == plvPasse+letra) {
		acertos++
		screenGame.querySelector("#getAcerto").innerText= acertos
	} else {
		erros++
		screenGame.querySelector("#getErros").innerText= erros
	}
}

var seg= 5
function regresso() {
	if(seg> 0) {
		seg--
		screenGame.querySelector("#getTempo").innerText= seg
		setTimeout("regresso()", 1000)
	} else seg= 5
}

function escolheLetra() {
	const alfaNum= "abcdefghijklmnopqrstuvwxyz0123456789"
	const numRandom= Math.floor(Math.random()* alfaNum.length)

	const escolhida = alfaNum.charAt(numRandom)

	return escolhida
}

function verificaNum(ltr) {
	return !isNaN(Number(ltr))
	
}

//Questão 05
let disableRange= false
range05= document.querySelector("#range05")

document.getElementById("stopRange").onclick= function() {
	console.log(disableRange)
	if(!disableRange) {
		disableRange= true
		range05.disabled= true
	} else {
		disableRange= false
		range05.disabled= false
	}
}

range05.addEventListener("input", function(e) {
	e.preventDefault()
	document.querySelector("#txt05").innerHTML= this.value
})
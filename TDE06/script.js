//Questão 01
nomePessoa= document.querySelector("#nome")
botaoEnvio= document.querySelector("#enviar")
boasVindasOut= document.querySelector("#boasVindas")

botaoEnvio.addEventListener('click', function() { 
			boasVindasOut.innerHTML= `Seja muito bem vinda, pessoa chamada <strong>${nomePessoa.value}</strong>`})

//Questão 02
calculadora01= document.querySelector("#calculadora1")
calculadora02= document.querySelector("#calculadora2")
operacao= document.querySelector(".btn02")
resultadoOut= document.querySelector("#resultadoCalculo")

operacao.addEventListener("click", function() {
	calc1= Number(calculadora01.value)
	calc2= Number(calculadora02.value)
	op= Number(operacao.dataset.action)

	console.log(op)
	var resultado

	switch(op) {
		case 1:
			resultado= calc1+calc2
			break

		case 2:
			resultado= calc1-calc2
			break

		case 3:
			resultado= calc1*calc2
			break

		case 4:
			if(calc2==0) resultado= `0 não`
			else resultado= calc1/calc2
			break

		default:
			resultado= 0
	}

	return resultadoOut.innerHTML= `O resultado é: ${resultado}`
})

//Questão 03
adressN1= document.querySelector("#nota1")
adressN2= document.querySelector("#nota2")
adressN3= document.querySelector("#nota3")
btnMedia= document.querySelector("#enviaMedia")
mediaOut= document.querySelector("#mediaAritmetica")


btnMedia.addEventListener('click', media=> mediaOut.innerHTML= `A média das notas é de ${(Number(adressN1.value)+ Number(adressN2.value)+ Number(adressN3.value))/3}`)

//Questão 04
adressSub1= document.querySelector("#subNum1")
adressSub2= document.querySelector("#subNum2")
btnSub= document.querySelector("#subtrair")
subtrairOut= document.querySelector("#subtracaoDoisNum")

btnSub.addEventListener("click", function() {
	sub1= Number(adressSub1.value)
	sub2= Number(adressSub2.value)

	return subtrairOut.innerHTML= `${sub1-sub2}`
})

//Questão 05
adressTabuada= document.querySelector("#numTabuada")
btnTabuada= document.querySelector("#enviaTabuada")
tabuadaOut= document.querySelector("#tabuada")

btnTabuada.addEventListener("click", function() {
	numTbd= Number(adressTabuada.value)
	mensagem= `<br>Tabuada do número ${numTbd}<br>`
	for(i=1; i<11; i++) mensagem+= `${i}x${numTbd}= ${i*numTbd}<br>`

	return tabuadaOut.innerHTML= `${mensagem}`
})

//Questão 06
nada= document.querySelector("#algumaCoisa")
btnNada= document.querySelector("#calculaNada")
nadaOut= document.querySelector("#absolutamenteNada")

btnNada.addEventListener("click", mensagem=> nadaOut.innerHTML= `Parabéns, nada irá acontecer!`)

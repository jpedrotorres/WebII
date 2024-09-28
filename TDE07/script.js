//Questão 01
document.querySelector("#div01").addEventListener("mousedown", msg=> console.log(`Acabaram de clicar no bloco!`))

//Questão 02
document.querySelector("#div02").addEventListener("mouseup", msg=> msg.target.innerHTML= `Você me soltou`)

//Questão 03
document.querySelector("#alert03").addEventListener("click", msg=> alert(`Eu avisei!`))

//Questão 04
var dblActive= false

document.querySelector("#div04").addEventListener("dblclick", color=> {
	if(!dblActive) {
		color.target.style.background= "#0f0f0f"
		dblActive= true
	} else {
		color.target.style.background= "#9936af"
		dblActive= false
}})

//Questão 05
document.querySelector("#div05").addEventListener("mousemove", cdd=>
	cdd.target.innerHTML= `X: ${cdd.clientX}<br>Y: ${cdd.clientY}`)

document.querySelector("#div05").addEventListener("mouseout", cdd=>
	cdd.target.innerHTML= `Veja!`)

//Questão 06
document.querySelector("#div06").addEventListener("mouseenter", color=>
	color.target.style.background= "#559a5a")

document.querySelector("#div06").addEventListener("mouseout", color=>
	color.target.style.background= "#2fe04f")

//Questão 07
var div07= document.querySelector("#div07")
isDragging= false


div07.addEventListener("mousedown", mouse=> {
	mouse.target.style.cursor= "grabbing"
	isDragging= true
})

document.addEventListener("mousemove", function(e) {
	if(isDragging) {
		div07.style.left= `${e.pageX - div07.offsetLeft}px`
		div07.style.top= `${e.pageY - div07.offsetTop}px`
	}
})

div07.addEventListener("mouseup", mouse=> {
	mouse.target.style.cursor= "grab"
	isDragging= false
})

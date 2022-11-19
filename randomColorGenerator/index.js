const colorBlock = document.querySelector("#clrblock") //Target the element you want to generate random color
const rgbText= document.querySelector("#rgb")

function generateRandomColor(){
    const a = Math.round(Math.random()*255)
    const b = Math.round(Math.random()*255)
    const c = Math.round(Math.random()*255)

    colorBlock.style.backgroundColor=`rgb(${a},${b},${c})`
    rgbText.innerHTML=`rgb(${a}, ${b}, ${c})`
}
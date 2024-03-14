
const flechaBtn = document.getElementById("flechaBtn")
const shareBox = document.getElementById("share")
const colorArrow = document.getElementById("flecha")

let isDisplay = false

flechaBtn.addEventListener("click", function(){
    if(isDisplay) {
        shareBox.classList.add("isShow")
        isDisplay = !isDisplay
        flechaBtn.classList.add("colorInicial")
        flechaBtn.classList.remove("cambioColor")
        colorArrow.style.fill = "#6E8098"


    } else{
        shareBox.classList.remove("isShow")
        isDisplay = !isDisplay
        flechaBtn.classList.remove("colorInicial")
        flechaBtn.classList.add("cambioColor")
        colorArrow.style.fill = "white"
        
    }
})
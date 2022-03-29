

let clickToShowFQS = document.getElementsByClassName("clickToShowFQS")

let hiddenText = document.getElementsByClassName("hiddenText")

let count = 0;
clickToShowArr.forEach((c, i) => {
    c.onclick = () => {
       
            hiddenText[i].style.display = "block"
       
            hiddenText[i].style.display = "none"
    }

})
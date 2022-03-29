

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
let clickToShowFQS = document.getElementsByClassName("clickToShowFQS")

let hiddenText = document.getElementsByClassName("hiddenText")

let count = 0;
<<<<<<< Updated upstream
clickToShowArr.forEach((c, i) => {
    c.onclick = () => {
       
            hiddenText[i].style.display = "block"
       
            hiddenText[i].style.display = "none"
    }

})
=======

let hiddenTextArr = Array.from(hiddenText)
let clickToShowArr = Array.from(clickToShowFQS)
clickToShowArr.forEach((c, i) => {
    c.onclick = () => {
        count++;
        if (count % 2 !== 0) {
            hiddenText[i].style.display = "block"
        } else {
            hiddenText[i].style.display = "none"
        }
        //  hiddenText[i-1].style.display="none"
        //  hiddenText[i+1].style.display="none"
        //  hiddenText[i+2].style.display="none"
        //  hiddenText[i-2].style.display="none"
    }

})



// let clickToShowFQS = document.getElementsByClassName("clickToShowFQS")
// clickToShowFQS.addEventListener("click",()=>{
// document.getElementsByClassName("hiddenText").style.display="block"
    
// })
>>>>>>> Stashed changes

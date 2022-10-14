let input= document.querySelectorAll(".input")
let playingValue = ''
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')


for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
       
       console.log("hello " + input[i].innerText)
        
        holding.setAttribute('id', input[i].innerText) 
        console.log(holding.id)
        return
    })
    
}

for(let j = 0; j<boardSquare.length; j++){
    boardSquare[j].addEventListener('click',()=>{
        boardSquare[j].innerHTML=holding.id
        return;
    }
    )
}

let input= document.querySelectorAll(".input")
let playingValue = ''
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')
let completed = false

for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
       
       console.log("hello " + input[i].innerText)
        
        holding.setAttribute('id', input[i].value) 
        console.log(holding.id)
        return
    })
    
}

const completionCheck =()=>{
    for (let i=0; i <boardSquare.length; i++){
    if( boardSquare[i].innerText !== ""){
        completed = true
        return
    }
}
}
//the inhibitor is only checking the original input before just bypassing the check

for(let i = 0; i<boardSquare.length; i++){    
        boardSquare[i].addEventListener('click',function(e){  
    for(let j = 1; j<4; j++){    
        for(let k=0; k<9;k++){    //this doesn't need to be repeated three times but because it won't loop it's just here
     if         (   document.querySelectorAll(`.${e.target.classList[1]}`)[k].innerText === holding.id ){
        console.log("check 1")
        return
     } else if  (   document.querySelectorAll(`.${e.target.classList[2]}`)[k].innerText === holding.id ){
        console.log("check 2")
     } else if  (   document.querySelectorAll(`.${e.target.classList[3]}`)[k].innerText === holding.id ){
        console.log("check 3")
        return
        // pretty sure the check isn't being reinitialized everytime
    }else  {
        
        boardSquare[i].innerHTML=holding.id
        console.log("hi")

         }
        }
     }
    })
}
//save for later reference
// identifying the class list
//boardSquare[j].classList[1]+ boardSquare[j].classList[2]+ boardSquare[j].classList[3]
// boardSquare[j].classList[i] && boardSquare[j].innerText
        //checking the clicked square's stats
//e.target.classList[i] 

//e.target.innerHTML

//VV how to compare classList 
//
//boardSquare[j].classList.contains(`${e.target.classList[1]}`)
//
//document.querySelectorAll(`.${e.target.classList[i]}`)[k].innerHTML
//^^ this code checks for all 27 spaces (region, row, and column) for it's innerHTML.


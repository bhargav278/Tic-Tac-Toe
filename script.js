let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");
let newGame = document.querySelector(".new-button");
let msgPrint = document.querySelector(".message");
let text = document.querySelector("p");
let count = 0;

let winnerPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let signX = true;

function WinnerPrint(x){
    msgPrint.classList.remove("hidden");
    text.innerText = `Winner is ${x}`;
}
function draw(){
    msgPrint.classList.remove("hidden");
    text.innerText = "Match is draw";
}

function checkWinner(box){
    winnerPattern.forEach((pattern)=>{  
        if(boxes[pattern[0]].innerText != ""  && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText!= ""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                WinnerPrint(boxes[pattern[0]].innerText);
                boxes.forEach((box)=>{
                    box.disabled = true;
                });
            }
        }
    })
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(signX == true){
            box.style.color = "rgb(197, 64, 64)";
            box.innerText = "X";
            signX = false;
        }
        else{
            box.style.color = "black"
            box.innerText = "0";
            signX = true;
        }
        box.disabled = true;
        checkWinner(box);
        count++;
        if(count == 9){
            draw();
        }
    })
})


reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    signX = true;
    msgPrint.classList.add("hidden");
    count =0;
})

newGame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    signX = true;
    msgPrint.classList.add("hidden");
    count = 0;
})

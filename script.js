let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset_button");
let newGameBtn=document.querySelector(".renew");
let msgContainer=document.querySelector(".msg_cont");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
     
     if(turnO){//playerO
        box.innerText="O";
        turnO= false;
     }
     else{//PLAYERX
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;

     checkWinner();
  }

  );
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
   msg.innerText=`Congratulation!! Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner= ()=>{
 for( let pattern of winPatterns){
   let posVal1=boxes[pattern[0]].innerText;
   let posVal2=boxes[pattern[1]].innerText;
   let posVal3=boxes[pattern[2]].innerText;
   
   if(posVal1!=""&& posVal2!="" && posVal3!=""){
    if(posVal1===posVal2 && posVal2===posVal3 && posVal1===posVal3){
       
        showWinner(posVal1);
    }
   }
 }
};

const resetGame=()=>{
 turnO= true;
 enableBoxes();
 msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
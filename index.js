 const inputEL =document.querySelector(".input");
 const bodyEl=document.querySelector("body");

 inputEL.checked=JSON.parse(localStorage.getItem("mode"));
 updatebody();
 

 function updatebody(){
    if (inputEL.checked){
        bodyEl.style.background="black";
    }else{
        bodyEl.style.background="white";
    }
 }

inputEL.addEventListener("input", ()=>{
    updatebody();
    updateLocalStorate();
})

function updateLocalStorate(){
    localStorage.setItem("mode", JSON.stringify(inputEL.checked));
}
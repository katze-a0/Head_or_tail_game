
let username_submit=(event) =>{
    event.preventDefault();
      //prevents form loading on submit 

      let userName=document.getElementById("username").value;
      console.log(userName);
     if(userName.length>=5){

     }
     else{
        alert("username must be atleast 5 characters long!");
        return;
     }
   // alert("submitted");
    
document.getElementById("user").innerHTML=userName;

//hiding username div
document.getElementById("name").style.display="none";
//show game div
document.getElementById("game").style.display="block";
};

const start_game=(side) =>{
    document.getElementById("result").style.display="none";
    document.getElementById("flipping").style.display="block";

    console.log(side);
    setTimeout(() => {
        get_results(side);
        document.getElementById("flipping").style.display="none";
        document.getElementById("result").style.display="block";
    },3000);

}
const get_results=(side)=>{
    const coin_side=Math.floor(Math.random()*(2-1+1)+1);

     let flipped_side="  ";
     if(coin_side===1){
        flipped_side="Head";
     } 
     else{
        flipped_side="Tail";
     }


    document.getElementById("result").innerHTML="coin was flipped and result was: <h2>"+ flipped_side +"</h2>";
if(coin_side===1){
   if(side==="head"){
   won();
   }
   else{
   lost();
   }

}

else{
    if(side==="tail"){
       won();
       }
       else{
      lost();
       }
}}

const won=()=>{
    setTimeout(()=>{
alert("you won!");
    },1000)
}
const lost=()=>{
    setTimeout(()=>{
alert("you lost :)");
    },1000)
}


const button = document.querySelectorAll(".drum");
for (let i = 0; i < button.length; i++) {
 button[i].addEventListener("click",function ()  {
   var currentButton=this.innerHTML;
   soundMake(currentButton);
} ); 
}
document.addEventListener("keypress",function(event) {
      soundMake(event.key);
});
function soundMake(event) {
    console.log(event);
      switch (event){
         case "w":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                FlashlightAnimation(event);
                break;
         case "a":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                FlashlightAnimation(event);
                break;
          case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                FlashlightAnimation(event);
                break;       

          case "d":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                FlashlightAnimation(event);
                break;
          case "j":
                var snare= new Audio("sounds/snare.mp3");
                snare.play();
                FlashlightAnimation(event);
                break;
          case "k":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
                FlashlightAnimation(event);
                break;
          case "l":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                FlashlightAnimation(event);
                break;      
          default:
                alert("Press the key of keyboard you want to play the music for OR you can just click on that button using mouse");  
                break;    
      }     
       
  };

  function FlashlightAnimation(event) {
      
        var currentButton = document.querySelector("."+event);
        currentButton.classList.add("pressed");
        setTimeout (function(){
              currentButton.classList.remove("pressed");

        },100);
  }
    



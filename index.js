var audio_volume= 0.6;

var img_url;
const api_call = () => {
    const url = "https://api.unsplash.com/photos/random?query=drum"
    fetch(url , {
        headers : {
            'Authorization' : 'Client-ID rAVRAaUYJdAWfVqO6zfblp1ppcFJ91AWoLL5oE9WEi8' 
        }
    }).then(res => res.json())
    .then(res =>{
        console.log(res)
        img_url = res.urls.regular
        console.log(img_url)
        change_background(img_url)
    })
    .catch(error => console.log(error))
}
const background_changer = document.getElementById("util_buttons_background") 
background_changer.addEventListener("click",(e) => {
    api_call()
})


const change_background = (img_src) => {
    let container_style = document.getElementsByClassName('container')[0].style
    console.log(document.getElementsByClassName('container'))
    console.log(container_style)

    container_style.background = `url(${img_src}) no-repeat`
    container_style.backgroundSize='cover'
  

}

/****Theme Changer */ 
const theme_1_background = "#091921";
const theme_1_text = "#00fff1";

const theme_2_background = "#f7c340";
const theme_2_text = "#2d2d2d";
var current_theme = theme_1_background


const change_theme = (theme) =>{
    let root = document.documentElement
    if(theme === "theme_1") {
    root.style.setProperty('--background' ,theme_1_background )
    root.style.setProperty('--text' ,theme_1_text )
    }
    else {
        root.style.setProperty('--background' ,theme_2_background )
        root.style.setProperty('--text' , theme_2_text )
    }
}

const theme_changer = document.getElementById("util_buttons_theme") 
theme_changer.addEventListener("click", (e)=>{
    if(current_theme == "theme_1")
    {
        change_theme("theme_2")
        current_theme="theme_2";
    }
    else{
        change_theme("theme_1")
        current_theme="theme_1";
    }

})
/*Theme changer end here*/


const animate=(key)=>{
const currentkey = document.querySelector(`.${key}`)
currentkey.classList.add('pressed')
setTimeout(()=>{
currentkey.classList.remove('pressed')
},250)
}

const playMusic=(key)=>{
    
 const audio =new Audio(key);
 audio.volume=audio_volume;
 audio.play();
}

document.addEventListener("keypress",(event)=> {
    const triggerkey=event.key;
    makeSound(triggerkey);
    animate(triggerkey);
})

const slider = document.getElementById("volume_slider")
slider.oninput =(event) =>{
   audio_volume= event.target.value / 100
}


const makeSound =(key) =>{

    switch(key) {
        case "a":
            playMusic("sounds/boom.wav");
            break;
        case "s":
            playMusic("sounds/clap.wav");
            break;
        case "d":
            playMusic("sounds/hihat.wav");
            break;       
        case "f":
            playMusic("sounds/kick.wav");
            break;       
        case "g":
            playMusic("sounds/openhat.wav");
            break; 
        case "h":
            playMusic("sounds/ride.wav");
            break;
        case "j":
            playMusic("sounds/snare.wav");
            break;
        case "k":
            playMusic("sounds/tink.wav");
            break;
        case "l":
            playMusic("sounds/tom.wav");
            break;
        default:
            alert("Pressed Wrong Button");   
        }
}

const handleDrumclick = (event)=>{
 var innerHTML=event.target.innerHTML;   
 console.log(innerHTML);
 animate(innerHTML);
 makeSound(innerHTML);
}

var drums = document.querySelectorAll(".drum")
for(let i=0;i<drums.length;i++) {
    drums[i].addEventListener("click", handleDrumclick)
}

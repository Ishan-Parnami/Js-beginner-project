// generate a random color - hex value
 const generateRandomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
 }

 let intervalId = null;

 const StartchangingColor = () => {
    function changeText (){
        document.querySelector("h1").innerHTML = "On Stop color will stop where they are";
    }
    setTimeout(changeText, 500)
    const changeBgcolor = () => document.body.style.backgroundColor = generateRandomColor();
    if(intervalId === null) 
        intervalId = setInterval(changeBgcolor, 1000);
    
};

 const StopchangingColor = () => {
    const changeText = () => document.querySelector("h1").innerHTML = "on start color will change every second";

    setTimeout(changeText, 500)
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
 };



 document.querySelector("#startBtn").addEventListener("click", () => StartchangingColor())
 document.querySelector("#stopBtn").addEventListener("click", () => StopchangingColor())
const colorChanger =() => {

    const buttons = document.querySelectorAll(".button");
    const body = document.querySelector("body");
    
    buttons.forEach((button) => {
        button.addEventListener("mouseover", (e) => { 
            // console.log(e);
            // console.log(e.target);
            if(e.target.id === "grey") body.style.backgroundColor = "#262626";
            else body.style.backgroundColor = button.id; // second method
        });
    });
}

colorChanger();
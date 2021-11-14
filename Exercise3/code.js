    document.querySelector("button").addEventListener("click", buttonClicked2)


function buttonClicked(){
    document.querySelector("div").classList.add("colored")
}

//2
function buttonClicked2(){
    let color = document.getElementById("mycolor").value
    document.querySelector("div").style.backgroundColor=color
}

//3
let items = document.querySelectorAll("li")

for (const i of items) {
    let text = i.textContent;
    if(text.includes("important")){
        i.classList.add("important")
    }
}
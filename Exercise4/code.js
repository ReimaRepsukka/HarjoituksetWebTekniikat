//Lisätään napin kuuntelijafunktio
document.querySelector("button").addEventListener("click", addNote)
//Haetaan dokumentin elementit
let body = document.querySelector("body")
let user = document.getElementById("name")
let note = document.getElementById("note")
let checkbox = document.getElementById("important")


function addNote(){
    //Luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3")
    h3.textContent = user.value + "  " + new Date().toLocaleString();
    //Itse note lisätänään tekstinä p-elementtiin textareasta
    let p = document.createElement("p")
    p.textContent = note.value

    //Jos checkbox valittu, lisätään important muotoilu
    if(checkbox.checked){
        h3.classList.add("important")
        p.classList.add("important")
    }

    //Kaikki elementit uusina bodyn sisälle
    body.append(h3,p, document.createElement("hr"))

}
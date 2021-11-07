//Harj a
var aelem =  document.getElementById("content")
console.log(aelem.nodeName)

//Harj b
var firstBasic = document.querySelector(".basic")
console.log(firstBasic.nodeName)

//Harj c
var allItems = document.getElementsByTagName("li")
for(i of allItems){
    console.log(i.textContent)
}

//Harj d
var body = document.querySelector("body")
var allNodes = body.querySelectorAll("*")

for (x of allNodes) {
    console.log(x.nodeName)
}

//Harj e
var article = document.querySelector("article")

for(a of article.querySelectorAll("p")){
    console.log("**" + a.textContent);
}

//Harj f
for(i of allItems){
    i.textContent = "Johny"
}

//Harj g
//Tämä ei ole järkevä selektoreilla, koska selektoreilla ei voi hakea tekstinodeja.
//Jos haetaan elementtien esim. textContent, niin jo body.textContent palauttaa kaiken tekstisisällön.
//console.log(document.querySelector("body").textContent);

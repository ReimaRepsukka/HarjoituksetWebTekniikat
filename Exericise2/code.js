//a
let h2 = document.querySelector("h2")
h2.textContent="Let's manipulate some DOM again!"

//b
let hr = document.createElement("hr")
h2.parentElement.insertBefore(hr, h2)

//c
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp

//d
let content = document.getElementById("content")
let ul = document.createElement("ul")
content.appendChild(ul)

for (let i = 1; i < 6; i++) {
   let li = document.createElement("li")
   li.textContent = "Number " + i 
   ul.appendChild(li)
}

//e
let table = document.createElement("table")
let tr = [document.createElement("tr"), document.createElement("tr")]
let th = [document.createElement("th"), document.createElement("th")]
let td = [document.createElement("td"), document.createElement("td")]
th[0].textContent = "Last name"
th[1].textContent = "First name"
td[0].textContent = "John"
td[1].textContent = "Doe"

tr[0].append(th[0],th[1])
tr[1].append(td[0],td[1])

table.append(tr[0], tr[1])

content.appendChild(table)

//f  
//Using query selector to avoid live collection
let elems = document.querySelectorAll("#content>*")

for (const e of elems) {
   let hr = document.createElement("hr")
   content.insertBefore(hr, e);
}

//g
elems = document.querySelectorAll("div>p")

for (const e of elems) {
   console.log(e);
   let span = document.createElement("span")
   span.textContent = "***"
   e.parentElement.insertBefore(span, e);
}
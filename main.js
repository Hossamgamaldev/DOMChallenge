let header = document.createElement("header");

let hedding = document.createElement("h1");
let logo = document.createTextNode("Hossam");

hedding.appendChild(logo);
header.appendChild(hedding);

// end logo

let nav = document.createElement("nav");

let link1 = document.createElement("a");
let link1Text = document.createTextNode("Home");
link1.appendChild(link1Text);
let link2 = document.createElement("a");
let link2Text = document.createTextNode("About");
link2.appendChild(link2Text);
let link3 = document.createElement("a");
let link3Text = document.createTextNode("Service");
link3.appendChild(link3Text);
let link4 = document.createElement("a");
let link4Text = document.createTextNode("Contact");
link4.appendChild(link4Text);

nav.appendChild(link1);
nav.appendChild(link2);
nav.appendChild(link3);
nav.appendChild(link4);

header.appendChild(nav);
document.body.appendChild(header);

header.style.cssText = " width: 90%; margin: 10px auto; display: flex; justify-content: space-between; align-items: center";
link1.style.cssText = "padding-right: 10px;";
link2.style.cssText = "padding-right: 10px;";
link3.style.cssText = "padding-right: 10px;";

// end the header


// start the container
var container = document.createElement("div");
container.style.cssText ="width: 90%; height: 560px; margin: 10px auto; background-color: #ECECEC; display: grid; grid-template-columns: auto auto auto;";
document.body.appendChild(container);

// end the container






for (i = 1; i < 16; i++)
{
    var div = document.createElement("div");
    var p = document.createElement("p");
    var span = document.createElement("span");
    var paragraph = document.createTextNode("Product");

    var numSpan = document.createTextNode(i);
    span.appendChild(numSpan);
    div.appendChild(span);
    div.appendChild(p);
    p.appendChild(paragraph);
    container.appendChild(div);

    div.style.cssText =" font-size:20px; background-color: white; margin: 5px; height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;";
    span.style.cssText =" font-weight: 600;"
}







// start the footer

let footer = document.createElement("footer");
let paraFooter = document.createTextNode("CopyRight 2023");
footer.appendChild(paraFooter);
footer.style.cssText =" font-size:20px; background-color: #23A96E; justify-content: center;height: 40px; display: flex; align-items: center; color: white;";
document.body.appendChild(footer)
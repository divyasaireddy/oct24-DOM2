let DivContent=document.getElementById("container");
let imgTag=document.createElement("img");
let pTag=document.createElement("p")
let btn=document.createElement("button")

imgTag.setAttribute("src","https://cdn.britannica.com/13/225313-050-3519547A/Lime-butterfly-Papilio-demoleus-feeding-on-flower.jpg")
imgTag.style.width="300px"
imgTag.style.borderRadius="20px"
pTag.textContent="This is butterfly image"
btn.textContent="AddtoCart";
btn.style.backgroundColor="green"
btn.style.color="white"
btn.style.padding="10px"
btn.style.border="none"
btn.style.borderRadius="20px"

btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
  });
btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
  });

DivContent.style.border="2px solid black"
DivContent.style.display="inline-block"
DivContent.style.padding="20px"
DivContent.style.textAlign="center"
DivContent.style.borderRadius="20px"
DivContent.style.backgroundImage="linear-gradient(lightBlue,pink)"

DivContent.append(imgTag,pTag,btn)
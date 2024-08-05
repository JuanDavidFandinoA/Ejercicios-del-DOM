const elementsLi = document.getElementsByTagName("li");
for(let i = 0; i < elementsLi.length; i++) {
    elementsLi[i].textContent += ` ${i + 1}`;
}

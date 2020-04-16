//Doer function not maker

// function applyGoatMode(){
//     //Select the body element
//     const bodyElement = document.querySelector("body");
//     console.log("This should be the body element", bodyElement);
//     //Apply a class of ".goat-mode" to the body element
//     bodyElement.classList.add("goat-mode");

//     //Select ALL of the list items
//     const listItems = document.querySelectorAll(".list-item");
//     console.log("this should be ALL the list items", listItems);

//     //Turn their background colors orange
    
//     for (let i = 0; i < listItems.length; i++){
//         listItems[i].classList.add("orange-background");
//     }
// }

// applyGoatMode();


//Practice 1

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
document.querySelector(".article__header").textContent = "Welcome to the Mukkamala blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const headerElements = document.querySelectorAll(".article__header");
    for (let i = 0; i < headerElements.length; i++){
        headerElements[i].classList.add("important");
    }

// Obtain a reference the element with a class of dashed and remove it.
const dashedElement = document.querySelector(".dashed");
dashedElement.classList.remove("dashed");

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const footerElement = document.querySelector(".article__footer");
footerElement.classList.add("goldenrod");

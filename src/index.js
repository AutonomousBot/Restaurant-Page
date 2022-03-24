import './style.css';
import marker from "./mapMarker.png";
import tabSelector from "./hpBar.png"
import runes from "./runes.png"
import seed from "./goldenSeed.png"
import tear from "./sacredTear.png"
import fruit from "./rowaFruit.png"
import crab from "./crabEggs.png"

const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

let currentTab = menuButton;
const contentSpace = document.getElementById("content");

// for (i = 0; i < 3; i++) {
//   document.getElementById("navigation").children[i].addEventListener("click", function, false)
// }

function newElement(elementType, className = "", idName = "", text) {
  const element = document.createElement(`${elementType}`);
  if (className != "") {  element.classList.add(`${className}`) }
  if (idName != "") {  element.id = idName; }
  if (elementType == "img") {
    element.src = text
  } else {  element.textContent = text; }
  return element
}

// const homeTab = (() => {
//   const changeTabs = () => {
//     // Change currentTab variable and the selected tab display.
//     if (currentTab != homeButton) {
//       currentTab.removeChild(currentTab.children[0])
//       currentTab = homeButton
//     }
//     currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));

//     const titleDiv = newElement("div", "subcontent", "title");
//     contentSpace.appendChild(titleDiv);
//     const title = newElement("h1", undefined, undefined, "Radahn's Repas Restaurant");
//     titleDiv.appendChild(title);

//     const reviewDiv = newElement("div", "subcontent", "review", "Even been stuck in a raid with your boys for months in the middle of the desert? Fear not for this place is located in a cave right by General Radahn! It has excellent rice in different shapes and forms.")
//     contentSpace.appendChild(reviewDiv);
//     reviewDiv.appendChild(newElement("p", "subtitle", "reviewer", "Tarnished (Real)"));

//     const scheduleDiv = newElement("div", "subcontent", "schedule")
//     contentSpace.appendChild(scheduleDiv)
//     scheduleDiv.appendChild(newElement("div", "subtitle", undefined, "Hours"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Sunday: 8am - 8pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Monday: 6am - 8pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Tuesday: 6am - 8pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Wednesday: 6am - 8pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Thursday: 6am - 8pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Friday: 6am - 10pm"))
//     scheduleDiv.appendChild(newElement("p", undefined, undefined, "Saturday: 8am - 10pm"))

//     const locationDiv = newElement("div", "subcontent", "location")
//     contentSpace.appendChild(locationDiv)
//     const location = newElement("div", "subtitle", undefined, "Location  ")
//     locationDiv.appendChild(location)
//     location.appendChild(newElement("img", undefined, undefined, marker))
//     locationDiv.appendChild(newElement("p", undefined, undefined, "Lands Between, Cave South of Caelid. (-184 : 162)"))
//   }
//   return {
//     changeTabs
//   }
// })()

// homeTab.changeTabs();

const menuTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != menuButton) {
      currentTab.removeChild(currentTab.children[0])
      currentTab = menuButton
    }
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));

    // Menu
    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Menu");
    titleDiv.appendChild(title);

    // Beverages section
    const menuTypeDiv = newElement("div", "subcontent", undefined, "Beverages")
    contentSpace.appendChild(menuTypeDiv);

    // Yummy golden seed
    const beveragesContainer = newElement("div", "subcontent")
    contentSpace.appendChild(beveragesContainer)
    beveragesContainer.appendChild(newElement("div", "subtitle", undefined, "Yummy Golden Seed"))
    beveragesContainer.appendChild(newElement("p", undefined, undefined, "For the first timers, we give out succulent Golden Seeds for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
    const beveragesSubcontainer = (newElement("div", "container"))
    beveragesContainer.appendChild(beveragesSubcontainer)
    const seedPrice = newElement("div", "price", undefined, "50000")
    beveragesSubcontainer.appendChild(seedPrice)
    seedPrice.appendChild(newElement("img", undefined, undefined, runes))
    beveragesSubcontainer.appendChild(newElement("img", undefined, undefined, seed))

    // Sacred Tear
    const beveragesContainer2 = newElement("div", "subcontent")
    contentSpace.appendChild(beveragesContainer2)
    beveragesContainer2.appendChild(newElement("div", "subtitle", undefined, "Sacred Tear"))
    beveragesContainer2.appendChild(newElement("p", undefined, undefined, "For the first timers, we give out restorative Sacred Tears for enhancing Estus Flasks uses for a fair price! (One per Tarnished only)"))
    const beveragesSubcontainer2 = (newElement("div", "container"))
    beveragesContainer2.appendChild(beveragesSubcontainer2)
    const tearPrice = newElement("div", "price", undefined, "50000")
    beveragesSubcontainer2.appendChild(tearPrice)
    tearPrice.appendChild(newElement("img", undefined, undefined, runes))
    beveragesSubcontainer2.appendChild(newElement("img", undefined, undefined, tear))

    // Sides section
    const sidesDiv = newElement("div", "subcontent", undefined, "Sides")
    contentSpace.appendChild(sidesDiv);

    // Rowa Fruit
    const fruitContainer = newElement("div", "subcontent")
    contentSpace.appendChild(fruitContainer)
    fruitContainer.appendChild(newElement("div", "subtitle", undefined, "Rowa Fruit"))
    fruitContainer.appendChild(newElement("p", undefined, undefined, "Rowa Fruit is used in many recipes you'll find in the Lands Between, Tarnished. Very good for preserved foods. We refill our stocks after every visit!"))
    const fruitSubcontainer = (newElement("div", "container"))
    fruitContainer.appendChild(fruitSubcontainer)
    const fruitPrice = newElement("div", "price", undefined, "10")
    fruitSubcontainer.appendChild(fruitPrice)
    fruitPrice.appendChild(newElement("img", undefined, undefined, runes))
    fruitSubcontainer.appendChild(newElement("img", undefined, undefined, fruit))

    // Crab Eggs
    const crabContainer = newElement("div", "subcontent")
    contentSpace.appendChild(crabContainer)
    crabContainer.appendChild(newElement("div", "subtitle", undefined, "Crab Egss"))
    crabContainer.appendChild(newElement("p", undefined, undefined, "Crab Eggs are used in many meat dishes resulting in a very healthy, robuste meal. We refill our stocks after every visit!"))
    const crabSubcontainer = (newElement("div", "container"))
    crabContainer.appendChild(crabSubcontainer)
    const crabPrice = newElement("div", "price", undefined, "10")
    crabSubcontainer.appendChild(crabPrice)
    crabPrice.appendChild(newElement("img", undefined, undefined, runes))
    crabSubcontainer.appendChild(newElement("img", undefined, undefined, crab))
  }
  return {
    changeTabs
  }
})()

menuTab.changeTabs();
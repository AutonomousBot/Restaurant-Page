import './style.css';
import marker from "./mapMarker.png";
import tabSelector from "./hpBar.png"
import runes from "./runes.png"
import seed from "./goldenSeed.png"
import tear from "./sacredTear.png"
import fruit from "./rowaFruit.png"
import crab from "./crabEggs.png"
import riceBowl from "./riceBowl.jpg"
import exalted from "./exaltedFlesh.png"
import turtle from "./pickledTurtleNeck.png"
import melina from "./melina.jpeg"
import fia from "./fia.jpeg"
import ranni from "./ranni.png"

const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

let currentTab = contactButton;
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

const homeTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != homeButton) {
      currentTab.removeChild(currentTab.children[0])
      currentTab = homeButton
    }
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));

    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Radahn's Repas Restaurant");
    titleDiv.appendChild(title);

    const reviewDiv = newElement("div", "subcontent", "review", "Even been stuck in a raid with your boys for months in the middle of the desert? Fear not for this place is located in a cave right by General Radahn! It has excellent rice in different shapes and forms.")
    contentSpace.appendChild(reviewDiv);
    reviewDiv.appendChild(newElement("p", "subtitle", "reviewer", "Tarnished (Real)"));

    const scheduleDiv = newElement("div", "subcontent", "schedule")
    contentSpace.appendChild(scheduleDiv)
    scheduleDiv.appendChild(newElement("div", "subtitle", undefined, "Hours"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Sunday: 8am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Monday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Tuesday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Wednesday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Thursday: 6am - 8pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Friday: 6am - 10pm"))
    scheduleDiv.appendChild(newElement("p", undefined, undefined, "Saturday: 8am - 10pm"))

    const locationDiv = newElement("div", "subcontent", "location")
    contentSpace.appendChild(locationDiv)
    const location = newElement("div", "subtitle", undefined, "Location  ")
    locationDiv.appendChild(location)
    location.appendChild(newElement("img", undefined, undefined, marker))
    locationDiv.appendChild(newElement("p", undefined, undefined, "Lands Between, Cave South of Caelid. (-184 : 162)"))
  }
  return {
    changeTabs
  }
})()

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
    const beveragesDiv = newElement("div", "subcontent", undefined, "Beverages")
    beveragesDiv.classList.add("menuType")
    contentSpace.appendChild(beveragesDiv);

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
    sidesDiv.classList.add("menuType")
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

    // Main Dish Section
  const mainDishDiv = newElement("div", "subcontent", undefined, "Main Dishes")
  mainDishDiv.classList.add("menuType")
  contentSpace.appendChild(mainDishDiv);

  // Radahn's Famous Rice
  const riceBowlContainer = newElement("div", "subcontent")
  contentSpace.appendChild(riceBowlContainer)
  riceBowlContainer.appendChild(newElement("div", "subtitle", undefined, "Radahn's Famous Rice"))
  riceBowlContainer.appendChild(newElement("p", undefined, undefined, "Just a bowl of rice. Tasty."))
  const riceBowlSubcontainer = (newElement("div", "container"))
  riceBowlContainer.appendChild(riceBowlSubcontainer)
  const riceBowlPrice = newElement("div", "price", undefined, "10")
  riceBowlSubcontainer.appendChild(riceBowlPrice)
  riceBowlPrice.appendChild(newElement("img", undefined, undefined, runes))
  riceBowlSubcontainer.appendChild(newElement("img", undefined, undefined, riceBowl))

  // Exalted Flesh
  const exaltedContainer = newElement("div", "subcontent")
  contentSpace.appendChild(exaltedContainer)
  exaltedContainer.appendChild(newElement("div", "subtitle", undefined, "Exalted Flesh"))
  exaltedContainer.appendChild(newElement("p", undefined, undefined, "A fine piece of meat that makes you stronger. Many have felled numerous foes after eating this heroic delicacy."))
  const exaltedSubcontainer = (newElement("div", "container"))
  exaltedContainer.appendChild(exaltedSubcontainer)
  const exaltedPrice = newElement("div", "price", undefined, "50")
  exaltedSubcontainer.appendChild(exaltedPrice)
  exaltedPrice.appendChild(newElement("img", undefined, undefined, runes))
  exaltedSubcontainer.appendChild(newElement("img", undefined, undefined, exalted))

  // Pickled Turtle Neck
  const turtleContainer = newElement("div", "subcontent")
  contentSpace.appendChild(turtleContainer)
  turtleContainer.appendChild(newElement("div", "subtitle", undefined, "Pickled Turtle Neck"))
  turtleContainer.appendChild(newElement("p", undefined, undefined, "A bitter medicinal piece of meat. Regardless of the Tarnished's tastes, it is a well of endless power when the nutrients course through your body."))
  const turtleSubcontainer = (newElement("div", "container"))
  turtleContainer.appendChild(turtleSubcontainer)
  const turtlePrice = newElement("div", "price", undefined, "50")
  turtleSubcontainer.appendChild(turtlePrice)
  turtlePrice.appendChild(newElement("img", undefined, undefined, runes))
  turtleSubcontainer.appendChild(newElement("img", undefined, undefined, turtle))
  }
  return {
    changeTabs
  }
})()

// menuTab.changeTabs();

const contactTab = (() => {
  const changeTabs = () => {
    // Change currentTab variable and the selected tab display.
    if (currentTab != contactButton) {
      currentTab.removeChild(currentTab.children[0])
      currentTab = contactButton
    }
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));

    const titleDiv = newElement("div", "subcontent", "title");
    contentSpace.appendChild(titleDiv);
    const title = newElement("h1", undefined, undefined, "Contact Us");
    titleDiv.appendChild(title);


    const melinaDiv = newElement("div", "subcontent")
    melinaDiv.classList.add("contactContainer")
    contentSpace.appendChild(melinaDiv)
    melinaDiv.appendChild(newElement("div", "subtitle", undefined, "Melina"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "Maiden (Fake)"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "TOU-CHG-RASS"))
    melinaDiv.appendChild(newElement("p", undefined, undefined, "melina@fromsoft.com"))
    melinaDiv.appendChild(newElement("img", "contactPhoto", undefined, melina))

    const fiaDiv = newElement("div", "subcontent")
    fiaDiv.classList.add("contactContainer")
    contentSpace.appendChild(fiaDiv)
    fiaDiv.appendChild(newElement("div", "subtitle", undefined, "Fia"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "Mom"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "WAR-MHU-GNOW"))
    fiaDiv.appendChild(newElement("p", undefined, undefined, "fia@fromsoft.com"))
    fiaDiv.appendChild(newElement("img", "contactPhoto", undefined, fia))

    const ranniDiv = newElement("div", "subcontent")
    ranniDiv.classList.add("contactContainer")
    contentSpace.appendChild(ranniDiv)
    ranniDiv.appendChild(newElement("div", "subtitle", undefined, "Ranni"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "Wife (?)"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "CON-VOL-UTED"))
    ranniDiv.appendChild(newElement("p", undefined, undefined, "ranni@fromsoft.com"))
    ranniDiv.appendChild(newElement("img", "contactPhoto", undefined, ranni))

  }
  return {
    changeTabs
  }
})()

contactTab.changeTabs();
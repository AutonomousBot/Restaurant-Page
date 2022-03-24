import './style.css';
import marker from "./mapMarker.png";
import tabSelector from "./hpBar.png"

const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

let currentTab = homeButton;
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

homeTab.changeTabs();
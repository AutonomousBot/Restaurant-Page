import './style.css';

let currentTab = home;
const contentSpace = document.getElementById("content");

// for (i = 0; i < 3; i++) {
//   document.getElementById("navigation").children[i].addEventListener("click", function, false)
// }

function newElement(elementType, className = "", idName = "", text = "") {
  const element = document.createElement(`${elementType}`);
  if (className != "") {  element.classList.add(`${className}`) }
  if (idName != "") {  element.id = idName; }
  element.textContent = text;
  return element
}

const homeTab = (() => {
  const changeTabs = () => {

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
    const location = newElement("div", "subtitle", undefined, "Location")
    locationDiv.appendChild(location)
    document.create
  }
  return {
    changeTabs
  }
})()

homeTab.changeTabs();
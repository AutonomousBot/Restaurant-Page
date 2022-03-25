import './style.css'

// Tab switcher buttons
const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

// Main page element.
const contentSpace = document.getElementById("content");
export {contentSpace};

let currentTab = homeButton;

import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact"
import newElement from "./elementCreator.js"
import tabSelector from "./images/hpBar.png"


homeButton.addEventListener("click", () => {
  // Change currentTab variable and the selected tab display.
  if (currentTab != homeButton) {
    currentTab.removeChild(currentTab.children[0])
    if (currentTab == menuButton) {
      menuButton.disabled = false;
    }
    else {
      contactButton.disabled = false;
    }
    currentTab = homeButton
  }
  // Clears previous tab.
  contentSpace.textContent = ""
  // Disable current tab's click event.
  homeButton.disabled = true;
  if (homeButton.children.length == 0) {
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));
  }
  home();
}, false)

menuButton.addEventListener("click", () => {
  // Change currentTab variable and the selected tab display.
  currentTab.removeChild(currentTab.children[0])
  if (currentTab == homeButton) {
    homeButton.disabled = false;
  }
  else {
    contactButton.disabled = false;
  }
  currentTab = menuButton
  // Clears previous tab.
  contentSpace.textContent = ""
  // Disable current tab's click event.
  menuButton.disabled = true;
  currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));
  menu();
}, false)

contactButton.addEventListener("click", () => {
    // Change currentTab variable and the selected tab display.
    currentTab.removeChild(currentTab.children[0])
    if (currentTab == homeButton) {
      homeButton.disabled = false;
    }
    else {
      menuButton.disabled = false;
    }
    currentTab = contactButton
    // Clears previous tab.
    contentSpace.textContent = ""
    // Disable current tab's click event.
    contactButton.disabled = true;
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));
  contact();
}, false)

homeButton.click()
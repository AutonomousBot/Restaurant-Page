import './style.css'

// Tab switcher buttons
const homeButton = document.getElementById("navigation").children[0]
const menuButton = document.getElementById("navigation").children[1]
const contactButton = document.getElementById("navigation").children[2]

// Main page element.
const contentSpace = document.getElementById("content");
export {contentSpace};

// Set default page.
let currentTab = homeButton;

import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact"
import newElement from "./elementCreator.js"
import tabSelector from "./images/hpBar.png"

// Tab switching logic.
function clickTabSwitcher() {
  // Clears current tab
  contentSpace.textContent = ""
  // Check if current tab is the same as the one user clicked to prevent the function from triggering every click.
  if (currentTab != this) {
    // Removes health bar from current tab.
    currentTab.removeChild(currentTab.children[0])
    // Reenable current tab's click event.
    currentTab.disabled = false
    // Change current tab to new one.
    currentTab = this
  }
  // Disable current tab's click event.
  currentTab.disabled = true;
  if (homeButton.children.length == 0) {
    currentTab.appendChild(newElement("img", "tabSelector", undefined, tabSelector));
  }
  if (currentTab == homeButton) { home(); }
  else if (currentTab == menuButton) { menu(); }
  else { contact(); }
}

// Adds clickTabSwitcher to each button click event.
homeButton.addEventListener("click", clickTabSwitcher, false)
menuButton.addEventListener("click", clickTabSwitcher, false)
contactButton.addEventListener("click", clickTabSwitcher, false)

// Default page on load.
homeButton.click()
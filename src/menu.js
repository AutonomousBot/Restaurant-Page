import newElement from "./elementCreator.js"
import runes from "./images/runes.png"
import seed from "./images/goldenSeed.png"
import tear from "./images/sacredTear.png"
import fruit from "./images/rowaFruit.png"
import crab from "./images/crabEggs.png"
import riceBowl from "./images/riceBowl.jpg"
import exalted from "./images/exaltedFlesh.png"
import turtle from "./images/pickledTurtleNeck.png"
import {contentSpace} from "./index.js";

export default function menu() {
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
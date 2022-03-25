import newElement from "./elementCreator.js"
import melina from "./images/melina.jpeg"
import fia from "./images/fia.jpeg"
import ranni from "./images/ranni.png"
import {contentSpace} from "./index.js"

export default function contactTab() {
  // Contact us
  const titleDiv = newElement("div", "subcontent", "title");
  contentSpace.appendChild(titleDiv);
  const title = newElement("h1", undefined, undefined, "Contact Us");
  titleDiv.appendChild(title);

  // Meliana contact info.
  const melinaDiv = newElement("div", "subcontent")
  melinaDiv.classList.add("contactContainer")
  contentSpace.appendChild(melinaDiv)
  melinaDiv.appendChild(newElement("div", "subtitle", undefined, "Melina"))
  melinaDiv.appendChild(newElement("p", undefined, undefined, "Maiden (Fake)"))
  melinaDiv.appendChild(newElement("p", undefined, undefined, "TOU-CHG-RASS"))
  melinaDiv.appendChild(newElement("p", undefined, undefined, "melina@fromsoft.com"))
  melinaDiv.appendChild(newElement("img", "contactPhoto", undefined, melina))

  // Fia contact info.
  const fiaDiv = newElement("div", "subcontent")
  fiaDiv.classList.add("contactContainer")
  contentSpace.appendChild(fiaDiv)
  fiaDiv.appendChild(newElement("div", "subtitle", undefined, "Fia"))
  fiaDiv.appendChild(newElement("p", undefined, undefined, "Mom"))
  fiaDiv.appendChild(newElement("p", undefined, undefined, "WAR-MHU-GNOW"))
  fiaDiv.appendChild(newElement("p", undefined, undefined, "fia@fromsoft.com"))
  fiaDiv.appendChild(newElement("img", "contactPhoto", undefined, fia))

  // Ranni contact info.
  const ranniDiv = newElement("div", "subcontent")
  ranniDiv.classList.add("contactContainer")
  contentSpace.appendChild(ranniDiv)
  ranniDiv.appendChild(newElement("div", "subtitle", undefined, "Ranni"))
  ranniDiv.appendChild(newElement("p", undefined, undefined, "Wife (?)"))
  ranniDiv.appendChild(newElement("p", undefined, undefined, "CON-VOL-UTED"))
  ranniDiv.appendChild(newElement("p", undefined, undefined, "ranni@fromsoft.com"))
  ranniDiv.appendChild(newElement("img", "contactPhoto", undefined, ranni))
}
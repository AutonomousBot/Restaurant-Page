// Creates element with class, id, text specifications.
export default function newElement(elementType, className = "", idName = "", text) {
  const element = document.createElement(`${elementType}`);
  if (className != "") {  element.classList.add(`${className}`) }
  if (idName != "") {  element.id = idName; }
  if (elementType == "img") {
    element.src = text
  } else {  element.textContent = text; }
  return element
}
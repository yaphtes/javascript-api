// Навигация
let element = document.body;

document  // => Document
document.documentElement  // => Element
document.body  // => Element
document.head  // => Element
element.children  // => HTMLCollection
element.firstElementChild  // => Element
element.lastElementChild  // => Element
element.previousElementSibling  // => Element
element.nextElementSibling  // => Element
element.parentElement  // => Element
element.childNodes  // => NodeList
element.firstChild  // => Node
element.lastChild  // => Node
element.previousSibling  // => Node
element.nextSibling  // => Node
element.parentNode  // => Node

element.hasChildNodes() // => bool



// Поиск
document.getElementById(id: string)  // => Element
document.getElementsByTagName(tagName: string)  // => NodeList
element.getElementsByTagName(tagName: string)  // => NodeList
document.getElementsByName(name: string)  // => HTMLCollection
document.getElementsByClassName(name: string)  // => NodeList
element.getElementsByClassName(name: string)  // => NodeList
document.querySelectorAll(selectors: string)  // => NodeList
element.querySelectorAll(selectors: string)  // => NodeList
document.querySelector(selectors: string)  // => Element
element.querySelector(selectors: string)  // => Element
element.matches(selectors: string)  // => bool
element.closest(selectors: string)  // => Element

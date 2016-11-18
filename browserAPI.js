let textNode = document.firstChild;  // textNode.nodeType => 3
let node = document.firstElementChild;


// <<< Навигация по DOM узлам >>>

// Document.documentElement - cвойство только для чтения, возвращает корневой элемент
// объекта Document (например, <html> элемент для HTML - документов)
document.documentElement  // => Element

// Возвращает узел <body> или <frameset> текущей
// страницы, или null если таких элементов не существует
document.body  // => Element

// Возвращает элемент <head> текущего документа.
// Если имеется более одного элемента <head>, будет возвращен первый из них
document.head  // => Element

// Свойство Node.prototype.children возвращает
// живую коллекцию (HTMLCollection) дочерних элементов узла
node.children  // => [HTMLCollection]

// Доступное только для чтения свойство node.firstElementChild возвращает
// первый дочерный элемент или null если дочерних элементов нет
node.firstElementChild  // => Element

// node.lastElementChild - свойство только для чтения возвращает
// последний дочерний элемент объекта Element или , null если нет дочерних элементов.
node.lastElementChild  // => Element

// node.previousElementSibling - свойство только для чтения возвращает Element
// непосредственно перед указанному в списке детей своего родителя, или nullесли указанный
// элемент является первым в списке.
node.previousElementSibling  // => Element

// node.nextElementSibling - свойство только для чтения возвращает элемент сразу
// после указанного в списке один детей его родителя, или nullесли указанный элемент является
// последним в списке.
node.nextElementSibling  // => Element

// Свойство node.parentElement только для чтения, возвращает родителя узла DOM Element,
// или null если узел не имеет родителя, или его родитель не DOM Element.
node.parentElement  // => Element

// Доступный для чтения аттрибут Node.childNodes возвращает коллекцию дочерних элементов данного элемента.
node.childNodes  // => NodeList

// Свойство Node.firstChild только для чтения, возвращающее первый потомок узла в древе или null,
// если узел является бездетным. Если узел это документ, он возвращает первый узел в списке своих прямых детей.
node.firstChild  // => Node

// Node.lastChildСвойство только для чтения возвращает последний дочерний узел.
// Если его родительский элемент, то ребенок , как правило , узел элемента, текстовый
// узел, или узла комментария. Она возвращает , nullесли нет дочерних элементов.
node.lastChild  // => Node

// Свойство Node.previousSibling используется только для чтения, оно возвращает узел
// предшедствующий указанному в родительском элементе childNodes, или null,  если указанный
// узел первый в своём родителе.
node.previousSibling  // => Node

// Свойство Node.nextSibling используется только для чтения и возвращает узел, непосредственно
// следующий за данным узлом в списке  childNodes его родительского элемента, или null если данный узел последний в этом списке.
node.nextSibling  // => Node

// Node.parentNodeСвойство только для чтения возвращает родительский элемент указанного узла в дереве DOM.
node.parentNode  // => Node

// Метод Node.hasChildNodes() возвращает Boolean значение показывающее имеет ли текущий Node дочерние узлы или нет.
node.hasChildNodes() // => bool



// Поиск DOM узлов
document.getElementById(id: string)  // => Element
document.getElementsByTagName(tagName: string)  // => NodeList
node.getElementsByTagName(tagName: string)  // => NodeList
document.getElementsByName(name: string)  // => HTMLCollection
document.getElementsByClassName(name: string)  // => NodeList
node.getElementsByClassName(name: string)  // => NodeList
document.querySelectorAll(selectors: string)  // => NodeList
node.querySelectorAll(selectors: string)  // => NodeList
document.querySelector(selectors: string)  // => Element
node.querySelector(selectors: string)  // => Element
node.matches(selectors: string)  // => bool
node.closest(selectors: string)  // => Element



// Содержимое узла
node.nodeType
node.nodeName
node.tagName
node.innerHTML
node.outerHTML
textNode.data
node.textContent
node.hidden




// Атрибуты
node.hasAttribute(name: string)
node.getAttribute(name: string)
node.setAttribute(name: string, value: string)
node.removeAttribute(name: string)
node.attributes  // => {}
node.classList  // => {}
node.classList.contains(class: string);
node.classList.add(class: string);
node.classList.remove(class: string);
node.classList.toggle(class: string);
node.dataset  // => {}



// Вложеннность
node.contains(other: Node)
node.compareDocumentPosition(other: Node)



// Добавление и удаление узлов
document.createElement(tagName: string)
document.createTextNode(content: string)
node.appendChild(newNode: Node)
node.insertBefore(newElt: Element, before: Element)
node.cloneNode(deep: bool)
node.removeChild(oldNode: Node)
node.replaceChild(newChild: Node, oldChild: Node)
node.remove()

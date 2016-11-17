let textNode = document.firstChild;  // textNode.nodeType => 3


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
Node.prototype.children  // => [HTMLCollection]

// Доступное только для чтения свойство Node.prototype.firstElementChild возвращает
// первый дочерный элемент или null если дочерних элементов нет
Node.prototype.firstElementChild  // => Element

// Node.prototype.lastElementChild - свойство только для чтения возвращает
// последний дочерний элемент объекта Element или , null если нет дочерних элементов.
Node.prototype.lastElementChild  // => Element

// Node.prototype.previousElementSibling - свойство только для чтения возвращает Element
// непосредственно перед указанному в списке детей своего родителя, или nullесли указанный
// элемент является первым в списке.
Node.prototype.previousElementSibling  // => Element

// Node.prototype.nextElementSibling - свойство только для чтения возвращает элемент сразу
// после указанного в списке один детей его родителя, или nullесли указанный элемент является
// последним в списке.
Node.prototype.nextElementSibling  // => Element

// Свойство Node.prototype.parentElement только для чтения, возвращает родителя узла DOM Element,
// или null если узел не имеет родителя, или его родитель не DOM Element.
Node.prototype.parentElement  // => Element

// Доступный для чтения аттрибут Node.childNodes возвращает коллекцию дочерних элементов данного элемента.
Node.prototype.childNodes  // => NodeList

// Свойство Node.firstChild только для чтения, возвращающее первый потомок узла в древе или null,
// если узел является бездетным. Если узел это документ, он возвращает первый узел в списке своих прямых детей.
Node.prototype.firstChild  // => Node

// Node.lastChildСвойство только для чтения возвращает последний дочерний узел.
// Если его родительский элемент, то ребенок , как правило , узел элемента, текстовый
// узел, или узла комментария. Она возвращает , nullесли нет дочерних элементов.
Node.prototype.lastChild  // => Node

// Свойство Node.previousSibling используется только для чтения, оно возвращает узел
// предшедствующий указанному в родительском элементе childNodes, или null,  если указанный
// узел первый в своём родителе.
Node.prototype.previousSibling  // => Node

// Свойство Node.nextSibling используется только для чтения и возвращает узел, непосредственно
// следующий за данным узлом в списке  childNodes его родительского элемента, или null если данный узел последний в этом списке.
Node.prototype.nextSibling  // => Node

// Node.parentNodeСвойство только для чтения возвращает родительский элемент указанного узла в дереве DOM.
Node.prototype.parentNode  // => Node

// Метод Node.hasChildNodes() возвращает Boolean значение показывающее имеет ли текущий Node дочерние узлы или нет.
Node.prototype.hasChildNodes() // => bool



// Поиск DOM узлов
document.getElementById(id: string)  // => Element
document.getElementsByTagName(tagName: string)  // => NodeList
Node.prototype.getElementsByTagName(tagName: string)  // => NodeList
document.getElementsByName(name: string)  // => HTMLCollection
document.getElementsByClassName(name: string)  // => NodeList
Node.prototype.getElementsByClassName(name: string)  // => NodeList
document.querySelectorAll(selectors: string)  // => NodeList
Node.prototype.querySelectorAll(selectors: string)  // => NodeList
document.querySelector(selectors: string)  // => Element
Node.prototype.querySelector(selectors: string)  // => Element
Node.prototype.matches(selectors: string)  // => bool
Node.prototype.closest(selectors: string)  // => Element



// Содержимое узла
Node.prototype.nodeType
Node.prototype.nodeName
Node.prototype.tagName
Node.prototype.innerHTML
Node.prototype.outerHTML
Node.prototype.data
Node.prototype.textContent
Node.prototype.hidden

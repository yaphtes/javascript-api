let textNode = document.firstChild;  // textNode.nodeType => 3
let node = document.firstElementChild;
//
//
// // <<< Навигация по DOM узлам >>>
//
// // Document.documentElement - cвойство только для чтения, возвращает корневой элемент
// // объекта Document (например, <html> элемент для HTML - документов)
// document.documentElement  // => Element
//
// // Возвращает узел <body> или <frameset> текущей
// // страницы, или null если таких элементов не существует
// document.body  // => Element
//
// // Возвращает элемент <head> текущего документа.
// // Если имеется более одного элемента <head>, будет возвращен первый из них
// document.head  // => Element
//
// // Свойство Node.prototype.children возвращает
// // живую коллекцию (HTMLCollection) дочерних элементов узла
// node.children  // => [HTMLCollection]
//
// // Доступное только для чтения свойство node.firstElementChild возвращает
// // первый дочерный элемент или null если дочерних элементов нет
// node.firstElementChild  // => Element
//
// // node.lastElementChild - свойство только для чтения возвращает
// // последний дочерний элемент объекта Element или , null если нет дочерних элементов.
// node.lastElementChild  // => Element
//
// // node.previousElementSibling - свойство только для чтения возвращает Element
// // непосредственно перед указанному в списке детей своего родителя, или nullесли указанный
// // элемент является первым в списке.
// node.previousElementSibling  // => Element
//
// // node.nextElementSibling - свойство только для чтения возвращает элемент сразу
// // после указанного в списке один детей его родителя, или nullесли указанный элемент является
// // последним в списке.
// node.nextElementSibling  // => Element
//
// // Свойство node.parentElement только для чтения, возвращает родителя узла DOM Element,
// // или null если узел не имеет родителя, или его родитель не DOM Element.
// node.parentElement  // => Element
//
// // Доступный для чтения аттрибут Node.childNodes возвращает коллекцию дочерних элементов данного элемента.
// node.childNodes  // => NodeList
//
// // Свойство Node.firstChild только для чтения, возвращающее первый потомок узла в древе или null,
// // если узел является бездетным. Если узел это документ, он возвращает первый узел в списке своих прямых детей.
// node.firstChild  // => Node
//
// // Node.lastChildСвойство только для чтения возвращает последний дочерний узел.
// // Если его родительский элемент, то ребенок , как правило , узел элемента, текстовый
// // узел, или узла комментария. Она возвращает , nullесли нет дочерних элементов.
// node.lastChild  // => Node
//
// // Свойство Node.previousSibling используется только для чтения, оно возвращает узел
// // предшедствующий указанному в родительском элементе childNodes, или null,  если указанный
// // узел первый в своём родителе.
// node.previousSibling  // => Node
//
// // Свойство Node.nextSibling используется только для чтения и возвращает узел, непосредственно
// // следующий за данным узлом в списке  childNodes его родительского элемента, или null если данный узел последний в этом списке.
// node.nextSibling  // => Node
//
// // Node.parentNodeСвойство только для чтения возвращает родительский элемент указанного узла в дереве DOM.
// node.parentNode  // => Node
//
// // Метод Node.hasChildNodes() возвращает Boolean значение показывающее имеет ли текущий Node дочерние узлы или нет.
// node.hasChildNodes() // => bool
//
//
//
// // Поиск DOM узлов
// document.getElementById(id: string)  // => Element
// document.getElementsByTagName(tagName: string)  // => NodeList
// node.getElementsByTagName(tagName: string)  // => NodeList
// document.getElementsByName(name: string)  // => HTMLCollection
// document.getElementsByClassName(name: string)  // => NodeList
// node.getElementsByClassName(name: string)  // => NodeList
// document.querySelectorAll(selectors: string)  // => NodeList
// node.querySelectorAll(selectors: string)  // => NodeList
// document.querySelector(selectors: string)  // => Element
// node.querySelector(selectors: string)  // => Element
// node.matches(selectors: string)  // => bool
// node.closest(selectors: string)  // => Element
//
//
//
// // Содержимое узла
// node.nodeType
// node.nodeName
// node.tagName
// node.innerHTML
// node.outerHTML
// textNode.data
// node.textContent
// node.hidden
//
//
//
//
// // Атрибуты
// node.hasAttribute(name: string)
// node.getAttribute(name: string)
// node.setAttribute(name: string, value: string)
// node.removeAttribute(name: string)
// node.attributes  // => {}
// node.classList  // => {}
// node.classList.contains(class: string);
// node.classList.add(class: string);
// node.classList.remove(class: string);
// node.classList.toggle(class: string);
// node.dataset  // => {}
//
//
//
// // Проверка на вложенность
// node.contains(other: Node)
// node.compareDocumentPosition(other: Node)
//
//
//
// // Добавление и удаление узлов
// document.createElement(tagName: string)
// document.createTextNode(content: string)
// document.createDocumentFragment() // => DocumentFragment
// node.appendChild(newNode: Node)
// node.insertBefore(newElt: Element, before: Element)
// node.cloneNode(deep: bool)
// node.removeChild(oldNode: Node)
// node.replaceChild(newChild: Node, oldChild: Node)
// node.remove()
// node.insertAdjacentHTML(position: string, html: string)
// node.insertAdjacentElement(position: string, element: Node)
// node.insertAdjacentText(position: string, text: string)
// 	// position = 'beforeBegint' || 'afterBegin' || 'beforeEnd' || 'afterEnd'
// node.append(...nodes)
// node.prepend(...nodes)
// node.after(...nodes)
// node.before(...nodes)
// node.replaceWith(...nodes)
//
//
//
// // Прочие методы
// document.write(html: string)
// document.writeln(html: string)
//
//
//
// // <<< Стили>>>
// node.style
// node.style.cssText
// window.getComputedStyle(node: Element, pseudo?: string)
//
//
//
// // <<< Размеры и прокрутка DOM-элементов>>>
// // P.S.
// // Все свойства, доступны только для чтения, кроме scrollLeft/scrollTop.
// // Изменение этих свойств заставляет браузер прокручивать элемент.
//
//
// // Родитель по "дереву рендеринга"
// node.offsetParent
//
// // позиции в пикселях левого верхнего угла блока,
// // относительно его offsetParent
// node.offsetTop
// node.offsetLeft
//
// // "внешняя" ширина/высота блока, включая рамки
// node.offsetWidth
// node.offsetHeight
//
// // отступ области содержимого (включая padding) от левого-верхнего угла элемента.
// // Если операционная система располагает вертикальную прокрутку справа,
// // то равны ширинам левой/верхней рамки, если же слева (ОС на иврите, арабском),
// // то clientLeft включает в себя прокрутку.
// node.clientTop
// node.clientLeft
//
// // ширина/высота содержимого вместе с полями padding, но без полосы прокрутки.
// node.clientWidth
// node.clientHeight
//
// // ширина/высота содержимого, включая прокручиваемую область.
// // Включает в себя padding и не включает полосы прокрутки.
// node.scrollWidth
// node.scrollHeight
//
// // ширина/высота прокрученной части документа, считается от верхнего левого угла.
// node.scrollLeft
// node.scrollTop
//
//
//
// // <<< Размеры и прокрутка СТРАНИЦЫ>>>
// window.pageXOffset
// window.pageYOffset
// window.scrollTo(x: number, y: number)
// window.scrollBy(x: number, y: number)
// node.scrollIntoView(top: bool)
// // размеры вычислаем из метрик по элементу document.documentElement
//
//
//
// ____________________________________________________________________________________________________________________
// <<< СОЗДАНИЕ УЗЛОВ >>>

// Создать элемент с тегом tagName
document.createElement(tagName: string)

// Создать текстовый узел с текстом content
document.createTextNode(content: string)

// Клонировать существующий узел, если deep=false, то без потомков
node.cloneNode(deep: bool)



// <<< СВОЙСТВА УЗЛОВ >>>

// Тип узла: 1(элемент)/3(текст)/другие
node.nodeType

// Тег элемента
elem.tagName

// HTML внутри элемента
elem.innerHTML

// Весь HTML элемента, включая сам тег. На запись использовать с осторожностью, так как не
// модифицирует элемент, а вставляет новый вместо него
elem.outerHTML

//Содержимое любого узла, кроме элемента
node.data/node.nodeValue

// Текстовое содержимое узла, для элементов содержит текст с вырезанными тегами
node.textContent

// Если поставить true, то элемент будет скрыт
elem.hidden



// <<< АТРИБУТЫ >>>

// Чтение атрибута, проверка наличия и запись
elem.getAttribute(name: string), elem.hasAttribute(name: string), elem.setAttribute(name: string, value: string)

// Значения атрибутов вида data-*
elem.dataset.*



// <<< ССЫЛКИ >>>

// Элемент <html>
document.documentElement

// Элемент <body>
document.body

// Элемент <head>
document.head

// По всем узлам:
node.parentNode
node.nextSibling/node.previousSibling
node.childNodes/node.firstChild/node.lastChild

// Только по элементам:
elem.parentElement
elem.nextElementSibling/elem.previousElementSibling
elem.children/elem.firstElementChild/elem.lastElementChild


// Существую дополнительные ссылки на различные элемента,
// например для таблиц:

// Строка <tr> номер N
table.rows[N]

// Ячейка <th>/<td> номер N
tr.cells[N]

// Номер строки в таблице в секции <thead>/<tbody>
tr.sectionRowIndex

// Номер ячейки в строке
td.cellIndex



// <<< ПОИСК >>>

// По селектору, только первый элемент
*.querySelector(selectors: string)

// По селектору
*.querySelectorAll(selectors: string)

// По уникальному id
document.getElementById(id: string)

// По атрибуту name
document.getElementsByName(name: string)

// По тегу tagName
*.getElementsByTagName(tagName: string)

// По классу
*.getElementsByClassName(name: string)


// Дополнительно есть методы:

// Проверяет, подходит ли элемент под css-селектор
elem.matches(css: string)

// Ищет ближайший элемент сверху по иерархии DOM, подходящий под css-селектор. Первым
// проверяется сам elem. Этот элемент возвращается
elem.closest(css: string)

// Возвращает true, если elemA является предком (содержит) elemB
elemA.contains(elemB: Node)

// Возвращает битовую маску, которая включает в себя отношение вложенности между elemA и elemB,
// а также - какой из элементов появляется в DOM первым
elemA.compareDocumentPosition(elemB: Node)



// <<< ИЗМЕНЕНИЕ >>>

parent.appendChild(newNode: Node)
parent.removeChild(oldNode: Node)
parent.insertBefore(newElt: Element, before: Element)
parent.insertAdjacentHTML(position: string, text: string)
parent.insertAdjacentElement(position: string, element: Node)
parent.insertAdjacentText(position: string, text: string)
	// position = "beforeBegin || afterBegin || beforeEnd || afterEnd"
document.write(html: string)
node.append(nodes: Node)
node.prepend(nodes: Node)
node.after(nodes: Node)
node.before(nodes: Node)
node.replaceWith(nodes: Node)



// <<< КЛАССЫ И СТИЛИ >>>

// Атрибут class
elem.className

// Управление классами
elem.classList.add(token: string) || *.remove(token: string) || *.toggle(token: string) || *.contains(token: string)

// Стили в атрибуте style элемента, elem.style.cssText применяется
// для пачки стилей, нужно помнить, что оно перезаписывает ранее заданные стили
elem.style

// Стиль, с учётом всего каскада, вычисленный и применённый (только чтение)
window.getComputedStyle(node: Element, pseudo?: string)



// <<< РАЗМЕРЫ И ПРОКРУТКА ЭЛЕМЕНТА >>>

// Ширина левой/верхней рамки border
elem.clientLeft/elem.clientTop

// Ширина/высота внутренней части элемента, включая содержимое и padding,
// не включая полосу прокрутки (если есть).
elem.clientWidth/elem.clientHeight

// Ширина/высота внутренней части элемента, с учетом прокрутки.
elem.scrollWidth/elem.scrollHeight

// Ширина/высота прокрученной области.
elem.scrollLeft/elem.scrollTop

// Полный размер элемента: ширина/высота, включая border.
elem.offsetWidth/elem.offsetHeight

{
	// Родитель по "дереву рендеринга"
	elem.offsetParent

	// Позиции в пикселях левого верхнего угла блока,
	// относительно его offsetParent
	elem.offsetTop/elem.offsetLeft
}



// <<< РАЗМЕРЫ И ПРОКРУТКА СТРАНИЦЫ >>>

// Ширина/высота видимой области
document.documentElement.clientWidth/document.documentElement.clientHeight

// Ширина/высота всего документа
document.documentElement.offsetWidth/document.documentElement.offsetHeight

// Прокрутка(чтение)
window.pageYOffset/window.pageYOffset


{ // Прокрутка(изменение)

	// На x,y относительно текущей позиции.
	window.scrollBy(x: number, y: number)

	// На координаты в документе.
	window.scrollTo(x: number, y: number)

	// Прокрутить, чтобы elem стал видимым и оказался вверху окна(true) или внизу(false)
	elem.scrollIntoView(top: bool)
}

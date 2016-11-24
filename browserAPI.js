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

// Есть ли дочерние узлы
elem.hasChildNodes()

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


// << Дополнительные ссылки >>

// TABLE
	// Строка <tr> номер N
	table.rows[N]

	// Ссылки на элементы таблицы <caption>, <thead>, <tfoot>
	table.caption/table.tHead/table.tFoot

	// Коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
	table.tBodies

// THEAD/TFOOT/TBODY
	// Коллекция строк TR секции.
	tbody.rows

// TR
	// Ячейка <th>/<td> номер N
	tr.cells[N]

	// Номер строки в таблице в секции <thead>/<tbody>
	tr.sectionRowIndex

	// Номер строки в таблице
	tr.rowIndex

// TD/TH
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


{ // Прокрутка (изменение)

	// На x,y относительно текущей позиции.
	window.scrollBy(x: number, y: number)

	// На координаты в документе.
	window.scrollTo(x: number, y: number)

	// Прокрутить, чтобы elem стал видимым и оказался вверху окна(true) или внизу(false)
	elem.scrollIntoView(top: bool)
}




// <<< КООРДИНАТЫ >>>

// Относительно окна
elem.getBoundingClientRect()
elem.getClientRects()

// Относительно документа
elem.getBoundingClientRect() + window.pageYOffset

// Получить элемент по координатам
document.elementFromPoint(x: number, y: number)




// <<< СОБЫТИЯ >>>

click
contextmenu
mouseover
mousedown
mousemove
sumbint
focus
blur
keydown
keyup
DOMContentLoaded
transitionend

// Назначить/удалить событие
elem.on* = function(event) { ... }
elem.on* = null;
elem.addEventListener(type: string, listener: fn(e: Event), capture: bool)
elem.removeEventListener(type: string, listener: fn(), capture: bool)


// << Генерация событий >>

// Создает объект события
let event = new Event(type: string, flags?: object)
	// flags = { bubbles: true/fals, cancelable: true/false }, по умолчанию: {bubbles: false, cancelable: false}

// Инициализация события
elem.dispatchEvent(event: Event)

// P.S.: Генерация событий - сложная тема, дополнительная
// информация здесь: https://learn.javascript.ru/dispatch-events




// <<< СОБЫТИЯ В ДЕТАЛЯХ >>>

{ // Свойства и методы объекта event
	event.which
	event.shiftKey
	event.altKey
	event.ctrlKey
	event.metaKey
	event.clientX
	event.clientY
	event.pageX
	event.pageY

	event.target
	event.stopPropagation()
	event.stopImmediatePropagation()
	event.preventDefault()
	event.eventPhase
	{ // В сгенерированных событиях полезно
		// Если true, то нажатие реальное, а не сгенерировано скриптом
		event.isTrusted

		// null - это свойство ставится автоматически позже при dispatchEvent
		event.target

		// Тип события - первый аргумент new Event
		event.type

		// По второму аргументу new Event
		event.bubbles/event.cancelable
	}

	// Специфичные свойства, принадлежащие только определенным событиям
	{ // mouseover/out, mouseenter/leave
		// Откуда пришла, куда ушла мышь
		event.relatedTarget
	}
}


{ // Мышь
	// простые
	mousedown
	mousedown
	mouseover/out
	mouseenter/leave
	mousemove

	// комплексные
	click
	contextmenu
	dbclick
}


{ // Разное
	copy
}

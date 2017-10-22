let upload = new XMLHttpRequest().upload;  // => object

{  // События upload

	loadstart
	progress
	abort
	error
	load
	timeout
	loadend

	{  // Объект event событий upload

		event.loaded  // сколько байт загружено
		event.total  // общий размер загружаемых данных на сервер
		event.lengthComputable  // если true, то известно полное количество байт для пересылки, и оно хранится в свойстве total
	}
}


// Подробноее:
// https://learn.javascript.ru/xhr-onprogress - индикация прогресса
// https://learn.javascript.ru/xhr-resume - возобнавляемая закачка
// У форм есть две основные кодировки: application/x-www-form-urlencoded – по умолчанию
// и multipart/form-data – для POST запросов, если явно указана в enctype.
// Вторая кодировка обычно используется для больших данных и только для тела запроса.

// Для составления запроса в application/x-www-form-urlencoded
// используется функция encodeURIComponent.

// Для отправки запроса в multipart/form-data – объект FormData.

// Для обмена данными JS ↔ сервер можно использовать и просто JSON,
// желательно с указанием кодировки в заголовке Content-Type.

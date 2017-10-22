// отправить ответ
res.end()

// установить заголовок
res.setHeader(name: string, value: string)

// установить статус ответа
res.statusCode(status: number)

// установить заголовки и отправить тут же
res.writeHead(statusCode: number, headers?: object)

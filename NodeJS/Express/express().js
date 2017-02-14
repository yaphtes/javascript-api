// Создает приложение Express
var express = require('express');
var app = express();

// Единсвтенный express-middleware, обслуживает статические ресурсы.
// root - папка, откуда брать ресурсы.
// options - Объект настроек.
express.static(root, [options])

// Возвращает новый экземпляр router
express.Router([options]);

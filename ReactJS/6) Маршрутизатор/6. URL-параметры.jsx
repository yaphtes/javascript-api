

// :param - определяет название параметра.
// () - определяет параметр как необязательный.
// * - определяет один или несколько символов до указанного в паттерне символа или конца строки.
// ** - определяет один или несколько символов до /, '?, или#`.

<Route path="/books/:topic">      // /books/javascript и /books/react
<Route path="/books(/:topic)">    // /books, /books/javascript и /books/react
<Route path="/img/*.*">           // /img/logo.jpg and /img/logo.png
<Route path="/**/*.jpg">          // /img/logo.jpg and /img/front-end/react/logo.jpg

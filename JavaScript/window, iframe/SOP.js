// Два URL считаются имеющим один источник («same origin»), если у них одинаковый протокол, домен и порт.


// Эти URL имеют один источник:

// http://site.com
// http://site.com/
// http://site.com/my/page.html

// А вот эти – все из других источников:

// http://www.site.com (другой домен)
// http://site.org (другой домен)
// https://site.com (другой протокол)
// http://site.com:8080 (другой порт)


// Обход:
// В доменах с разным происхождением можно записывать в location, но не читать.
// Если два сайта john.site.com и smith.site.com запишут в document.domain = 'site.com', то ограничения снимутся.
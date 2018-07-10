// Суть Singletone заключается в том, что при вызове new первый раз создается объект,
// а все последующие вызовы new возвращают ссылку на ранее созданны объект

function Universe() {
    if (typeof Universe.instance == 'object') return Universe.instance;

    this.start = 0;
    this.end = 1;

    Universe.instance = this;
}


class Universe {
    constructor() {
        if (typeof Universe.instance == 'object') return Universe.instance;
        
        this.start = 0;
        this.end = 1;

        Universe.instance = this;
    }
}
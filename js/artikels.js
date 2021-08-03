"use strict";

import NewsEHB from "./api";

class Artikels{
    constructor(){

    }

    like(){
        fetch(`https://thecrew.cc/news/create.php`, {
            method: 'POST',
            body: {
                "UUID": [NewsEHB.UUID]
            }
            
        });
        console.log('test 1', fetch.body)
        .then(response => response.json())
        .then(data => {
            console.log("Succes", data);
            data.forEach(function (likes) {
                const meegevenLike = `UUID van de post`;
            });
        });
    }
}

export default Artikels;
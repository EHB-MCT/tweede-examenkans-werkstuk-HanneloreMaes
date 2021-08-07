"use strict";

import NewsEHB from "./api.js";

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
            data.forEach(likes => {
                

            });
        });
    }
}

export default Artikels;
"use strict";

import NewsEHB from "./api.js";
import index from "./index.js";

class Artikels{
    constructor(id, liken){
        this._idLiken = id;
        this._likesLiken = liken;
    }

    like(){
        fetch(`https://thecrew.cc/news/create.php`, {
            method: 'POST',
            body: {
                "UUID": this._idLiken
            }
        })
        .then(data => {
            console.log("Succes3", data);
            const buttonClasse = document.getElementsByName('button');
            index.button2.classList.toggle('active');
            if(buttonClasse == 'active'){
                this._likesLiken += 1;
            }
            
        });
    }
}

export default Artikels;
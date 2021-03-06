"use strict";

import NewsEHB from "./api.js";

class Artikels{
    constructor(id, liken){
        this._idLiken = id;
        this._likesLiken = liken;

        console.log('Aantal Likes', liken);
    }

    get id(){
        return this._idLiken;
    }

    get liken(){
        return this._likesLiken;
    }

    set liken(l){
        this._likesLiken = l;
    }

    like(){
        fetch(`https://thecrew.cc/news/create.php`, {
            method: 'POST',
            body: {
                "UUID": this.id
            }
        })
        .then(data => {
            console.log("Succes3", data);
            const imgClass = document.getElementById(`article_likebutton_${this.id}`);
            imgClass.classList.toggle('active');
            console.log('toggle active', imgClass);
        });
    }
}

export default Artikels;


// 1. Ophalen
// 2. veranderen
// 3. returnen/doorsturen
// 4.ophalen
// 5. toevoegen
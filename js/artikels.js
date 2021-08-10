"use strict";

import NewsEHB from "./api.js";

class Artikels{
    constructor(id, liken){
        this._idLiken = id;
        this._likesLiken = liken;
    }

    get id(){
        return this._idLiken;
    }

    get liken(){
        return this._likesLiken;
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
            console.log('help', imgClass);
            imgClass.classList.toggle('active');

            // if( imgClass == 'active'){
            //     this.liken += 1;
            // }
            // if (imgClass != 'active'){
            //     this.liken -= 1;
            // }
            
        });
    }
}

export default Artikels;
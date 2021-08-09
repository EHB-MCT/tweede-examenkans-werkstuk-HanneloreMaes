"use strict";

import NewsEHB from "./api.js";

class Artikels{
    constructor(id, liken){
        this._idLiken = id;
        this._likesLiken = liken;
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
            
            const imgClass = document.getElementById('none');
            if( imgClass != 'active'){
                imgClass.classList.remove('none');
                imgClass.classList.add('active');
                this.liken += 1;
            }
            else if (imgClass == 'active'){
                imgClass.classList.remove('active');
                imgClass.classList.add('none');
                this.liken -= 1;
            }
        });
    }
}

export default Artikels;
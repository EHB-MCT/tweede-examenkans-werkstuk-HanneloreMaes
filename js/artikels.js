"use strict";

class Artikels{
    constructor(){

    }

    like(){
        fetch(`https://thecrew.cc/news/create.php`, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            console.log("Succes", data);
            data.forEach(function (likes) {
                const meegevenLike = `UUID van de post`;
            });
        });
    }
}
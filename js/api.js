"use strict";

class NewsEHB {
    constructor(id, titel, content, image, likes, datum){
        this._id= id;
        this._title= titel;
        this._content= content;
        this._imageURL= image;
        this._likes= likes;
        this._datum= datum;
        console.log('1',this._id);
    }
    
    get id(){
        return this._id;
    }

    get titel(){
        return this._title;
    }

    get content(){
        return this._content;
    }

    get image(){
        return this._imageURL;
    }

    get likes(){
        return this._likes;
    }

    get datum(){
        return this._datum;
    }

    nieuws(){
        fetch(`https://thecrew.cc/news/read.php`)
            .then(response => response.json())
            .then(data => {console.log("News", data);
            });
    }
}

export default NewsEHB;

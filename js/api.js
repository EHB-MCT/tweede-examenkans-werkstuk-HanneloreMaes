"use strict";

class NewsEHB {
    constructor(ID, titel, content, image, likes, datum){
        this._id= ID;
        this._title= titel;
        this._content= content;
        this._imageURL= image;
        this._likes= likes;
        this._datum= datum;
        console.log("this",this);
    }
    
    get ID(){
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
        .then(data => {console.log('succes', data);});
    }
}

export default NewsEHB;

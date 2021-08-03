"use strict";

class NewsEHB {
    constructor(ID, title, content, image, likes, datum){
        this._id= ID;
        this._title= title;
        this._content= content;
        this._imageURL= image;
        this._likes= likes;
        this._datum= datum;
    }
    
    get ID(){
        return this._id;
    }
    
    get title(){
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
    
}

export default NewsEHB;

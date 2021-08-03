"use strict";

import NewsEHB from "./api.js";
// import Artikels from "./artikels.js";

const ehb = {
    init(){
        this.nieuws();
        // Artikels.likes();
    },

    nieuws(){
        fetch(`https://thecrew.cc/news/read.php`)
        .then(response => response.json())
        .then(data => {
            
            console.log('succes', data);
            data.news.forEach(newsData => {
                console.log(newsData);
                const newContainer = document.createElement('div');
                newContainer.className = "infoApi";
                const containerApi = document.getElementById('container');
                const classeAPI = new NewsEHB(newsData.UUID, newsData.title, newsData.content, newsData.imageURI, newsData.likes, newsData.publicationDate);
                
               
                const stringAPI =`${classeAPI.ID} <br> ${classeAPI.title} <br>  ${classeAPI.content} <br> ${classeAPI.image} <br> ${classeAPI.likes} <br> ${classeAPI.datum} <br>`;
                
                newContainer.insertAdjacentHTML('beforeend', stringAPI);
                containerApi.insertAdjacentElement('beforeEnd', newContainer);
                console.log('container van api', containerApi);
            });
        });
    }
    
};

ehb.init();
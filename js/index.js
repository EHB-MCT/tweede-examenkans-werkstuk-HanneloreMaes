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
                
               
                const stringAPI =`
                	<h1 class="article__title">${classeAPI.title}</h1>
                    <img class="article_photo" src="${classeAPI.image}" alt="De foto van ${classeAPI.ID}">
                    <p class="article__paragraph">${classeAPI.content}</p>
                    <span class="article_like">${classeAPI.likes}</span>`;
                    
                    
                    //${classeAPI.ID} <br> ${classeAPI.title} <br>  ${classeAPI.content} <br> ${classeAPI.image} <br> ${classeAPI.likes} <br> ${classeAPI.datum} <br>`;

                    
                newContainer.insertAdjacentHTML('beforeend', stringAPI);
                containerApi.insertAdjacentElement('beforeEnd', newContainer);
                console.log('container van api', containerApi);
            });
        });
    }
    
};

ehb.init();
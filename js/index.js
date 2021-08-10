"use strict";

import NewsEHB from "./api.js";
import Artikels from "./artikels.js";

const ehb = {
    initFields(){
        this.nieuws();

        // const filter = document.getElementById('sortBtn');
        // filter.addEventListener('click', this.sortLikes());
    },

    nieuws(){
        let hallo = `<button id="article_likebutton">Hello</button>`;
        console.log('Hello', hallo);
        fetch(`https://thecrew.cc/news/read.php`)
        .then(response => response.json())
        .then(data => {
            
            console.log('succes', data);
            data.news.forEach(newsData => {
                //console.log(newsData);
                const newContainer = document.createElement('div');
                newContainer.className = "infoApi";
                const containerApi = document.getElementById('container');
                const classeAPI = new NewsEHB(newsData.UUID, newsData.title, newsData.content, newsData.imageURI, newsData.likes, newsData.publicationDate);
               
                const stringAPI =`
                	<h1 class="article__title">${classeAPI.title}</h1>
                    <img class="article_photo" src="${classeAPI.image}" alt="De foto van ${classeAPI.ID}">
                    <p class="article__paragraph">${classeAPI.content}</p>
                    <span class="article_like">${classeAPI.likes} <button id="article_likebutton_${classeAPI.ID}">Like Me!</button></span>`;

                newContainer.insertAdjacentHTML('beforeend', stringAPI);
                containerApi.insertAdjacentElement('beforeEnd', newContainer);
                console.log('container van api', containerApi);

                // this.sortLikes(likeData);
                const button2 = document.getElementById(`article_likebutton_${classeAPI.ID}`);
                button2.addEventListener("click", (e) => {       
                    e.preventDefault();
                    const liken = new Artikels(classeAPI.ID, classeAPI.likes);
                    liken.like();
                    console.log('EventListener Artikel',button2);
                });  
            });
        });
    },

    // sortLikes(likeData){
    //     const likesData = likeData;
    //     console.log('data likes', likesData);

    //     likeData.sort(function(a,b){
    //         return a.likesData - b.likesData;
    //     });

    // }

    
    
};

ehb.initFields();
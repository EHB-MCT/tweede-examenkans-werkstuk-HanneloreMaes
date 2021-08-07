"use strict";

import NewsEHB from "./api.js";
import Artikels from "./artikels.js";

const ehb = {
    initFields(){
        this.nieuws();

        // const buttonLike = document.getElementById('article_likebutton');
        // console.log('Merde', buttonLike);
        // buttonLike.addEventListener('click', (e) => this.like(e));
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
                    <span class="article_like">${classeAPI.likes} <button class="article_likebutton">Like me!</button> </span>`;

                newContainer.insertAdjacentHTML('beforeend', stringAPI);
                containerApi.insertAdjacentElement('beforeEnd', newContainer);
                console.log('container van api', containerApi);

                const button2 = document.getElementsByClassName('article_likebutton')[0];
                button2.addEventListener("click", (e) => {       
                    e.preventDefault();
                    // const artikel = new Artikels();
                });
                console.log('EventListener Artikel',button2);
                    
            });
        });
    },

    // like(e){
    //     e.preventDefault();
    //     fetch(`https://thecrew.cc/news/create.php`, {
    //         method: 'POST',
    //         body: {
    //             "UUID": [NewsEHB.UUID]
    //         }    
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Succes2", data);
    //     });
    // }

    
};

ehb.initFields();
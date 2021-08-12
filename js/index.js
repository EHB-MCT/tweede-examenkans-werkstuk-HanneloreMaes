"use strict";

import NewsEHB from "./api.js";
import Artikels from "./artikels.js";

const ehb = {
    initFields(){
        this.nieuws();

        // const btnSort = document.getElementById('sortBtn');
        // btnSort.addEventListener('click', this.filterLike());
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
                let classeAPI = new NewsEHB(newsData.UUID, newsData.title, newsData.content, newsData.imageURI, newsData.likes, newsData.publicationDate);
                
                this.filterLike(classeAPI);
                // console.log('aantal likes', classeAPI.like);

                const stringAPI =`
                	<h1 class="article__title">${classeAPI.title}</h1>
                    <img class="article_photo" src="${classeAPI.image}" alt="De foto van ${classeAPI.ID}">
                    <p class="article__paragraph">${classeAPI.content}</p>
                    <span class="article_like">${classeAPI.likes}</span>
                    <button id="article_likebutton_${classeAPI.ID}">Like Me!</button>`;

                newContainer.insertAdjacentHTML('beforeend', stringAPI);
                containerApi.insertAdjacentElement('beforeEnd', newContainer);
                console.log('container van api', containerApi);

                const button2 = document.getElementById(`article_likebutton_${classeAPI.ID}`);
                button2.addEventListener("click", (e) => {       
                    e.preventDefault();
                    const liken = new Artikels(classeAPI.ID, classeAPI.likes);
                    console.log(liken);
                    liken.like();
                    console.log('EventListener Artikel',button2);   
                });
                
            });
        });
    },

    filterLike(classeAPI){
        //console.log('FUN', classeAPI);
        let arrayLikes = [classeAPI];
        console.log("Niks",arrayLikes);     

    },
      
    
};

ehb.initFields();



// kijken naar classe api en wat er telkens moet geloopt worden. In de functie filter is de bedoeling dat alle artikels al binnen zijn
//1e oplossing: de array al aanmaken in de forEach loop nadat het alles heeft gemaakt. 
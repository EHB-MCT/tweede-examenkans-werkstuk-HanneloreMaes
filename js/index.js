"use strict";

import NewsEHB from "./api.js";

const ehb = {
    init(){

        fetch(`https://thecrew.cc/news/read.php`)
        .then(response => response.json())
        .then(data => {
            
            console.log('succes', data);
            data.news.forEach(newsData => {
                console.log(newsData);

                const containerApi = document.getElementById('container');
                const classeAPI = new NewsEHB(newsData.UUID, newsData.title, newsData.content, newsData.imageURI, newsData.likes, newsData.publicationDate);
                
               
                const x =`${classeAPI.ID} <br> ${classeAPI.title} <br>  ${classeAPI.content} <br> ${classeAPI.image} <br> ${classeAPI.likes} <br> ${classeAPI.datum} <br>`;
                
                containerApi.insertAdjacentHTML('beforeend', x);
                console.log('container van api', containerApi);
            });
        });

    

        // const oproepenClasseAPI = new NewsEHB();
        // console.log('classe newsehb', oproepenClasseAPI);

        // const containerApi = document.getElementById('container');
        // containerApi.insertAdjacentHTML('beforeend', oproepenClasseAPI);
        // console.log('container van api', containerApi);
    },

    // nieuws(){
    //     fetch(`https://thecrew.cc/news/read.php`)
    //     .then(response => response.json())
    //     .then(data => {console.log('succes', data);});
    // }
    
};

ehb.init();
// ehb.nieuws();
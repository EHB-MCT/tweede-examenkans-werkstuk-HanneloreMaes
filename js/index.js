"use strict";

import NewsEHB from "./api.js";
const ehb = {
    init(){
        const apiFunctie = new NewsEHB(NewsEHB.data.UUID,this.title);
        console.log('classe newsehb', apiFunctie.nieuws());

        const containerApi = document.getElementById('container');
        containerApi.insertAdjacentHTML('beforeend', apiFunctie.nieuws());
        console.log('container van api', containerApi);
    },

    
};

ehb.init();
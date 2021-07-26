"use strict";

import NewsEHB from "./api.js";
const ehb = {
    init(){
        const apiFunctie = new NewsEHB('1','2','3');
        console.log('classe newsehb', apiFunctie);

        const containerApi = document.getElementById('container');
        containerApi.insertAdjacentHTML('beforeend', apiFunctie);
        console.log('container van api', containerApi);
    },

};

ehb.init();
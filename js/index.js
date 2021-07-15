"use strict";

const ehb = {
    init(){

    },

    render() {
        fetch(`https://thecrew.cc/news/read.php`)
            .then(response => response.json())
            .then(data => {
                console.log("News", data);
                data.forEach(function (news) {
                    const containerNews = document.getElementById('container');
                    const info =`Hello`;

                    containerNews.insertAdjacentElement('beforeend', info);
                });
            });
    },
};

ehb.init();
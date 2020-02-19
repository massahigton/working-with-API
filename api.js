'use strict';
let key = '',
    uri = 'https://api.themoviedb.org/3/search/tv?api_key=',
    fetch = require('node-fetch');
let search = async(keyword) => {
    let url = ''.concat(`${uri}${key}&query=${keyword}`),
        response = await fetch(url).catch((err) => console.log(err)),
        data = await response.json();
    return data
}
search('Rio').then(data => { data.results.map(ele => console.log(ele.name)) });
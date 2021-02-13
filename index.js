const fetch = require('node-fetch');
const cheerio = require('cheerio');
// const url = 'https://www.imdb.com/find?s=tt&ref_=fn_al_tt_mr&q=';
const url = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=';

function searchMovies(searchTerm) {
    return fetch(`${url}${searchTerm}`).then((response) => response.text());
}
searchMovies('star wars').then((body) => {
    const $ = cheerio.load(body);
    $('.findResult').each((i, el) => {
        const movieName = $(el).text();
        const movieImg = $(el).find('td a img').attr('src');
        console.log(movieImg + '\n');
    });
});

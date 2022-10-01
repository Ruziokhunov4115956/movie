
const elSiteForm = document.querySelector('#site-form');
const elSearchInput = document.querySelector('#searchInput')
const elResult = document.querySelector('#site-movie-list')

let normalObj = movies.map((movie) => {
    return {
        title: movie.Title.toString(),
        fullTitle: movie.fulltitle,
        year: movie.movie_year,
        categories: movie.Categories,
        summary: movie.summary,
        imdbId: movie.imdb_id,
        rating: movie.imdb_rating,
        runTime: movie.runtime,
        language: movie.language,
        ytid: movie.ytid
    }
});

for (let i = 0; i < normalObj.length; i++) {
    const movie = normalObj[i];
    if (i <= 5) {
        let newLi = createElement('li', 'site-movie__list-item')
        let newDiv = createElement('div', 'site-movie__item-box ');
        let movieImg = createElement('img', 'movie-img')
        let movieHeading = createElement('h5', 'site-movie__heading', movie.title);
        let movieText = createElement('p', 'site-movie__text', movie.summary);

        movieImg.setAttribute('src', 'https://via.placeholder.com/350x200?text=Movie');
        movieImg.setAttribute('alt', movie.title)

        newDiv.appendChild(movieHeading);
        newDiv.appendChild(movieText)
        newLi.appendChild(movieImg);
        newLi.appendChild(newDiv);
        elResult.appendChild(newLi);
    }
}

elSiteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputValue = elSearchInput.value.toLowerCase();

    const searchedMovie = normalObj.filter((movie) => {
        let movieTitle = movie.title.toLocaleLowerCase().includes(inputValue);
        if (movieTitle) {
            return movie;
        }
    });

    elResult.innerHTML = "";
    searchedMovie.forEach((search) => {
        let newLi = createElement('li', 'site-movie__list-item')
        let newDiv = createElement('div', 'site-movie__item-box ');
        let movieImg = createElement('img', 'movie-img')
        let movieHeading = createElement('h5', 'site-movie__heading', search.title);
        let movieText = createElement('p', 'site-movie__text', search.summary);

        movieImg.setAttribute('src', 'https://via.placeholder.com/300x200?text=Movie');
        movieImg.setAttribute('alt', search.title)

        newDiv.appendChild(movieHeading);
        newDiv.appendChild(movieText)
        newLi.appendChild(movieImg);
        newLi.appendChild(newDiv);
        elResult.appendChild(newLi);
    })



    // let searchResult = [];
    // let searchQuary = new RegExp(inputValue, 'gi');

    // normalObj.forEach((movie) => {
    //     if (movie.title.match(searchQuary)) {
    //         searchFind.push(movie)
    //     }


    console.log(searchedMovie);
    elSiteForm.reset();
    elSiteForm.focus();
});










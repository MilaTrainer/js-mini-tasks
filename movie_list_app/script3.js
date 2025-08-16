/* Tasks for the lesson:

1) Implement functionality so that after filling out the form and clicking the "Confirm" button,
a new movie is added to the list. The page should not reload.
The new movie should be added to movieDB.movies.
To access the value of the input field – use input.value;
P.S. There are several ways to solve this task, any working solution will be accepted.

2) If the movie title is longer than 21 characters – trim it and add three dots (...)

3) When clicking on the trash bin icon – the element should be deleted from the list (advanced)

4) If the checkbox "Make favorite" is selected in the form – log the message to the console:
"Adding a favorite movie"

5) Movies should be sorted alphabetically*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {//when the DOM structure is loaded from HTML
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        checkbox = form.querySelector('input[type = "checkbox"]');//found using an attribute


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value) {
            let newFilm = input.value;
            if (newFilm.length > 21) {
                // takes characters from 0 to 20 (a total of 21 characters)
                //  add three dots at the end
                newFilm = input.value.slice(0, 22) + '...';
            }
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();


            // movieList.innerHTML += `<li class="promo__interactive-item">${newFilm}
            //                     <div class="delete"></div>
            //                 </li>`;
            if (checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }
            input.value = '';
            checkbox.checked = false;//обнавляем чекбокс
            createMovieList(movieDB.movies, movieList);
        }
    })


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">${index + 1} ${film}
                            <div class="delete"></div>
                        </li>`;
        });
    }
})

"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const answerA = prompt('Один из последних просмотренных фильмов?');
const answerB = prompt('На сколько оцените его?');

personalMovieDB.movies[answerA] = answerB;

if(personalMovieDB.count < 10) {
	console.log("Просмотрено мало фильмов!");
} else if (personalMovieDB.count >10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман!");
} else {
	console.log("Произошла ошибка!");
}
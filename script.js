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

const answerC = prompt('Один из последних просмотренных фильмов?');
const answerD = prompt('На сколько оцените его?');

personalMovieDB.movies[answerA] = answerB;
personalMovieDB.movies[answerC] = answerD;
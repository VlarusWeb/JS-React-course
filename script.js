"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const questionCount = 2;

for (let i = 0; i < questionCount; i++) {
	const answerA = prompt('Один из последних просмотренных фильмов?');
	if (answerA === "" || answerA === null || answerA.length > 50) {
		alert("Введите название фильма:(до 50 символов)");
		i--;
	} else { 
		for (let y = 0; y < 1; y++) {
			const answerB = prompt('На сколько оцените его?');
			if (answerB === "" || answerB === null || answerB > 10 || isNaN(answerB) === true) {
				alert("Введите оценку:(от 0 до 10)");
				y--;
			} else { 
				personalMovieDB.movies[answerA] = answerB;
				alert(`Вы внесли фильм ${answerA} с оценкой ${answerB} баллов  в вашу базу просмотренных кинофильмов!`);
			}
		}
	} 
}

if(personalMovieDB.count < 10) {
	console.log("Просмотрено мало фильмов!");
} else if (personalMovieDB.count >10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман!");
} else {
	console.log("Произошла ошибка!");
}
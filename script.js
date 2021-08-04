"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
		alert('Введите количество просмотренных фильмов(цифрами!).');
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}

start();

const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function saveFilmDB(questionCount, DB) {
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
					DB.movies[answerA] = answerB;
					alert(`Вы внесли фильм ${answerA} с оценкой ${answerB} баллов  в вашу базу просмотренных кинофильмов!`);
				}
			}
		} 
	}
}

saveFilmDB(3, personalMovieDB);

function detectCinemanLevel(obj) {
	if(obj.count < 10) {
		console.log("Просмотрено мало фильмов!");
	} else if (obj.count >10 && obj.count < 30) {
		console.log("Вы классический зритель!");
	} else if (obj.count > 30) {
		console.log("Вы киноман!");
	} else {
		console.log("Произошла ошибка!");
	}
}

detectCinemanLevel(personalMovieDB);



function showMyDB(obj) {
	if (obj.privat === false) {
		console.log(obj);
	}
}

showMyDB(personalMovieDB);

function writeYourGenres(obj, answerCount) {
	for (let i = 0; i < answerCount; i++) {
		let answerGenr = prompt(`Ваш любимый жанр под номером ${i + 1}`);
		if (answerGenr !== "" && answerGenr !== null) {
			obj.genres.push(answerGenr);
		} else {
			alert("Введите любимый жанр!");
			i--;
		}	
	}	
}

writeYourGenres(personalMovieDB, 3);
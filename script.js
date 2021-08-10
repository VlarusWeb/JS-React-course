"use strict";

const personalMovieDB = {
	count:0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
		while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
			alert('Введите количество просмотренных фильмов(цифрами!).');
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
		}
	},
	saveFilmDB: function(questionCount = 3) {
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
	},
	detectCinemanLevel: function() {
		if(personalMovieDB.count < 10) {
			console.log("Просмотрено мало фильмов!");
		} else if (personalMovieDB.count >10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель!");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман!");
		} else {
			console.log("Произошла ошибка!");
		}
	},
	writeYourGenres: function(answerCount = 3) {
		for (let i = 0; i < answerCount; i++) {
			let answerGenr = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (answerGenr !== "" && answerGenr !== null) {
				personalMovieDB.genres.push(answerGenr);
			} else {
				alert("Введите любимый жанр!");
				i--;
			}	
		}	
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}!`);
		});
	},
	showMyDB: function() {
		if (personalMovieDB.privat === false) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};
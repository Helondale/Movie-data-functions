import { toExport as movies } from "./data.js";

function dramas(movies) {
	let container = [];
	movies.forEach(function (movie) {
		if (movie.genres.includes("Drama")) {
			container.push(movie.title)
		}
	})
	return container
};
console.log(dramas(movies));

function findByGenre(genre, movies) {
	let container = [];
	movies.forEach(function (movie) {
	if(movie.genres.includes(genre))	
	container.push(movie.title)
	})
	return container
};
console.log(findByGenre("Music", movies));

function longestMovie(movies){
let largest = 0;	
movies.forEach(function(movie) {
	if(largest < movie.runtime){
		largest = movie.runtime
	}
})
return largest
};
console.log(longestMovie(movies));

function longestMovieByGenre(genre, movies){
	let container = [];
	movies.forEach(function (movie) {
	if(movie.genres.includes(genre))	
	container.push(movie)
	})
	let largest = container[0]	
	container.forEach(function(movie) {
		if(largest.runtime < movie.runtime){
			largest = movie
		}
	})
	return largest.title	
};
console.log(longestMovieByGenre("Music", movies));
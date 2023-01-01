import { toExport as movies } from "./data.js";


// YOUR CODE COMES HERE
function dramas(movies) {
	let cica = [];
	movies.forEach(function (movie) {
		if (movie.genres.includes("Drama")) {
			cica.push(movie.title)

		}

	})
	return cica
};

console.log(dramas(movies));

function findByGenre(genre, movies) {
	let cica = [];
	movies.forEach(function (movie) {
	if(movie.genres.includes(genre))	
		cica.push(movie.title)
	})
	return cica
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
	let cica = [];
	movies.forEach(function (movie) {
	if(movie.genres.includes(genre))	
		cica.push(movie)
	})
	let largest = cica[0]	
	cica.forEach(function(movie) {
		if(largest.runtime < movie.runtime){
			largest = movie
		}
		
	})
	return largest.title	
};
console.log(longestMovieByGenre("Music", movies));










// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{ name: "dramas", content: dramas, type: "function" },
		{ name: "findByGenre", content: findByGenre, type: "function" },
		{ name: "longestMovie", content: longestMovie, type: "function" },
		{ name: "longestMovieByGenre", content: longestMovieByGenre, type: "function" }
	]
} catch (error) {
	toExport = { error: error.message }
}

export { toExport }

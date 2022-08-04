/** @format */

let mov;
let cont = document.getElementById("movie");

// function fet() {
//     let data = document.getElementById("searchbar").value;
//     fetch(`http://www.omdbapi.com/?t=${data}&apikey=ee681166`)
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (res) {
//             console.log(res.Error);
//             display(res);
//         })
//         .catch(function (err) {
//             // console.log(err);
//             console.log('res');
//             notFound();
//         });
// }
async function getMovie() {
	let data = document.getElementById("searchbar").value;
	try {
		let x = await fetch(`http://www.omdbapi.com/?t=${data}&apikey=ee681166`);
        mov = await x.json();
		console.log(mov);
        if (mov.Response === "True") {
            display(mov);
        } else {
        notFound();
        }
    } catch (e) {
        notFound();
	}
}

function getMovieC() {
	getMovie();
}

function display(data) {
	cont.innerHTML = null;
		let mainDiv = document.createElement("div");

		let poster = document.createElement("div");
		let img = document.createElement("img");
		img.src = data.Poster;
		poster.append(img);

		let title = document.createElement("p");
		title.innerText = data.Title;

        let released = document.createElement("p");
        released.innerHTML=data.Released;

		rate = document.createElement("p");
        rate.innerText = data.Rated;
        
        let genre = document.createElement("p");
        genre.innerText = data.Genre;

        let actors = document.createElement("p");
        actors.innerText = data.Actors;

		mainDiv.append(poster, title,released,rate,genre, actors);
		cont.append(mainDiv);
}

function notFound() {
    cont.innerHTML = null;
    let img=document.createElement("img");
    img.src =
        "https://media1.giphy.com/media/14uQ3cOFteDaU/200.webp?cid=ecf05e476n215ymnfc84maiueb49j29yarg2ju5cqcu8zlnh&rid=200.webp&ct=g";
    
    img.style.height='100%';
    img.width.height='100%';
    cont.append(img);
}




// let obj={
//     "Title": "xXx",
//     "Year": "2002",
//     "Rated": "PG-13",
//     "Released": "09 Aug 2002",
//     "Runtime": "124 min",
//     "Genre": "Action, Adventure, Thriller",
//     "Director": "Rob Cohen",
//     "Writer": "Rich Wilkes",
//     "Actors": "Vin Diesel, Asia Argento, Marton Csokas",
//     "Plot": "An extreme sports athlete, Xander Cage, is recruited by the government on a special mission.",
//     "Language": "English, German, Spanish, Russian, Czech",
//     "Country": "United States",
//     "Awards": "4 wins & 14 nominations",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjYwMzg4MTAtYTQ3NC00MjdlLWEzNGEtNzQwYzA3OGZmZWYyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "5.8/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "49%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "48/100"
//         }
//     ],
//     "Metascore": "48",
//     "imdbRating": "5.8",
//     "imdbVotes": "179,665",
//     "imdbID": "tt0295701",
//     "Type": "movie",
//     "DVD": "31 Dec 2002",
//     "BoxOffice": "$142,109,382",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }

let musicLibrary = []
let i = 0;


class Album{

	constructor (name, rating) {
		this.name = name
		this.rating = rating
	}
}

const sub = document.getElementById("submit")
const albums = document.getElementById("albums")

function addAlbum(name, rating) {
	for (i; i < musicLibrary.length; i++) {}
	const newAlbum = new Album(name, rating)
	musicLibrary[i] = newAlbum
	let p = document.createElement("div")
	p.innerText = "Name: " + newAlbum.name + '\n' + "Rating: " + newAlbum.rating
	p.className = "card"
	albums.appendChild(p)
}

sub.addEventListener("click", function() {
	const name = document.getElementById("name")
	const rating = document.getElementById("rating")
	//if (name.value != "" && rating.value != "")
		addAlbum(name.value, rating.value)
})
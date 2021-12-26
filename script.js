let musicLibrary = []
let i = 0;


class Album{

	constructor (name, rating) {
		this.name = name
		this.rating = rating
	}
}

const sub = document.getElementById("submit")
const penis = document.getElementById("penis")

function addAlbum(name, rating) {
	for (i; i < musicLibrary.length; i++) {}
	const newAlbum = new Album(name, rating)
	musicLibrary[i] = newAlbum
	let p = document.createElement("div")
	p.innerText = "Name: " + newAlbum.name
	penis.appendChild(p)
	p = document.createElement("div")
	p.innerText = "Rating: " + newAlbum.rating
	penis.appendChild(p)
	p = document.createElement("p")
	penis.appendChild(p)
}

sub.addEventListener("click", function() {
	const name = document.getElementById("name")
	const rating = document.getElementById("rating")
	addAlbum(name.value, rating.value)
})
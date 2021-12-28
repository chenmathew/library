let musicLibrary = []
let i = 0;


class Album{

	constructor (title, artist, len, listened) {
		this.title = title
		this.artist = artist
		this.len = len
		this.listened = listened
	}
}

const sub = document.getElementById("submit")
const albums = document.getElementById("albums")

function addAlbum(title, artist, len, listened) {
	for (i; i < musicLibrary.length; i++) {}
	const newAlbum = new Album(title, artist, len, listened)
	musicLibrary[i] = newAlbum
	let p = document.createElement("div")
	p.innerText = "Name: " + newAlbum.title + '\n' + "Rating: " + newAlbum.artist
	p.className = "card"
	albums.appendChild(p)
}

sub.addEventListener("click", function() {
	const title = document.getElementById("title")
	const artist = document.getElementById("artist")
	//if (name.value != "" && rating.value != "")
		addAlbum(title.value, artist.value)
})


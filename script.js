let musicLibrary = []
let removeBtn = []
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
let bad = document.getElementById("requirement")

function removeBtnFunc(p) {
	p.remove()
	musicLibrary.splice(i, 1)
	i--
}



function addAlbum(title, artist, len, listened) {
	for (i = 0; i < musicLibrary.length; i++) {
		if (musicLibrary[i].title == title && musicLibrary[i].artist == artist) {
			bad.innerText = "You've already added this album"
			return
		}
	}
	const newAlbum = new Album(title, artist, len, listened)
	musicLibrary[i] = newAlbum
	let p = document.createElement("div")
	p.innerText = "Name: " + newAlbum.title + '\n' + "Artist: " + newAlbum.artist + "\n" + "Length: " + newAlbum.len + '\n' + "Listened: " + newAlbum.listened + "\n"
	p.className = "card"
	let btn = document.createElement("button")
	btn.innerText = "Remove"
	btn.id = "remove"
	removeBtn[i] = btn
	removeBtn[i].addEventListener("click", function() {
		removeBtnFunc(p)
	})
	let edit = document.createElement("button")
	edit.innerText = "Edit"
	p.appendChild(edit)
	p.appendChild(btn)
	albums.appendChild(p)
}



sub.addEventListener("click", function() {
	let title = document.getElementById("title").value
	title = title.trim()
	let artist = document.getElementById("artist").value
	artist = artist.trim()
	let len = document.getElementById("length").value
	len = len.trim()
	let choices = document.querySelectorAll('input[name="radio"]');
    let listened;
    for (const choice of choices) {
        if (choice.checked) {
        	listened = choice.value;
            break;
            }
        }
	if (title != "" && artist != "" && len != "" && listened != undefined) {
		bad.innerText = ""
		addAlbum(title, artist, len, listened)
	}
	else {
		bad.innerText = "Please fill out all lines"
	}
})


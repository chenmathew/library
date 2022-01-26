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
let bad = document.getElementById("requirement")

function removeBtnFunc(card) {
	card.remove()
	musicLibrary.splice(i, 1)
	i--
}

function toggleFunc(card, updatedAlbum) {
	if (updatedAlbum.listened == "No") {
		updatedAlbum.listened = "Yes"
	}
	else {
		updatedAlbum.listened = "No"
	}
	card.innerText = `Name: ${updatedAlbum.title}
					Artist: ${updatedAlbum.artist}
					Length: ${updatedAlbum.len}
					Listened: ${updatedAlbum.listened}
					`
	createButton(card, updatedAlbum)
}

function updateCard(newAlbum) {
	let card = document.createElement("div")
	card.innerText = `Name: ${newAlbum.title}
					Artist: ${newAlbum.artist}
					Length: ${newAlbum.len}
					Listened: ${newAlbum.listened}
					`
	card.className = "card"
	createButton(card, newAlbum)
	return card
}

function createButton(card, newAlbum) {
	let btn = document.createElement("button")
	btn.innerText = `Remove`
	btn.id = "remove"
	let toggle = document.createElement("button")
	toggle.innerText = `Toggle`
	card.appendChild(toggle)
	card.appendChild(btn)
	btn.addEventListener("click", function() {
		removeBtnFunc(card)
	})
	toggle.addEventListener("click", function() {
		toggleFunc(card, newAlbum)
	})
}


function newCard(newAlbum) {
	let card = updateCard(newAlbum)
	albums.appendChild(card)
}



function addAlbum(title, artist, len, listened) {
	for (i = 0; i < musicLibrary.length; i++) {
		if (musicLibrary[i].title == title && musicLibrary[i].artist == artist) {
			bad.innerText = `You've already added this album`
			return
		}
	}
	const newAlbum = new Album(title, artist, len, listened)
	musicLibrary[i] = newAlbum
	newCard(musicLibrary[i])
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
		bad.innerText = `Please fill out all lines`
	}
})


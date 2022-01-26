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

removeBtnFunc = (card) => {
	card.remove()
	musicLibrary.splice(i, 1)
	i--
}

toggleFunc = (card, updatedAlbum) => {
	if (updatedAlbum.listened == "No") {
		updatedAlbum.listened = "Yes"
	}
	else {
		updatedAlbum.listened = "No"
	}
	setInnerText(card, updatedAlbum)
	createButton(card, updatedAlbum)
}

updateCard = (newAlbum) => {
	let card = document.createElement("div")
	setInnerText(card, newAlbum)
	createButton(card, newAlbum)
	return card
}

setInnerText = (card, album) => {
	card.innerText = `Name: ${album.title}
					Artist: ${album.artist}
					Length: ${album.len}
					Listened: ${album.listened}
					`
	card.className = "card"
}

createButton = (card, newAlbum) => {
	let remove = document.createElement("button")
	remove.innerText = `Remove`
	remove.className = "cardButtons"
	let toggle = document.createElement("button")
	toggle.innerText = `Toggle`
	toggle.className = "cardButtons"
	card.appendChild(toggle)
	card.appendChild(remove)
	remove.addEventListener("click", function() {
		removeBtnFunc(card)
	})
	toggle.addEventListener("click", function() {
		toggleFunc(card, newAlbum)
	})
}


newCard = (newAlbum) => {
	let card = updateCard(newAlbum)
	albums.appendChild(card)
}



addAlbum = (title, artist, len, listened) => {
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
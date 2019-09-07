var kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
	return kittens;
}

function destructivelyAppendKitten (name) {
	window.kittens.push(name);
}
function destructivelyPrependKitten (name) {
	window.kittens.unshift(name);
}

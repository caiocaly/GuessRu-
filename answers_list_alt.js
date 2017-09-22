function Load() {
}


class Drag {
	constructor (name, variations, hints){
		this.name = name;
		this.variations = variations;
		this.hints = hints;
	}

	get acceptableAnswers () {
		return this.variations.concat(this.name);
	}

	get firstHint () {
		return this.hints[0];
	}

	get secondHint () {
		return this.hints[1];
	}

	get thirdHint () {
		return this.hints[3];
	}
}


dragList = [
new Drag (
	'Lashawn Beyond',
	["lashaun","lashawhn", 'lashown beyond', 'lashawn beyon', "la'shawn beyond"], 
	["She used to do makeup for other drag queens", 
	"She wore a weird globe thing in her head as part of an outfit", 
	"THIS IS NOT RUPAUL'S BEST FRIEND RACE"]
	),

new Drag ('Demi',["g","h"], ["i", "j", "k"])
]
var planeswalkCost = 0;
var firstRoll = true;


var arrayRange = function(min, max) {

    var array = [];

    for(var i = 0, j = min; j <= max; j++, i++) {

        array[i] = j;
    }

    return array;

};

var shuffleArray = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

var deckArray = function (num) {

    var deck = arrayRange(1, num);
    return shuffleArray(deck);

};

var nextPlane = function() {
    planeswalkCost = 0;
    $('#planarDieButton').text("Try to Planeswalk: " +planeswalkCost);
    $('#planarDieButton').css("background-color", "DeepSkyBlue");
    $('#chaos').text(deck[deckIndex[i] - 1].chaos);
	$('#name').text(deck[deckIndex[i] - 1].name);
	document.getElementById('img').src = deck[deckIndex[i] - 1].url;
	document.getElementById('text').innerHTML = deck[deckIndex[i] - 1].text;

	if (i < deckIndex.length - 1) {
		i++;
	} else {
		i = 0;
	}
}

var chaos = function() {
    $('#planarDieButton').text("Chaos Fills the Plane. Try to Planeswalk: " +planeswalkCost);
    $('#planarDieButton').css("background-color", "red");
}


var deckIndex = deckArray(deck.length);

console.log(deckIndex);

var i = 0;

var planeswalkingNow = false;

$('#planarDieButton').on('click', function () {
    if (planeswalkingNow) {
        planeswalkingNow = false;
        nextPlane();
    } else {
        var thisRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        ++planeswalkCost
        $('#planarDieButton').text("Attempt to Planeswalk: " +planeswalkCost);

        if (firstRoll) {
            nextPlane();
            firstRoll = false;
        } else

        if (thisRoll == 1) {
             $('#planarDieButton').text("Success!\nPlaneswalking Away!");
             $('#planarDieButton').css("background-color", "LimeGreen");
            planeswalkingNow = true;
        }
        else if (thisRoll == 2) {
            chaos();
        }
        else {
            $('#planarDieButton').css("background-color", "DeepSkyBlue");
            $('#planarDieButton').text("Nothing Happened. Try to Planeswalk: " +planeswalkCost);
        }
    }
});

$('#nextTurnButton').on('click', function () {
    planeswalkCost = 0;
    $('#planarDieButton').text("Attempt to Planeswalk: " +planeswalkCost);
    $('#planarDieButton').css("background-color", "DeepSkyBlue");
})

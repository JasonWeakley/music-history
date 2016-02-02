var portalSongInfo = document.getElementById("songInfo");


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Like A Match on the album This Is Not A Test");
songs.push("Happy Birthday on the album I Made It Myself");

// var greaterThan = songs[].replace(/>/g, "-");
// console.log(greaterThan);

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	songs[i] = songs[i].replace(/!/g, "");
	portalSongInfo.innerHTML += "<h4>" + songs[i] + "</h4>"
};
console.log("songs", songs);

document.getElementsByClassName("yellowContent");
// console.log("songs", songs);

// var theOneImLookingFor = songElements[0];
// console.log("theOneImLookingFor", theOneImLookingFor);

// element.innerHTML = phrase;
// console.log("element.innerHTML", element.innerHTML);


// document.getElementsByClassName("yellowContent");
// console.log("songElements", songElements);

// var theOneImLookingFor = songElements[0];
// console.log("theOneImLookingFor", theOneImLookingFor);


// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// };


















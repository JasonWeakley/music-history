"use strict";

// var portalSongInfo = $("#songInfo");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Like A Match on the album This Is Not A Test");
songs.push("Happy Birthday on the album I Made It Myself");


function popList() {
	var output = "";
	for (var i = 0; i < songs.length; i++) {
		songs[i] = songs[i].replace(/>/g, "-");
		songs[i] = songs[i].replace(/\*/g, "");
		songs[i] = songs[i].replace(/@/g, "");
		songs[i] = songs[i].replace(/\(/g, "");
		songs[i] = songs[i].replace(/!/g, "");
		output += "<h4>" + songs[i] + "</h4>"
	};
	$("#home-view").html(output);
}
popList();



"use strict";

$("#link-add").click(function() {
    $("#add-view").removeClass("hidden");
    $("#add-view").addClass("visible");
    $("#list-view").addClass("hidden");
    $("#home-view").addClass("hidden");
});

function addNewSong() {
		let newSong = $("#input-song").val();
		let newArtist = $("#input-artist").val();
		let newAlbum = $("#input-album").val();
		let newArrayItem = newSong + ` by ` + newArtist + ` on the album ` + newAlbum;
		songs.push(newArrayItem);
		console.log("songs",songs);
		console.log("newArrayItem",newArrayItem);
		popList();
		$(document).ready(function(){
			$("input[type=text]").each(function(){
				$(this).val("");
			});
		});
}

$("#add-button").click(function(e) {
	addNewSong();
});

$("#input-album").keypress(function(e) {
	if(e.which == 13) {
		addNewSong();
	}
})
function responsiveNav() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
	  x.className += " responsive";
	} else {
	  x.className = "nav";
	}
}

function showBands() {
	var popup = document.getElementById("popup");
    var popupInfo = document.getElementById("popupInfo")

	let bands = 
	`Bring Me The Horizon, 
	Badflower, 
	YUNGBLUD, 
	My Chemical Romance, 
	Sleeping With Sirens, 
	Pierce The Veil, 
	Asking Alexandria, 
	grandson, 
	A Day To Remember, 
	Boston Manor, 
	Falling In Reverse, 
	Bad Omens, 
	Jimmy Eat World, 
	Papa Roach, 
	Muse, 
	Paramore, 
	All Time Low, 
	Palaye Royale, 
	blink-182, 
	Bullet For My Valentine, 
	DON BROCO, 
	Point North, 
	The Offspring,
	Nothing But Thieves, 
	Beartooth, 
	Escape the Fate, 
	The Amity Afflication,
	Destroy Boys,
	Motionless In White,
	Parkway Drive, and 
	System of a Down,
	Ice Nine Kills,
	Halestorm,
	Slipknot,
	Evanescence,
	Fall Out Boy,
	The Interrupters,
	I Prevail,
	Memphis May Fire,
	Silverstein,
	Spiritbox,
	Three Days Grace,
	The Used,
	Waterparks,
	and The Word Alive
	<br><br><a href='https://stats.fm/bob-brown' target='_blank'>If you're still reading this...</a>`;
	popupInfo.innerHTML = bands;

    popup.style.display = "block";

    window.onclick = function(e) {
        if (e.target == popup) {popup.style.display = "none";}
    } 
}


var companyName = "We Will Do It";
document.title = companyName + document.title;

let navTitle = document.getElementById("navTitle");
if (navTitle !== null) {
	navTitle.textContent = companyName;
}

let headerTitle = document.getElementById("headerTitle");
if (headerTitle !== null) {
	headerTitle.textContent = "Üdvözöljük a " + companyName + " weboldalán!";
}

let footerTitle = document.getElementById("footerTitle");
if (footerTitle !== null) {
	footerTitle.innerHTML = "&copy; 2023 " + companyName + ". Minden jog fenntartva.";
}

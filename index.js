let pointsHome = document.getElementById('points-home')
let pointsGuest = document.getElementById('points-guest')
let addPoints1 = 1
let addPoints2 = 2
let addPoints3 = 3
let countHome = 0
let countGuest = 0
let countCap = 99

function addPointsHome(team, points) {
	countHome += points
	if (countHome <= countCap) {
		team.textContent = countHome
	} else {
		alert('Max score is 99!')
	}
}

function addPointsGuest(team, points) {
	countGuest += points
	if (countGuest <= countCap) {
		team.textContent = countGuest
	} else {
		alert('Max score is 99!')
	}
}

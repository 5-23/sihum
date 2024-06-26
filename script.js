const gimalStart = "2024-07-03T08:50:00";

function countdown() {
	const a = new Date(gimalStart);
	const b = new Date();
	if (b >= a) {
		document.getElementsByClassName("title")[0].innerHTML = "⭐️경 중간고사si작 축⭐️";
	} else {
		const total = (a - b) / 1000;
		document.getElementById("seconds").innerHTML = `<b style="color: red">Si험까지</b> ${getFloatFixed(total, 2)} 초 남음`;
	}
}

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}

function getFloatFixed(value, fixed) {
	return parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
}

setInterval(countdown, 10);

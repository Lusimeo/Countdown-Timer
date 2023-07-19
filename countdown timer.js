const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newBeginningYear = '1 Jan 2024';

function countdown() {
	const newBeginningDate = new Date(newBeginningYear)
	const currentDate = new Date();
	
	const totalSeconds = (newBeginningDate - currentDate) / 1000;
	
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;
	
	daysEl.innerHTML = days
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);
	
	function formatTime(time) {
		return time < 10 ? `0${time}` : time;
	}
}
//intial call
countdown();

setInterval(countdown, 1000);

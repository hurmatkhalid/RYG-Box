console.log('hello');

let titleDiv = document.getElementById('title');

let new_title = 'Square Color Counter';

titleDiv.innerText = new_title;

titleDiv.innerHTML = `<p>${new_title}</p>`;

titleDiv.style.backgroundColor = 'yellow';

const squares = document.querySelectorAll('.colorSquare');

//foreach loop
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
	square.onclick = () => {
		timesClicked[square.value] += 1;
		square.innerText = timesClicked[square.value];
	};
});
function clearScores() {
	timesClicked.red = 0;
	timesClicked.yellow = 0;
	timesClicked.green = 0;
	squares.forEach((square) => {
		square.innerText = '';
	});
}
const clearGameBtn = document.getElementById('clear-game');
clearGameBtn.onclick = () => clearScores();

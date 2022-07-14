const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let score = "";
const sWords = ['python','java','c++','javascript','html','css'];
const createNewWords = () =>{
	let ranNum = Math.floor(Math.random() * sWords.length);
	let newTempSwords = sWords[ranNum];
	console.log(newTempSwords);
	return newTempSwords;
}
const scrambleWords = (arr) => {
	//length-1 to get the index no. and in 2nd the i should be > 0 bcz we are going to decrement the i value.
	for (let i = arr.length - 1; i > 0; i--) {
		let temp = arr[i];
		let j = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[j];
		arr[j] = temp;
	}
    return arr;
}
btn.addEventListener('click',function(){
	if(!play){
	    play = true;
		btn.innerHTML = "Guess";
		guess.classList.toggle('hidden');
		// initally only call theh fuction later when calling scrambled function then add the variable names
		newWords = createNewWords();
		randWords = scrambleWords(newWords.split("")).join("");
		msg.innerHTML = `Guess the word : ${randWords} `;
    }
    else{
		let tempWord = guess.value;
		score++ ;
		if(tempWord === newWords){
			console.log('correct');
			play = false;
			msg.innerHTML = `Awesome It's Correct. It is ${newWords}. `;
			btn.innerHTML = "Start";
			// debugger;
			guess.classList.toggle("hidden");
			guess.value = "";
			// window.location.reload();
        }
        else{
			msg.innerHTML = `Opps, It's Incorrect. Guess again ${randWords}`;
			}
	}
})
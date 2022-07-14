let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
function convertTOWord(letter){
	if (letter ==="r")return "Rock";
	if (letter ==="p")return "Paper";
	return "Scissors";
}
function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWorld="user".fontsize(3).sub();	
	const smallCompWorld="comp".fontsize(3).sub();
	result_p.innerHTML=convertTOWord(userChoice)+(smallUserWorld)+ " beats "+convertTOWord(computerChoice)+(smallCompWorld)+". YOU win!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")},400);
}
function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWorld="user".fontsize(3).sub();	
	const smallCompWorld="comp".fontsize(3).sub();
	result_p.innerHTML=convertTOWord(userChoice)+(smallUserWorld)+ " loses to "+convertTOWord(computerChoice)+(smallCompWorld)+". YOU lost!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")},400);
}
function draw(userChoice,computerChoice){
	const smallUserWorld="user".fontsize(3).sub();	
	const smallCompWorld="comp".fontsize(3).sub();
	result_p.innerHTML=convertTOWord(userChoice)+(smallUserWorld)+ " equals "+convertTOWord(computerChoice)+(smallCompWorld)+". It's a draw!";
}

function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice + computerChoice){
		case"rs":
		case"sp":
		case"pr":
		    win(userChoice,computerChoice);
		    break;
        case"sr":
        case"ps":
        case"rp":
            lose(userChoice,computerChoice);
            break;
        case"ss":
        case"pp":
        case"rr":    
            draw(userChoice,computerChoice);
            break;
	}

}
function main()
{
rock_div.addEventListener("click",function(){
	game("r");
})
paper_div.addEventListener("click",function(){
	game("p");
})
scissor_div.addEventListener("click",function(){
	game("s");
})
}
main();
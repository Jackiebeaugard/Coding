function rollDice() {
 return Math.floor(Math.random() * 6) + 1;
}

function play() {
 var startingBet = document.getElementById("startingBet").value;
 var money = startingBet;
 var dieOne = 0;
 var dieTwo = 0;
 var diceTotal = 0;
 var maxMoney = 0;
 var rolls = 0;
 var rollsMax = 0;
 

if (money <= 0) {
	console.error("Bet must be a minimum of $1");
	alert("Bet must be a minimum of $1");
} else {
		while (money > 0) {
		rolls++;
		dieOne = rollDice();
		dieTwo = rollDice();
		diceTotal = dieOne + dieTwo;
		if (diceTotal == 7) {
			money +=4;
		} else {
			money--;
			if(money > maxMoney) {
				maxMoney += (money-maxMoney);
				rollsMax = rolls;
			}
		}
		}
}		

document.getElementById("results").style.display = "block";
document.getElementById("buttonButton").innerText = "Play Again!";
document.getElementById("initial").innerText = startingBet;
document.getElementById("rollsNumber").innerText = rolls;
document.getElementById("highestMoney").innerText = maxMoney;
document.getElementById("highestRolls").innerText = rollsMax;
return false;

}
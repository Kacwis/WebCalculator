let result = 0;

let isSymbolChosen = false;

let isFirstNumberChosen = false;

let currentSymbol;

let currentNumber = 0;

const resultTitle = document.getElementById("result");

const numbersDiv = document.getElementById("numbers");
const allNumbers = numbersDiv.getElementsByClassName("number");

const symbolsDiv = document.getElementById("symbols");
const allSymbols = symbolsDiv.getElementsByClassName("button");

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
	setResult(0);
	isFirstNumberChosen = false;
	isSymbolChosen = false;
	currentSymbol.classList.remove("active");
});

const setCurrentNumber = (number) => {
	if (isFirstNumberChosen && isSymbolChosen) {
		setResult(calculateResult(+currentNumber, +number, currentSymbol));
		currentNumber = result;
		isSymbolChosen = false;
		currentSymbol.classList.toggle("active");
		return;
	} else if (!isFirstNumberChosen) {
		setResult(number);
		isFirstNumberChosen = true;
		currentNumber = number;
		return;
	} else if (isFirstNumberChosen && !isSymbolChosen) {
		setResult(number);
		currentNumber = number;
	}
};

const setCurrentSymbol = (symbol) => {
	if (!isFirstNumberChosen) {
		currentNumber = result;
		isFirstNumberChosen = true;
	}
	currentSymbol = symbol;
	symbol.classList.toggle("active");
	isSymbolChosen = true;
};

for (let i = 0; i < allNumbers.length; i++) {
	const button = allNumbers[i];
	button.addEventListener("click", () => {
		setCurrentNumber(button.textContent);
	});
}

for (let i = 0; i < allSymbols.length; i++) {
	const symbol = allSymbols[i];
	symbol.addEventListener("click", () => {
		setCurrentSymbol(symbol);
	});
}

const setResult = (newResult) => {
	result = newResult;
	resultTitle.textContent = newResult;
};

const calculateResult = (firstNumber, secondNumber, symbol) => {
	switch (symbol.textContent) {
		case "+":
			return firstNumber + secondNumber;
		case "-":
			return firstNumber - secondNumber;
		case "/":
			if (secondNumber == 0) {
				return "ERR";
			}
			return firstNumber / secondNumber;
		case "*":
			return firstNumber * secondNumber;
	}
};

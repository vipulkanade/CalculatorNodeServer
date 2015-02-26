/**
 * New node file
 */

function calculator(req, res){
	var firstNumber = parseFloat(req.param("firstNumber"));
	var secondNumber = parseFloat(req.param("secondNumber"));
	var operation = req.param("operation");
	
	var finalValue;
	//console.log("Operation to be Performed : " + operation + "\n Second Number:  "+ secondNumber + "\n First Number: " + firstNumber);
	switch (operation) {
	case "Addition":
		console.log("Add");
		finalValue = firstNumber + secondNumber;
		break;
		
	case "Substraction":
		console.log("Sub");
		finalValue = firstNumber - secondNumber;
		break;
		
	case "Multiplication":
		console.log("Mul");
		finalValue = firstNumber * secondNumber;
		break;
		
	case "Division":
		console.log("Div");
		finalValue = firstNumber / secondNumber;
		break;
		
	default :
		finalValue = "Error in Calculator";
		break;
	}
	console.log(finalValue);
	res.send({"finalValue": finalValue});
}

exports.calculate = calculator;
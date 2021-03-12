// Tutorials
let x = [3, 6, 9, 2];

for (var i = x.length - 1; i >= 0; i--) {
	x[i] -=
}

// userName validation

function CodelandUsernameValidation(str) { 

  // code goes here  
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const valid_length = (str) => str.length >= 4 && str.length <= 25;
  return valid_reg.test(str) && valid_length(str);
}
   
// keep this function call here 
var str1 = "johngod_40_today"
console.log(CodelandUsernameValidation(str1));


// finding intersection

function FindIntersection(strArr) { 

 
  var arr0 = strArr[0].split(', ');
  var arr1 = strArr[1].split(', ');
  strArr = [];
  
  for (var i = 0; i < arr0.length; i++) {
    if (arr1.indexOf(arr0[i]) != -1) {
      strArr.push(arr0[i]);
    }
  }
  
  if (strArr.length === 0) {
    return 'false';
  }
  
  return strArr.join(',');
  
}

var newArray = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
FindIntersection()

// Question mark challenge

function QuestionMarks(str){
	var patt = /\d[\w\?]*?\d/;
	if (str.match(patt) == null) 
		return false
	var check = patt.exec(str);
	var checkSplit = check[0].split("");
	var result = false;
	if (Number(checkSplit[0]) + Number(checkSplit[checkSplit.length - 1]) === 
		10 && checkSplit.filter(char => char === "?").length === 3) {
		result = true
	}else{
		return false
	}
	return result;
}

var vv = 'hggd5????3ffff6???4ffg'
QuestionMarks(vv)


// Longest Word

function LongestWord(sen){
	sen = sen.trim();
	sen = sen.replace(/^[a-zA-Z0-9 ]/g, "");

	let long = ''
	var split = sen.split(" ")
	split.forEach(word => {
		if (word.length > long.length) {
			long = word;
		}
	})

	return long;
}

//first factorial

function FirstFactorial(number) {
  var factorial = 1;
  for (var i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}


// first reverse

function FirstReverse(str){
	return str..split().reverse().join("")
}




function ArraySum(arr){
	let sum = 0;
	arr = arr.split("");
	for(let i = 0; arr.length; i++){
		result += arr;
	}

	return result;
}
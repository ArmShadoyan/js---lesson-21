"Use strict";

const parametrs = {
	heigth:20,
	weight:30,
	length:40,
	color:"black"
};
const copyParametrs = copyObject(parametrs);
parametrs.heigth = 200;
parametrs.weight = 300;
parametrs.length = 400;
parametrs.color = "white";

const parametrscopy = parametrs;

function copyObject(generalObject){
	const generalObjectCopy = {};
	for(let key in generalObject){
		generalObjectCopy[key] = generalObject[key];
	}return generalObjectCopy;
}console.log(parametrs);
console.log(copyParametrs);

//_________________________________
const fruits = {
	apple:2,
	apricot:4,
	banana:10
};

const copyFruits = Object.assign({},fruits);

fruits.apple = 5;
fruits.apricot = 10;
fruits.banana = 17;

console.log(fruits);
console.log(copyFruits);

//_________________________________________________________
const cars = ["bmw","mercedes","audi"];
const copyCars = copyArr(cars);

cars[1] = "toyota";
	
function copyArr(someArr){
	const arr = [];

	for(let index in someArr){
		arr[index] = someArr[index];
	}
	return arr;
};console.log(arr)



//variant 1
function split(string){
    debugger
	let arr = [];
    let str = "";
	for(let i = 0;i < string.length;i++){
		if(string[i] == " " || string[i] == "," || string[i] == "-"){
			continue;
		}else{
				while(string[i] != " " && string[i] != "," && string[i] != "-" && string[i] != undefined){
                    str += string[i]
						i++;
				}
		 }arr.push(str);
          str = "";
		}return arr;
	  }console.log(split("abc def sc sdcc,,c sd--cd-sac"));

//variant 2
function split(string,seperator){
    debugger
	let arr = [];
    let str = "";
	for(let i = 0;i < string.length;i++){
		if(string[i] == seperator){
			continue;
		}else{
				while(string[i] != seperator && string[i] != undefined){
                    str += string[i]
						i++;
				}
		 }arr.push(str);
          str = "";
		}return arr;
	  }console.log(split("asfd asfa asf"," "));
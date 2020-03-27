const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';

function elegirTema(){
	document.getElementById("dropD").classList.toggle("show");
}

function light() {
	document.body.style.backgroundColor = '#fff4fd';

	// change style ICon to light 
	let imggifoslog = document.getElementById('imggifoslogId');
		imggifoslog.classList.add('imggifoslog');
		imggifoslog.classList.remove('imggifoslogDark');

	// change style to light 	
	let titleDayStyle = document.getElementsByClassName('titleDark');
	let buttonHeaderDayStyle = document.getElementsByClassName('buttonsHeaderDark');
	let buscarDayStyle = document.getElementsByClassName('buscarDark');
	let boxheaderDayStyle = document.getElementsByClassName('boxheaderDark');
	let dropdownDayStyle = document.getElementsByClassName('dropdownContentDark');
	let sailorDaybutton = document.getElementsByClassName('sailorDbuttonDark'); 
	let sailorNbuttonDayStyle = document.getElementsByClassName('sailorNbuttonDark');

		for (let i = 0; i < titleDayStyle.length; i++){
			titleDayStyle[i].classList.replace('titleDark', 'title');
		}
		for (let i = 0; i < buttonHeaderDayStyle.length; i++){
			buttonHeaderDayStyle[i].classList.replace('buttonsHeaderDark', 'buttonsHeader'); 
		}
		for(let i = 0; i < buscarDayStyle.length; i++){
			buscarDayStyle[i].classList.replace('buscarDark', 'buscar');
		}
		for(let i = 0; i < boxheaderDayStyle.length; i++){
			boxheaderDayStyle[i].classList.replace('boxheaderDark', 'boxheader');
		}		
		for(let i = 0; i < dropdownDayStyle.length; i++){
			dropdownDayStyle[i].classList.replace('dropdownContentDark', 'dropdownContent');
		}
		for(let i = 0; i < sailorDaybutton.length; i++){
			sailorDaybutton[i].classList.replace('sailorDbuttonDark', 'sailorDbutton');
		}
		for(let i = 0; i < sailorNbuttonDayStyle.length; i++){
			sailorNbuttonDayStyle[i].classList.replace('sailorNbuttonDark', 'sailorNbutton');
		}
}
/**
 * change style by DOM JS to Dark
 */ 
function dark(){
	document.body.style.backgroundColor = '#110038';

	let titleDarkStyle = document.getElementsByClassName('title');
	let iconsgifosDarkStyle = document.getElementsByClassName('imggifoslog');
	let buttonHeaderDarkStyle = document.getElementsByClassName('buttonsHeader');	
	let buscarDarkStyle	= document.getElementsByClassName('buscar');
	let boxheaderDarkStyle = document.getElementsByClassName('boxheader');
	let dropdownDarkStyle = document.getElementsByClassName('dropdownContent');
	let sailorDbuttonDarkStyle = document.getElementsByClassName('sailorDbutton');
	let sailorNbuttonDarkStyle = document.getElementsByClassName('sailorNbutton');
	
		for (let i = 0; i < titleDarkStyle.length; i++){
			titleDarkStyle[i].classList.replace('title', 'titleDark');
		}	
		for (let i = 0; i < iconsgifosDarkStyle.length; i++){
			iconsgifosDarkStyle[i].classList.replace('imggifoslog', 'imggifoslogDark');
		}		
		for (let i = 0; i < buttonHeaderDarkStyle.length; i++){
			buttonHeaderDarkStyle[i].classList.replace('buttonsHeader','buttonsHeaderDark');
		}
		for (let i = 0; i < buscarDarkStyle.length; i++){
			buscarDarkStyle[i].classList.replace('buscar', 'buscarDark');
		}
		for (let i = 0; i < boxheaderDarkStyle.length; i++){
			boxheaderDarkStyle[i].classList.replace('boxheader', 'boxheaderDark');
		}
		for (let i = 0; i < dropdownDarkStyle.length; i++){
			dropdownDarkStyle[i].classList.replace('dropdownContent', 'dropdownContentDark');
		}
		for (let i = 0; i < sailorDbuttonDarkStyle.length; i++){
			sailorDbuttonDarkStyle[i].classList.replace('sailorDbutton', 'sailorDbuttonDark');
		}
		for (let i = 0; i < sailorNbuttonDarkStyle.length; i++){
			sailorNbuttonDarkStyle[i].classList.replace('sailorNbutton', 'sailorNbuttonDark');
		}
}

function test() {
	let buttonHeaderDarkStyle = document.getElementsByClassName('buttonsHeader');

	for (let i = buttonHeaderDarkStyle.length -1; i => 0; i= buttonHeaderDarkStyle.length -1) {
		buttonHeaderDarkStyle[i].classList.replace('buttonsHeader','buttonsHeaderDark');
	}
}


// function onload width ramdom gits 
window.onload = () => {
	// let contenedor = document.getElementById("content");
	createBoxesWithGifts('http://api.giphy.com/v1/gifs/search?q= dog &api_key=' + apiKey, "content");
	createBoxesWithGifts('http://api.giphy.com/v1/gifs/search?q= cats &api_key=' + apiKey + "&limit=2", 'advice');
	createBoxesWithGifts('http://api.giphy.com/v1/gifs/search?q= vegeta &api_key=' + apiKey + "&limit=2", 'advice1');
	createBoxesWithGifts('http://api.giphy.com/v1/gifs/search?q= goku &api_key=' + apiKey + "&limit=2", 'advice2');
	createBoxesWithGifts('http://api.giphy.com/v1/gifs/search?q= broly &api_key=' + apiKey + "&limit=2", 'advice3');
}


// original funtion with the URL and Json 
function createBoxesWithGifts(url, contentId) {
	fetch(url)
		.then(response => {
			return response.json();
		})
		.then(dataList => {
			printGiftBoxes(dataList.data, contentId);
		return data;
		})
		.catch(error => {
 			return error;
 		});
}

function printGiftBoxes(listGift, contentId) {

	removeOldBoxes("dynamicGifts");

	let contenedor = document.getElementById(contentId);
	for (let i = 0; i < listGift.length -1; i++) {
		let div = document.createElement("img");
		div.className = "box"; 
		div.setAttribute("src",listGift[i].images.original.webp);
		contenedor.appendChild(div);
	}
}

function removeOldBoxes(parentClass) {
	const myNode = document.getElementById(parentClass);
  	myNode.innerHTML = '';
}

// function to look up the gits from the search input 
function searchGif() {
	let searchText = document.getElementById("inputSearch").value;
	createBoxesWithGifts(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=` + apiKey, "dynamicGifts");

	changeText();

	adviceNewBoxes();

	historySearch(); 


}

function changeText(){
	var x = document.getElementById("inputSearch").value;
	document.getElementById("sugText").innerHTML = x;
}


function historySearch(){ 
	//toma el valor de input
		let textInp = document.getElementById("inputSearch").value;
	// crea el boton 
		var newButton = document.createElement("BUTTON");  
	//da nombre al nuevo boton 
	//cambiar parte para evitar que todos los botones tengan el mismo id 
		newButton.setAttribute("id", "button1");
		newButton.innerHTML = "#" + textInp;
	//inprime el nuevo boton 
		newButton.setAttribute("class", "sugbuttons")
		document.getElementById("historyBox").appendChild(newButton);
	}

document.getElementById('inputSearch').addEventListener('keypress', paintButton);

function paintButton(){
	document.getElementById('searchGifbtn').style.background = '#F7C9F3';
	document.getElementById('searchGifbtn').style.color = ' #110038';
}



////creado nuevo div para sugerencias 

function adviceNewBoxes(){
	document.getElementById("adviceNewBoxes").style.display = "grid";
}

////Menu de sugerencias 
document.getElementById('inputSearch').addEventListener("keypress", sight);

function sight(){
			document.getElementById('despMenu1').style.display = 'grid';	
}



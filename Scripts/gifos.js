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
	let searchDayStayle = document.getElementsByClassName('searchDark')

/*
		for (let i = 0; i < ........lenght; i ++){
			titleDayStyle[i].classList.replace('titleDark', 'title');
			buttonHeaderDayStyle[i].classList.replace('buttonsHeaderDark', 'buttonsHeader'); 

		}

*/
	
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
		for(let i = 0; i < searchDayStayle.length; i++){
			searchDayStayle[i].classList.replace('searchDark', 'search');
	
		}
}
//change style to dark 
function dark(){
	document.body.style.backgroundColor = '#110038';

	let titleDarkStyle = document.getElementsByClassName('title');
	let iconsgifosDarkStyle = document.getElementsByClassName('imggifoslog');
	let buttonHeaderDarkStyle = document.querySelectorAll('.buttonsHeader');	
	let buscarDarkStyle	= document.getElementsByClassName('buscar');
	let boxheaderDarkStyle = document.getElementsByClassName('boxheader');
	let dropdownDarkStyle = document.getElementsByClassName('dropdownContent');
	let sailorDbuttonDarkStyle = document.getElementsByClassName('sailorDbutton');
	let sailorNbuttonDarkStyle = document.getElementsByClassName('sailorNbutton');
	let searchDarkStyle = document.getElementsByClassName('search');
	
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
		for(let i = 0; i < searchDarkStyle.length; i++){
			searchDarkStyle[i].classList.replace('search', 'searchDark');
		}
}


window.onload = () => {
	printTendencyGifs();

	createBoxesWithGifts(`https://api.giphy.com/v1/gifs/search?q= fiercedom honey &limit=2 &api_key=${apiKey}`, 'advice');
	createBoxesWithGifts(`https://api.giphy.com/v1/gifs/search?q= sailor moon peace &limit=2&api_key=${apiKey}`, 'advice1');
	createBoxesWithGifts(`https://api.giphy.com/v1/gifs/search?q= hi5 &limit=2 &api_key=${apiKey}`, 'advice2');
	createBoxesWithGifts(`https://api.giphy.com/v1/gifs/search?q= unicorn &limit=2 &api_key=${apiKey}`, 'advice3');
}

// funtion for tnedency gifs and hover title
let container = document.getElementById('content');	
function printTendencyGifs(){
	
	fetch(`https://api.giphy.com/v1/gifs/trending?&limit=12&api_key=${apiKey}`)
	.then((response) => {
		return response.json();
	})
	.then((JSON) => {   

		for(var i = 0; i < 12; i++){

			let father = document.createElement('div');
			father.className = 'papa';
			container.appendChild(father);
		  
			let box = document.createElement('img');
			box.className = 'box';
			box.setAttribute('src',JSON.data[i].images.original.webp);
			father.appendChild(box);

			let div = document.createElement('div');
			div.className = 'titlehov';
			father.appendChild(div);

			let titleG = document.createElement('p');
			titleG.innerHTML = '#' + JSON.data[i].title;
			div.appendChild(titleG);

		}
	});
}

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

function printGiftBoxes(listGif, contentId) {

	removeOldBoxes("dynamicGifts");

	let contenedor = document.getElementById(contentId);
	for (let i = 0; i < listGif.length -1; i++) {

		let div = document.createElement("img");

		div.className = "box"; 
		div.setAttribute("src",listGif[i].images.original.webp);
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
	let container = document.getElementById('dynamicGifts');

	fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=` + apiKey)
		.then((response) => {
		return response.json();
	})
	.then((JSON) => {   
		removeOldBoxes("dynamicGifts");
		for(var i = 0; i < 12; i++){

			let father = document.createElement('div');
			father.className = 'papa';
			container.appendChild(father);
		  
			let box = document.createElement('img');
			box.className = 'box';
			box.setAttribute('src',JSON.data[i].images.original.webp);
			father.appendChild(box);

			let div = document.createElement('div');
			div.className = 'titlehov';
			father.appendChild(div);

			let titleG = document.createElement('p');
			titleG.innerHTML = '#' + JSON.data[i].title;
			div.appendChild(titleG);

		}
	});
	
	changeText();
	adviceNewBoxes();
	historySearch(); 

	document.getElementById('despMenu1').style.display = 'none';

	removeOldBoxes();

}
// change the text on the sugestiolns box 
function changeText(){
	var x = document.getElementById("inputSearch").value;
	document.getElementById("sugText").innerHTML = x;
}
// ad the new blued boxes with the history 
function historySearch(){ 
	//take the input value 
	let textInp = document.getElementById("inputSearch").value;
	// created new botton 
	var newButton = document.createElement("BUTTON");  
	//set id for the new botton  
	//set new id for botton, ++1  
	newButton.setAttribute("id", "button1");
	newButton.innerHTML = "#" + textInp;
	//inprime el nuevo boton 
	newButton.setAttribute("class", "sugbuttons")
	document.getElementById("historyBox").appendChild(newButton);
}

////funtion to show the autocomplete Menu 
document.getElementById('inputSearch').addEventListener('keypress', paintButton);
document.getElementById('inputSearch').addEventListener("keypress", sight);
function sight(){
	document.getElementById('despMenu1').style.display = 'grid';	
}

// function to auto-complete  
function paintButton(){
	document.getElementById('searchGifbtn').style.background = '#F7C9F3';
	document.getElementById('searchGifbtn').style.color = ' #110038';
	

	let searchValue = document.getElementById('inputSearch').value;
	fetch(`https://api.giphy.com/v1/tags/related/${searchValue}?api_key=InPSloMgOZvkGaz56pe7fI8SIsp0PDlW`)
  		.then((response) => {
    		return response.json();
  		})
  		.then((JSON) => {
			let BtnSearch = document.getElementById('BtnSearch');
			let Btn1Search = document.getElementById('Btn1Search');
			let Btn2Search = document.getElementById('Btn2Search');
				BtnSearch.innerHTML = JSON.data[0].name; 
				Btn1Search.innerHTML = JSON.data[1].name;
				Btn2Search.innerHTML = JSON.data[2].name;

		  });
}
 //btn sugestions 
document.getElementById('BtnSearch').onclick = function (){
	let sug = document.getElementById('BtnSearch').innerHTML;
	document.getElementById('inputSearch').value  = sug;
}
document.getElementById('Btn1Search').onclick = function (){
	let sug = document.getElementById('Btn1Search').innerHTML;
	document.getElementById('inputSearch').value = sug;
}
document.getElementById('Btn2Search').onclick = function (){
	let sug = document.getElementById('Btn2Search').innerHTML; 
	document.getElementById('inputSearch').value = sug;
}

//function VER MAS... buttons 
document.getElementById('firstbtn').onclick = function (){
	btnVerMas(`https://api.giphy.com/v1/gifs/search?q= Jonathan&api_key=${apiKey}`);
}
document.getElementById('secondBtn').onclick = function (){
	btnVerMas(`https://api.giphy.com/v1/gifs/search?q= sailor moon&api_key=${apiKey}`);
}
document.getElementById('thirdbtn').onclick = function (){
	btnVerMas(`https://api.giphy.com/v1/gifs/search?q= fab5 &api_key=${apiKey}`);
}
document.getElementById('fourthbtn').onclick = function(){
	btnVerMas(`https://api.giphy.com/v1/gifs/search?q= unicorns&api_key=${apiKey}`);
}

// funtion to print the new boxes with the gifs from the VER MAS Bottons
function btnVerMas(url){
	let container = document.getElementById('dynamicGifts');
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((JSON) => {   
			removeOldBoxes("dynamicGifts");
			for(var i = 0; i < 12; i++){

				let father = document.createElement('div');
				father.className = 'papa';
				container.appendChild(father);
			
				let box = document.createElement('img');
				box.className = 'box';
				box.setAttribute('src',JSON.data[i].images.original.webp);
				father.appendChild(box);

				let div = document.createElement('div');
				div.className = 'titlehov';
				father.appendChild(div);

				let titleG = document.createElement('p');
				titleG.innerHTML = '#' + JSON.data[i].title;
				div.appendChild(titleG);

			}
		});
	pageScroll()
}

function pageScroll(){
	window.scrollBy(0, -window.innerHeight);
	
}

////creado nuevo div para sugerencias 
function adviceNewBoxes(){
	document.getElementById("adviceNewBoxes").style.display = "grid";
}

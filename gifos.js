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

//functions gids 

//created automatically the new boxes 
window.onload = () => {
	let contenedor = document.getElementById("content");
	for (let i = 0; i < 20; i++) {
		let gato = fetch('http://api.giphy.com/v1/gifs/search?q=' + '&api_key=InPSloMgOZvkGaz56pe7fI8SIsp0PDlW')
		.then(response => {
			return response.json();x
		})
		.then(data => {
			console.log(data);
		return data;
		})
		.catch(error => {
 			return error;
 		});
	

		let div = document.createElement("div");
		div.className = "box";
		contenedor.appendChild(div);
	
	}
}

function searchGif(searchGif) {
	const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + searchGif + '&api_key=InPSloMgOZvkGaz56pe7fI8SIsp0PDlW')
		.then(response => {
			return response.json();
		})
		.then(data => {
				console.log(data);
			return data;
			
		})
		.catch(error => {
			return error;
		});
	return found;
	}

	

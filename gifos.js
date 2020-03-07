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

		for (let i = 0; i < titleDayStyle.length; i++){
			titleDayStyle[i].classList.replace('titleDark', 'title');
		}

		for (let i = 0; i < buttonHeaderDayStyle.length; i++){
			buttonHeaderDayStyle[i].classList.replace('buttonsHeaderDark', 'buttonsHeader'); 
		}

		for(let i = 0; i < buscarDayStyle.length; i++){
			buscarDayStyle[i].classList.replace('buscarDark', 'buscar');
		}

		for(var i = 0; i < boxheaderDayStyle.length; i++){
			boxheaderDayStyle[i].classList.replace('boxheaderDark', 'boxheader');
		}		
	
}


// change style by DOM JS to Dark 
function dark(){
	document.body.style.backgroundColor = '#110038';
	
	let titleDarkStyle = document.getElementsByClassName('title');
	let iconsgifosDarkStyle = document.getElementsByClassName('imggifoslog');
	let buttonHeaderDarkStyle = document.getElementsByClassName('buttonsHeader');	
	let buscarDarkStyle	= document.getElementsByClassName('buscar');
	let boxheaderDarkStyle = document.getElementsByClassName('boxheader');
	
		for (let i = 0; i < titleDarkStyle.length; i++){
			titleDarkStyle[i].classList.replace('title', 'titleDark')
		}	
	
		for (let i = 0; i < iconsgifosDarkStyle.length; i++){
			iconsgifosDarkStyle[i].classList.replace('imggifoslog', 'imggifoslogDark');
		}
		
		for (let i = 0; i < buttonHeaderDarkStyle.length; i++){
			buttonHeaderDarkStyle[i].classList.replace('buttonsHeader','buttonsHeaderDark');
		}

		for (let i = 0; i < buscarDarkStyle.length; i++){
			buscarDarkStyle[i].classList.replace('buscar', 'buscarDark')
		}

		for (let i = 0; i < boxheaderDarkStyle.length; i++){
			boxheaderDarkStyle[i].classList.replace('boxheader', 'boxheaderDark')
		}
}


	// setattribute
	// toggle


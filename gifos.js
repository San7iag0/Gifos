const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';

function elegirTema(){
	document.getElementById("dropD").classList.toggle("show");
}


function light() {
	document.body.style.backgroundColor = '#fff4fd';

//	let iconsgifosStyle = document.getElementsByClassName('imggifoslog');

		//for(let i = 0; i < iconsgifosStyle.length; i++){
		//	iconsgifosStyle[i].classList.replace('imggifoslogDark', 'imggifoslog');
		//}

	let imggifoslog = document.getElementById('imggifoslogId');
	//iconsgifosStyle.classList.toggle('imggifoslogDark');
	imggifoslog.classList.add('imggifoslog');
	imggifoslog.classList.remove('imggifoslogDark')

	
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


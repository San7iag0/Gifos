const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';

function elegirTema(){
	document.getElementById("dropD").classList.toggle("show");
}


function light() {
	document.body.style.backgroundColor = '#fff4fd';


	
	

}


// background: #EE3EFE;


function dark(){
	document.body.style.backgroundColor = '#110038';
	
	var ttd = document.getElementsByClassName('title');
	var icons = document.getElementsByClassName('imggifoslog');
	var bsh = document.getElementsByClassName('buttonsHeader');
	
	var bsd	= document.getElementsByClassName('buscar');
	
		for (let i = 0; i < ttd.length; i++){
			ttd[i].classList.replace('title', 'titleDark')
		}	
	
		for (let i = 0; i < icons.length; i++){
			icons[i].classList.replace('imggifoslog', 'imggifoslogDark');
		}
		
		for (let i = 0; i < bsh.length; i++){
			bsh[i].classList.replace('buttonsHeader','buttonsHeaderDark');
		}

		

		for (let i = 0; i < bsd.length; i++){
			bsd[i].classList.replace('buscar', 'buscarDark')
		}


		
	
	// var titleDark = document.getElementById('title');
	// 	titleDark.classList.toggle('titleDark');
	}


	// setattribute
	// toggle


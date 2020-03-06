const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';

function elegirTema(){
	document.getElementById("dropD").classList.toggle("show");
}


function light() {
	document.body.style.backgroundColor = '#fff4fd';

	
}


    // image 
    // var x = document.getElementsByClassName('boxheader');
	// for(var i = 0; i < x.length; i++){
	// 	x[i].style.boxheader;
	// }

// background: #EE3EFE;


function dark(){
	document.body.style.backgroundColor = '#110038';
	
	var night = document.getElementsByClassName('buttonsHeader');
		for (let i = 0; i < night.length; i++){
			night[i].classList.replace('buttonsHeader','buttonsHeaderDark');

		}
	
	var titleDark = document.getElementById('title');
		titleDark.classList.toggle('titleDark');
	}


	// setattribute
	// toggle


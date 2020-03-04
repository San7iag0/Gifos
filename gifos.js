const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';

function elegirTema(){
	document.getElementById("dropD").classList.toggle("show");
}
function light() {
	document.body.style.backgroundColor = '#fff4fd';



	//logo
	document.getElementsByClassName('logoImg').className = 'logoImgDark1';
}


    // image 
    // var x = document.getElementsByClassName('boxheader');
	// for(var i = 0; i < x.length; i++){
	// 	x[i].style.boxheader;
	// }

// background: #EE3EFE;


function dark(){
	document.body.style.backgroundColor = '#110038';
	
	
	var dark = document.getElementById('buttonDropD');
	dark.getElementsByClassName('buttonsHeader')[5].style.backgroundColor = '#EE3EFE';
	}
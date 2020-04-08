var recorder;
const video = document.getElementById('video');

document.querySelector('#comenzarGifo').onclick = function (){

	comenzarGifo()
}

function comenzarGifo(){
	document.querySelector('.crearGifos').style.display = 'none';
	document.querySelector('.misGifos').style.display = 'none';
	document.querySelector('.misGifosBox').style.display = 'none';
	document.querySelector('.btnlisto').style.display = 'none';
	document.querySelector('.recording').style.display = 'none';
	
	document.querySelector('.videoParent').style.display = 'grid';

	//function to start the streaming 
	navigator.mediaDevices.getUserMedia({
		audio:false,
		video:{
			height:{ max: 434}
	
		}
	}).then(function(stream){
		video.srcObject = stream;
		video.play()
	}).catch(console.error);
	
}

function capturar(){
	document.querySelector('.btnlisto').style.display = 'grid';
	document.querySelector('#btncapturar').style.display = 'none';
	document.querySelector('.camera').style.display = 'none';
	document.querySelector('.recording').style.display = 'grid';

	document.querySelector('.titleV').innerHTML = 'Capturando Tu Guifo';

}


document.getElementById('comenzarGifo').onclick = function (){
	document.querySelector('.crearGifos').style.display = 'none';
	document.querySelector('.misGifos').style.display = 'none';
	document.querySelector('.misGifosBox').style.display = 'none';
	document.querySelector('.btnlisto').style.display = 'none';
	document.querySelector('.recording').style.display = 'none';
	
	document.querySelector('.videoParent').style.display = 'grid';
}



const video = document.getElementById('video');

function capturar(){
	document.querySelector('.btnlisto').style.display = 'grid';
	document.querySelector('.btncapturar').style.display = 'none';
	document.querySelector('.camera').style.display = 'none';
	document.querySelector('.recording').style.display = 'grid';

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
	
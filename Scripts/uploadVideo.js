
document.getElementById('comenzarGifo').onclick = function (){
	document.querySelector('.crearGifos').style.display = 'none';
	document.querySelector('.misGifos').style.display = 'none';
	document.querySelector('.misGifosBox').style.display = 'none';
	
	document.querySelector('.videoParent').style.display = 'grid';
}

const video = document.getElementById('video');

function capturar(){
	navigator.mediaDevices.getUserMedia({
			audio:false,
			video:true
		}).then(function(stream){
			video.srcObject = stream;
			video.play()
		}).catch(console.error);
}
	
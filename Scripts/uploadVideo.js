
document.getElementById('comenzarGifo').onclick = function (){
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
	// navigator.mediaDevices.getUserMedia({ 
	// 	video: true,
	// 	Audio: false
	// }).then(function(camera) {
	// 	callback(camera);
	// }).catch(function(error) {
	// 	alert('Unable to capture.');
	// 	console.error(error);
	// });
}

const video = document.getElementById('video');

function capturar(){
	document.querySelector('.btnlisto').style.display = 'grid';
	document.querySelector('.btncapturar').style.display = 'none';
	document.querySelector('.camera').style.display = 'none';
	document.querySelector('.recording').style.display = 'grid';

	document.querySelector('.titleV').innerHTML = 'Capturando Tu Guifo';
	
}

document.getElementById('btnlisto').onclick = function (){
	stopRecording();
}


function stopRecording(){
	document.querySelector('.titleV').innerHTML = 'Vista previa';
	Image.src = URL.created.createObjectURL(recorder.getBlob());
	recorder.camera.stop();
}
	
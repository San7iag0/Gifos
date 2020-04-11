var recorder;
var image = document.querySelector('#videoimg');
//const video = document.getElementById('video');

// functions to change stiles 
//boton comenzar 
function comenzarGifo(){
	document.querySelector('.crearGifos').style.display = 'none';
	document.querySelector('.misGifos').style.display = 'none';
	document.querySelector('.misGifosBox').style.display = 'none';
	document.querySelector('.btnStop').style.display = 'none';
	document.querySelector('.recording').style.display = 'none';
	
	document.querySelector('.videoParent').style.display = 'grid';
}

function capturar(){
	document.querySelector('.btnStop').style.display = 'grid';
	document.querySelector('#btnStart').style.display = 'none';
	document.querySelector('.camera').style.display = 'none';
	document.querySelector('.recording').style.display = 'grid';

	document.querySelector('.titleV').innerHTML = 'Capturando Tu Guifo';
}

// buttons 
document.querySelector('#comenzarGifo').onclick = function (){

	comenzarGifo(); // cambio de estilos DOM 
	captureCamera();  // vista previa 
	
}
//btn capturar 
document.querySelector('#btnStart').onclick = function (){
	//capturar();
	recordingGif();
}
//boton listo
document.querySelector('.btnStop').onclick = function (){

	stopRecording();
}

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ 
            video: true,
        }).then(function(camera) {
		callback(camera);
		//image.srcObject = camera;
		//image.onplay();

    }).catch(console.error);
            
    //console.log('unable to capture');
    
	// .catch(function(error) {
    //     alert('Unable to capture.');
    //     console.error(error);
    // });
}

var recorder; 
function recordingGif() {
    this.disabled = true;
    captureCamera(function(camera) {
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
			hidden: 240,
			
            onGifPreview: function(gifURL) {
                image.src = gifURL;
            }
        });

		recorder.startRecording(); 
		      
        recorder.camera = camera;
		
		document.getElementById('btnStop').disabled = false;
    });
}

function stopRecordingCallback() {
    image.src = URL.createObjectURL(recorder.getBlob());
    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}

function stopRecording() {
    this.disabled = true;
	recorder.stopRecording(stopRecordingCallback);	
};
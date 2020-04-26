var recorder;
const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';
const image = document.querySelector('#videoimg');
const video = document.querySelector('.video');

setUp();

function setUp() {
  printMyGifs();
}
// functions to change stiles 
//boton comenzar 
function comenzarGifo(){
	document.querySelector('.crearGifos').style.display = 'none';
	document.querySelector('.misGifos').style.display = 'none';
	document.getElementById('misGifosBox').style.display = 'none';
	document.querySelector('.btnStop').style.display = 'none';
	document.querySelector('.recording').style.display = 'none';
    document.querySelector('.videoParent').style.display = 'grid';
    document.getElementById('repetir').style.display = 'none';
    document.getElementById('subirG').style.display = 'none';
    document.getElementById('btn_Cancelar_gif').style.display = 'none';
}

document.getElementById('comenzarGifo').onclick = function (){

    comenzarGifo(); // cambio de estilos DOM 
    checkVideo();
}

function capturar(){
	document.querySelector('.btnStop').style.display = 'grid';
	document.querySelector('#btnStart').style.display = 'none';
	document.querySelector('.camera').style.display = 'none';
	document.querySelector('.recording').style.display = 'grid';
    document.getElementById('btn_Cancelar_gif').style.display = 'none';
    document.querySelector('.titleV').innerHTML = 'Capturando Tu Guifo';
    document.querySelector('.video').style.display = 'none';
}

//btn capturar 
document.getElementById('btnStart').onclick = function (){
    capturar();
    recordingGif();   

    checkVideoStop();
}
//boton listo
document.querySelector('.btnStop').onclick = function (){

    document.getElementById('btnStart').style.display ='none';
    document.getElementById('repetir').style.display = 'grid';
    document.getElementById('subirG').style.display = 'grid';
    document.querySelector('.btnStop').style.display = 'none';
    document.querySelector('.recording').style.display = 'none';
    document.getElementById('btn_Cancelar_gif').style.display = 'none';

    stopRecording();
    
}

document.getElementById('repetir').onclick = function (){
    
    document.getElementById('repetir').style.display = 'none';
    document.getElementById('subirG').style.display = 'none';
    document.querySelector('.btnStop').style. display = 'grid';
    document.querySelector('.recording').style.display = 'grid';

    recordingGif();
}
// subir gifos btn
document.getElementById('subirG').onclick = function(){
    document.getElementById('btn_Cancelar_gif').style.display = 'grid';    
    document.getElementById('repetir').style.display = 'none';
    document.getElementById('subirG').style.display = 'none';
    document.querySelector('.videoParent').style.display = 'none';
    document.querySelector('.mainupload').style.display = 'grid';

    image.style.display = 'none';
    document.querySelector('.subiendo').style.display = 'grid';

}

function printMyGifs (){

  if (localStorage.getItem("keyGiffURL")) {
    let giftlist = localStorage.getItem("keyGiffURL").split(",");
    let misGifosBox = document.getElementById('misGifosBox');
    let preview = document.getElementById('videoCaptura');
      
    for (var i = 0; i < giftlist.length; i++) {
      if (giftlist[i] !== "null") {      
        let box = document.createElement('img');
        box.className = 'box';
        box.setAttribute('src', giftlist[i]);
        misGifosBox.appendChild(box);
      }
    }
  }
}

document.getElementById('btnListo2').onclick = function (){
  location.reload();
  // vamos a agregar los gifos nuevos desde aca 
}

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}
var recorder; 
function recordingGif() {
    this.disabled = true;
    captureCamera(cameraCallback);
}

let cameraCallback = function(camera) {
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
    
    document.getElementById('btnStart').display = "none";
}

function stopRecordingCallback() {
    // the giff URL
    let giffURL = URL.createObjectURL(recorder.getBlob());
    // sets the giff url to the video preview
    image.src = giffURL;

    //local storage
    // gets the list of giffs from localstorege
    let giffURLs = localStorage.getItem("keyGiffURL");
    // adds the giff URL into the localstorage list
    localStorage.setItem("keyGiffURL", `${giffURLs},${giffURL}`);

    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}

function stopRecording() {
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);	
};

function checkVideo(){
    videoCheck = navigator.mediaDevices.getUserMedia({
		audio:false,
		video:true
	}).then(function(stream){
		video.srcObject = stream;
		video.play()
	}).catch(console.error);
}

function checkVideoStop(){
    const video = document.querySelector('.video');
    const mediaStream = video.srcObject;
    const track = mediaStream.getTracks();
    track[0].stop();
}




/**let urlgifo;
let requestOptions = {
  method: "POST",
  body: formData,
  redirect: "follow"
};

async function uploadGif(){
  this.disabled = true;
  await fetch("https://upload.giphy.com/v1/gifs?api_key=" + apiKey,
  requestOptions)
} */


var recorder;
const apiKey = 'InPSloMgOZvkGaz56pe7fI8SIsp0PDlW';
const image = document.querySelector('#videoimg');
const video = document.querySelector('.video');
const GIF_TEMP_VIDEO = 'giftempvideo';
const KEY_GIFF_URL = 'keyGiffURL';

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
    
    // TODO: CAMBIO DE DOM PARA MOSTRAR EL DISPLAY DE videoParent
    document.querySelector('.videoParent').style.display = 'grid'
    
    // 



    image.style.display = 'none';
    document.querySelector('.subiendo').style.display = 'grid';

    postGiffIntoGiphy(blobTest);

}


async function postGiffIntoGiphy(blob) {
    let form = new FormData();

    form.append('file', blob, 'myGif.gif');
    console.log(form.get('file'));

    let requestOptions = {
        method: "POST",
        body: form,
        redirect: "follow"
    }


    await fetch(`https://upload.giphy.com/v1/gifs?api_key=${apiKey}`, requestOptions)
        .then(response => response.json())
        .then(response => {
            let id = response.data.id;
            getGifById(id);

        });
//https://api.giphy.com/v1/gifs/SuyAWpGxP69BcTPQ5g?api_key=InPSloMgOZvkGaz56pe7fI8SIsp0PDlW
//{"data":{"id":"SuyAWpGxP69BcTPQ5g"},"meta":{"msg":"OK","status":200}}
}

// leturlGif;
async function getGifById(id){
    await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => {
        let preview = document.getElementById('videoCaptura');
        preview.setAttribute('src', response.data.images.original.url);

        // TODO: mostrar la ventana de el gif funcionando 
        document.querySelector('.videoParent').style.display = 'none';
        document.querySelector('.mainupload').style.display = 'grid';

        localStorage.setItem(GIF_TEMP_VIDEO, response.data.images.original.url);
        inputClickboard.value = response.data.images.original.url;
        inputClickboard.select();
        document.execCommand("copy");    
        clickBoard(inputClickboard);
        inputClickboard.value =  "";


    })
}
// function to copy the gif 
function clickBoard(inputClickboard){
    var inputClickboard = document.getElementById('inputClipboard');
    
}
// let input = document.getElementById('inputClipboard');

document.getElementById('enlaceCapturabtn').onclick = function(){
 
    clickBoard(inputClickboard);
}


function printMyGifs (){

  if (localStorage.getItem(KEY_GIFF_URL)) {
    let giftlist = localStorage.getItem(KEY_GIFF_URL).split(",");
    let misGifosBox = document.getElementById('misGifosBox');
      
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
    //local storage
    // gets the list of giffs from localstorege
    let listGiffURLs = localStorage.getItem(KEY_GIFF_URL);
    let gifyUrl =  localStorage.getItem(GIF_TEMP_VIDEO);
    // adds the giff URL into the localstorage list
    localStorage.setItem(KEY_GIFF_URL, `${listGiffURLs},${gifyUrl}`);

    location.reload();
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
let blobTest;
function stopRecordingCallback() {
    // the giff URL
    let giffURL = URL.createObjectURL(recorder.getBlob());
    // sets the giff url to the video preview
    image.src = giffURL;
    blobTest = recorder.getBlob();

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

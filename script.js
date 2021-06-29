let mic = document.querySelector('.bot-mic-circle') 
let wave = document.querySelector('.bot-mic-wave')
navigator.mediaDevices.getUserMedia({ audio: true, video: false })
.then(function(stream) {

    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaStreamSource(stream)
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.8
    audioSource.connect(analyser)


    const volumes = new Uint8Array(analyser.frequencyBinCount)
    const volumeCallBack = ()=>{
        analyser.getByteFrequencyData(volumes);
        let volumeSum = 0;
        for(const volume of volumes){
            volumeSum +=volume
        }
        const averageVolume = volumeSum/volumes.length
        volumeIndicator(averageVolume)
    }

    setInterval(volumeCallBack,10)

  })
  .catch(function(err) {
    /* handle the error */
});


function volumeIndicator(volume){

    // You will get the volume in decibles 
    
    let scale = volume/25;

    wave.style.webkitTransform = `scale(${scale},${scale})`


}


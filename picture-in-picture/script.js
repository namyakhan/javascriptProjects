const videoTag = document.querySelector('#video');
const startButton = document.querySelector('#start-btn');
const shareButton = document.querySelector('#share-btn');

// Select media stream and play video
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoTag.srcObject = mediaStream;
    videoTag.onloadedmetadata = () => {
      videoTag.play();
    };
    shareButton.classList.add('hide');
    startButton.classList.remove('hide');
  } catch (error) {
    console.log('ERR: ', error);
  }
}

// Share screen to start picture in picture
shareButton.addEventListener('click', async () => {
  selectMediaStream();
});

startButton.addEventListener('click', async () => {
  startButton.disabled = true;
  // Start picture in picture
  await videoTag.requestPictureInPicture();
  startButton.disabled = false;
  shareButton.classList.remove('hide');
  startButton.classList.add('hide');
});

const qrCodeWrapper = document.getElementById('qrcode-wrapper');
const generateQrBtn = document.getElementById('generate-qr-action');
const generateQrImg = document.getElementById('generate-qr-img');
const scannerQrBtn = document.getElementById('scanner-qr-action');

const generateQrContainer = document.getElementById('generate-qr-container');
const scannerQrContainer = document.getElementById('scanner-qr-container');
const scannerCamera = document.getElementById('scanner-camera');
const generateInput = document.getElementById('generate-input');
const scanner = document.getElementById('scanner');
const scanResult = document.querySelector('#scan-result h2');

const chooseAction = () => {
    // generateQrContainer.classList.add('hidden');
    // scannerQrContainer.classList.add('hidden');
    
    qrCodeWrapper.addEventListener('click', (e) => {
        // console.log(e.target.dataset.action)
        if(e.target.dataset.action == 'generate'){
            generateQrContainer.classList.remove('hidden');
            scannerQrContainer.classList.add('hidden');
            generateInput.value = '';
            generateQrImg.removeAttribute('src');
            generateQrImg.classList.add('hidden');
            // scanner.innerHTML = '';
            // scanResult.innerText = '';
           
        }else if(e.target.dataset.action == 'scanner'){
            document.createElement('div')
            scannerQrContainer.classList.remove('hidden');
            generateQrContainer.classList.add('hidden');
        }
    });
}

chooseAction();
export { chooseAction };
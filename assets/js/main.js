const qrCodeWrapper = document.getElementById('qrcode-wrapper');
const generateQrBtn = document.getElementById('generate-qr-action');
const scannerQrBtn = document.getElementById('scanner-qr-action');

const generateQrContainer = document.getElementById('generate-qr-container');
const scannerQrContainer = document.getElementById('scanner-qr-container');
const scannerCamera = document.getElementById('scanner-camera');
const generateInput = document.getElementById('generate-input');

const chooseAction = () => {
    // generateQrContainer.classList.add('hidden');
    // scannerQrContainer.classList.add('hidden');
    
    qrCodeWrapper.addEventListener('click', (e) => {
        // console.log(e.target.dataset.action)
        if(e.target.dataset.action == 'generate'){
            generateQrContainer.classList.remove('hidden');
            if(!scannerQrContainer.classList.contains('hidden')) {
                scannerQrContainer.classList.add('hidden');
            } 
        }else if(e.target.dataset.action == 'scanner'){
            document.createElement('div')
            scannerQrContainer.classList.remove('hidden');
            if(!generateQrContainer.classList.contains('hidden')) {
                generateQrContainer.classList.add('hidden');
            } 
            clearActions();
        }
    });
}

const clearActions = () => {
    generateInput.value = '';
}

chooseAction();
export { chooseAction };
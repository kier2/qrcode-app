const chooseAction = () => {
    const qrCodeWrapper = document.getElementById('qrcode-wrapper');
    const generateQrBtn = document.getElementById('generate-qr-action');
    const scannerQrBtn = document.getElementById('scanner-qr-action');

    const generateQrContainer = document.getElementById('generate-qr-container');
    const scannerQrContainer = document.getElementById('scanner-qr-container');
    const scannerCamera = document.getElementById('scanner-camera');
    // generateQrContainer.classList.add('hidden');
    // scannerQrContainer.classList.add('hidden');
    
    qrCodeWrapper.addEventListener('click', (e) => {
        console.log(e.target.dataset.action)

        if(e.target.dataset.action == 'generate'){
            generateQrContainer.classList.remove('hidden');
        }else if(e.target.dataset.action == 'scanner'){
            document.createElement('div')
            scannerQrContainer.classList.remove('hidden');
        }
    });

    
}

chooseAction();
export { chooseAction };
import QRCode from 'qrcode';

const generateQR = async (text) => {
    try{
        const imgPlaceholder = document.getElementById('generate-qr-placeholder');
        const qrImg = document.getElementById('generate-qr-img');
        const qrImgSrc = await QRCode.toDataURL(text);

        qrImg.classList.remove('hidden')
        downloadQrCode(qrImgSrc)
        qrImg.setAttribute('src', qrImgSrc);
        console.log()
        imgPlaceholder.classList.add('hidden');
    } catch (err){
        console.error(err);
    }
}

const downloadQrCode = (path) => {
    const downloadQr = document.getElementById('download-qr');

    downloadQr.classList.remove('hidden')
    downloadQr.setAttribute('href', path);
    downloadQr.setAttribute('download', 'download');
} 

const generateInput = document.getElementById('generate-input');

document.getElementById('generate-qr-btn').addEventListener('click', () => {
    (generateInput.value !== '') ? generateQR(generateInput.value) : alert("Input can't be empty!");
});

export { generateQR };
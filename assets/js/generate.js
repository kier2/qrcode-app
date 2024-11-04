import QRCode from 'qrcode';

const generateQR = async (text) => {
    try{
        const imgPlaceholder = document.getElementById('generate-qr-placeholder');
        const qrImg = document.getElementById('generate-qr-img');
        const qrImgSrc = await QRCode.toDataURL(text);

        qrImg.setAttribute('src', qrImgSrc);
        imgPlaceholder.classList.add('hidden');
    } catch (err){
        console.error(err);
    }
}

const generateInput = document.getElementById('generate-input');

document.getElementById('generate-qr-btn').addEventListener('click', () => {
    generateQR(generateInput.value);
});


export { generateQR };
import { Html5Qrcode } from "html5-qrcode";

const startScanning = () => {
    const html5Qrcode = new Html5Qrcode("scanner");

    const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    };

    const scannerClass = ['w-[250px]', 'h-[250px]'];
    document.getElementById('scanner').classList.add(...scannerClass);

    html5Qrcode.start(
        { facingMode: "environment" },
        config,
        (decodedText, decodeResult) => {
            console.log(`Decoded text: ${decodedText}`);
            document.getElementById('scanResult').innerText = `Scanned: ${decodedText}`;
            html5Qrcode.stop();
        },
        (errorMessage) => {
            console.error(`QR Code scan error: ${errorMessage}`);
        }).catch(err => {
            console.error(`Unable to start scanning: ${err}`);
    });
}

const handleFileUpload = (event) => {
    // console.log(event.target.files[0])
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imgSrc = e.target.result;
            decodeQRCodeFromImage(file);
            // console.log(e.target.result);
        };

        reader.readAsDataURL(file);
    } else {
        console.error("No file selected.");
    }
}

const decodeQRCodeFromImage = (imgSrc) => {
    const html5QrCode = new Html5Qrcode("scanner");
    html5QrCode.scanFile(imgSrc)
        .then(decodedText => {
            console.log(`Decoded text: ${decodedText}`);
            document.querySelector('#scan-result h2').innerText = `Scanned Result: ${decodedText}`;
        })
        .catch(err => {
            console.error(`Error scanning file: ${err}`);
        });
};

const scannerQrContainer = document.getElementById('scanner-qr-container');

scannerQrContainer.addEventListener('click', (e) => {
    if(e.target.dataset.actionQr == 'camera'){
        startScanning();
    }
});

const qrUpload = document.getElementById('qr-upload');
qrUpload.addEventListener('change', (e) => {
    // console.log(e.target.files)
    handleFileUpload(e)
})



export { startScanning, handleFileUpload }
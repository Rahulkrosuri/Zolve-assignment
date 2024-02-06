import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const PicComp = () => {
  const [isWebcamEnabled, setIsWebcamEnabled] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [upload, setUpload] = useState('')
  const webcamRef = useRef(null);
  const cropperRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsWebcamEnabled(false);
  };

  const handleRetry = () => {
    setCapturedImage(null);
    setIsWebcamEnabled(true);
  };

  const handleUpload = () => {
    if (cropperRef.current && typeof cropperRef.current.getCroppedCanvas === 'function') {
      const croppedCanvas = cropperRef.current.getCroppedCanvas();
      const base64Image = croppedCanvas.toDataURL('image/jpeg'); // Upload base64Image to your backend
      console.log(base64Image); // Log or handle the uploaded image
      setUpload('Image uploaded Successfully')
    } else {
      console.error('getCroppedCanvas is not available on cropperRef');
    }
  };

  return (
    <div>
      {isWebcamEnabled ? (
        <div>
          <h2>Take Selfie with Webcam</h2>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: 'user',
            }}
          />
          <button onClick={handleCapture}>Capture</button>
        </div>
      ) : (
        <div>
          <h2>Crop or Select Circle Area of Face</h2>
          {capturedImage && (
            <Cropper
              src={capturedImage}
              style={{ height: 400, width: '100%' }}
              aspectRatio={1}
              guides={true}
              ref={cropperRef}
            />
          )}
          <button onClick={handleRetry}>Retry</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
      {upload.length !== 0 ? <div><h2>{upload}</h2></div> : <></>}
    </div>
  );
};

export default PicComp;

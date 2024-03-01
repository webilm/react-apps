import React, { useState } from 'react';
import './UploadImagesMenu.css';
import images from './UploadImg/reactloge.png';

const UploadImagesMenu = () => {
    const [imagesArray, setImagesArray] = useState([]);

    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
            setImagesArray([...imagesArray, reader.result]);
        }
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (imagesArray.length > 0) {
            alert('Image saved successfully! 😊😊!');
        } else {
            alert('Please select an image before updating');
        }
    };

    return (
        <div className="upload-images-menu">
            <form onSubmit={handleFormSubmit}>
                <h2 className="upload-images-menu-h2">Upload Product Images</h2>
                <div>
                    <input
                        className="upload-images-menu-input"
                        type="file"
                        id="formFile"
                        onChange={handleImageChange}
                    />
                    <p className='upload-images-menu-p'>You can upload multiple images.</p>
                </div>
                <div>
                    <img
                        className="upload-images-menu-img"
                        src={images}
                        alt="Preview"
                        width="70"
                        height="70"
                    />
                    {imagesArray.map((image, index) => (
                    <img
                        className="upload-images-menu-img"
                        src={image}
                        alt={`Upload ${index + 1}`}
                        width="70"
                        height="70"
                        key={index}
                    />
                    ))}
                </div>
                <button className="upload-images-menu-button" type="submit">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UploadImagesMenu;
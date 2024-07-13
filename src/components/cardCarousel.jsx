

import { useState } from 'react';
import Indicators from './Indicators';

const CardCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setSelectedPhoto(null); // Reset selected photo when navigating
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setSelectedPhoto(null); // Reset selected photo when navigating
  };

  const openModal = (index) => {
    setSelectedPhoto(photos[index]); // Set selected photo for enlargement
  };

  const closeModal = () => {
    setSelectedPhoto(null); // Close the modal by resetting selected photo
  };

  return (
    <div className="mt-5 mb-8 overflow-hidden relative rounded-lg p-5">
      <div className="w-full h-96 mx-auto relative overflow-hidden">
        <div className="mt-4 p-10 flex justify-between items-center overflow-x-auto">
          {photos.map((photo, index) => {
            const isCurrent = index === currentIndex;
            const marginLeft = index === 0 ? `${currentIndex * -33.33}%` : 'auto';
            const cardClasses = `
              flex-none m-4 w-1/3 p-4 bg-white rounded-lg shadow-md
              transition-transform duration-500 cursor-pointer
              ${isCurrent ? 'scale-110 ml-0 z-10' : 'scale-90 ml-0'}
            `;
            const transform = isCurrent ? 'scale(1.1)' : 'scale(0.9)';
            const opacity = isCurrent ? '1' : '0.5';

            return (
              <div
                key={index}
                className={`${cardClasses}`}
                style={{
                  marginLeft,
                  transform,
                  opacity,
                }}
                onClick={() => openModal(index)}
              >
                <img
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                  src={photo.url}
                  alt="Card"
                />
                <h3 className="text-lg font-bold">{photo.description}</h3>
                <p className="text-gray-500">{new Date(photo.date).toLocaleDateString()}</p>
              </div>
            );
          })}
        </div>
        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="max-w-full max-h-full relative">
              <img
                className="max-w-full max-h-full"
                src={selectedPhoto.url}
                alt="Enlarged Photo"
              />
              <button
                className="absolute top-24 left-4 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mt-4 px-5 py-0 absolute inset-x-10 bottom-0">
          <button className="w-6 h-6 rounded-full bg-tartiary" onClick={handlePrev}>&lt;</button>
          <button className="w-6 h-6 rounded-full bg-tartiary" onClick={handleNext}>&gt;</button>
        </div>
       
      </div>
      <Indicators totalIndicators={photos.length} currentIndex={currentIndex} />
    </div>
  );
};

export default CardCarousel;

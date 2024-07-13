

const Indicators = ({ totalIndicators, currentIndex }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalIndicators }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-tartiary' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default Indicators;

interface ApartmentCardProps {
  image: string;
  title: string;
  size: string;
  price: string;
  pricePerM2: string;
  available: boolean;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  image,
  title,
  size,
  price,
  pricePerM2,
  available,
}) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">    
      <img src={image} alt={`${title} floor plan`} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-700">Площадь: {size}</p>
          <p className="text-sm text-gray-700">Цена: от {price} ₸</p>
          <p className="text-sm text-gray-700">Цена за м²: от {pricePerM2} ₸/м²</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              available ? "bg-red-600 text-white" : "bg-red-500 text-white"
            }`}
          >
            {available ? "Доступно" : "Недоступно"}
          </span>
          <a href = "#contact-form">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm">
            Связаться с нами
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

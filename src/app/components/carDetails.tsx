import Image from "next/image";
interface CarDetailProps {
  carImage: string;
  carName: string;
  carPrice: string;
  carReviews: string;
}

const CarDetail: React.FC<CarDetailProps> = ({
  carImage,
  carName,
  carPrice,
  carReviews,
}) => {
  return (
    <div>
      <Image src={carImage} alt={carName} width={200} height={100} />
      <h2>{carName}</h2>
      <p>Price: {carPrice}</p>
      <p>Reviews: {carReviews}</p>
    </div>
  );
};

export default CarDetail;

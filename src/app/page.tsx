// pages/index.tsx
import CarDetail from "./components/carDetails";

const HomePage: React.FC = () => {
  interface Car {
    carImage: string;
    carName: string;
    carPrice: string;
    carReviews: string;
  }

  const cars: Car[] = [
    {
      carImage: "/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
      carName: "Toyota Corolla",
      carPrice: "$20,000",
      carReviews: "4.5/5",
    },
    {
      carImage: "/Honda_City_Front.jpg",
      carName: "Honda Civic",
      carPrice: "$22,000",
      carReviews: "4.6/5",
    },
    {
      carImage: "/mustang.png",
      carName: "Ford Mustang",
      carPrice: "$30,000",
      carReviews: "4.7/5",
    },
    {
      carImage: "/tesla.jpg",
      carName: "Tesla Model S",
      carPrice: "$70,000",
      carReviews: "4.8/5",
    },
  ];

  return (
    <div>
      {cars.map((car, index) => (
        <CarDetail
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
    </div>
  );
};

export default HomePage;

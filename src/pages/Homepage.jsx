import CardComponent from "../components/CardComponent";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Our Hottest deals</h1>
      <CardComponent
        imgUrl="https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg"
        title="Horse"
        description="item description"
      />
    </div>
  );
};

export default HomePage;

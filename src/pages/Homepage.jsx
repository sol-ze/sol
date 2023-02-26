import CardComponent from "../components/CardComponent";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1>Our Hottest deals</h1>
      <CardComponent
        imgUrl="https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg"
        title="Horse"
        description="item description"
      />
    </Fragment>
  );
};

export default HomePage;

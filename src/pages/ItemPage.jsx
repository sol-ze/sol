import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let initialArray = [
  {
    id: 1,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 1",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 2,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 2",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 3,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 3",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 4,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 4",
    description: "asdfasdfasdfasdfasdfasdf",
  },
];
const OrderPage = () => {
  const [SelectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const item = initialArray.find((item) => item.id == id);
    setSelectedItem(item);
  }, [id]);

  if (SelectedItem) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={SelectedItem ? SelectedItem.imgUrl : ""}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{SelectedItem.title}</h5>
          <p className="card-text">{SelectedItem.description}</p>
        </div>
      </div>
    );
  }
};
export default OrderPage;

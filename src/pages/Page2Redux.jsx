import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Page2Redux = () => {
  const str = useSelector((state) => state.aysStore.ays);
  return (
    <Fragment>
      <h1>{str}</h1>
      <Link to="/redux2">Go to page 1</Link>
    </Fragment>
  );
};
export default Page2Redux;

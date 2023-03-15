import { useDispatch } from "react-redux";
import { aysActions } from "../store/ays";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Redux1Page = () => {
  const dispatch = useDispatch();
  const handleAddASD = () => {
    dispatch(aysActions.addASD());
  };
  return (
    <Fragment>
      <button onClick={handleAddASD}>Add 'ASD'</button>
      <Link to="/redux3">to redux 3</Link>
    </Fragment>
  );
};

export default Redux1Page;

import { useDispatch } from "react-redux";
import { strActions } from "../store/letter";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ReduxPage2 = () => {
  const dispatch = useDispatch();
  const handleAddA = () => {
    dispatch(strActions.addStr("123123213"));
  };
  return (
    <Fragment>
      <button onClick={handleAddA}>add a</button>
      <Link to="/redux3">to redux 3</Link>
    </Fragment>
  );
};
export default ReduxPage2;

import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";
import PropTypes from "prop-types";
import { memo, useCallback } from "react";

const CardComponent = ({ id, imgUrl, title, description, onDelete }) => {
  const handleDeleteBtnClick = useCallback(() => {
    console.log("delete from child clicked");
    onDelete(id);
  }, [id]);

  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        <ButtonPartial icon="bi-chat-left-heart-fill">click me</ButtonPartial>

        <ButtonPartial
          btnOption={buttonPartialOptions.danger}
          icon="bi-trash2-fill"
          onClick={handleDeleteBtnClick}
        >
          Delete
        </ButtonPartial>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  imgUrl: (props, propName, componentName) => {
    if (
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        props[propName]
      )
    ) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};
export default memo(CardComponent);

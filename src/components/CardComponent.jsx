import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";

const CardComponent = ({ imgUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        <ButtonPartial
          btnOption={buttonPartialOptions.danger}
          icon="bi-chat-left-heart-fill"
        >
          click me
        </ButtonPartial>
      </div>
    </div>
  );
};
export default CardComponent;

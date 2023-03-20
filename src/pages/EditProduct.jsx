import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";
import ROUTES from "../routes/routes";
import AlertPartial from "../partials/AlertPartial";
import useQueryParams from "../hooks/useQueryParams";

import {
  validateIdSchema,
  validateEditCourseSchema,
} from "../validation/CardValidation";

const EditProduct = () => {
  const [courseData, setCourseData] = useState(null);
  const [errorState, setErrorState] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams", searchParams);
  // console.log(useQueryParams());

  const { id: courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (validateIdSchema({ id: courseId })) {
      navigate(ROUTES.HOME);
      return;
    }
    axios
      .get("/admin/getCourse/" + courseId)
      .then(({ data }) => {
        setCourseData(data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (ev) => {
    const newcourseData = JSON.parse(JSON.stringify(courseData));
    newcourseData[ev.target.id] = ev.target.value;
    setCourseData(newcourseData);
  };

  const handleDiscard = async (e) => {
    e.preventDefault();

    axios
      .get("/admin/getCourse/" + courseId)
      .then(({ data }) => {
        setCourseData(data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const errors = validateEditCourseSchema({
      couseName: courseData.couseName,
      category: courseData.category,
      lecturer: courseData.lecturer,
      description: courseData.description,
    });
    //if no Joi errors
    if (!errors) {
      try {
        console.log(courseData);
        await axios.put("/admin/editAllcourse/", {
          productID: courseId,
          couseName: courseData.couseName,
          category: courseData.category,
          lecturer: courseData.lecturer,
          description: courseData.description,
        });
        navigate(ROUTES.HOME);
      } catch (err) {
        console.log(err);
      }
      //There are errors
    } else {
      setErrorState(errors);
      console.log("#");
    }
  };
  if (courseData) {
    return (
      <form>
        <h5 className="font-weight-bold">
          <i className="bi bi-pencil-square"></i>
          {"  "}Updating course: {courseData.couseName}
        </h5>

        <p className="font-italic">ID: {courseData._id}</p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Course Name:</label>
            <input
              type="text"
              id="couseName"
              className="form-control mb-3"
              onChange={handleInputChange}
              value={courseData.couseName}
            />
            {errorState && errorState.couseName && (
              <AlertPartial>{errorState.couseName.join("<br")}</AlertPartial>
            )}
          </div>
          <div className="form-group col-md-6">
            <label>Category</label>
            <input
              type="text"
              className="form-control mb-3"
              id="category"
              value={courseData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Lecturer:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="lecturer"
              value={courseData.lecturer}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Description:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="description"
              value={courseData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <ButtonPartial
          btnOption={buttonPartialOptions.warning}
          onClick={handleSaveChanges}
        >
          Save changes
        </ButtonPartial>

        <ButtonPartial
          btnOption={buttonPartialOptions.danger}
          onClick={handleDiscard}
        >
          Discard
        </ButtonPartial>
      </form>
    );
  } else {
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
};

export default EditProduct;

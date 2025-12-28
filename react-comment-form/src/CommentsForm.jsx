import React, { useState } from "react";
import{useFormik} from 'formik';
const validate=(values)=>{
  const errors={};
  if(!values.userName){
    errors.userName="Required"; 
  }
  return errors;
};

export default function CommentsForm({addNewComment}) {
   const formik = useFormik({
    initialValues: {
      userName: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values); // pass values to parent
      alert(
        `Username: ${values.userName}\nRemarks: ${values.remarks}\nRating: ${values.rating}`
      );
      console.log(values);
      resetForm(); // clear form after submit
    },
  });



  return (
    <div>
      <h4>Give a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          placeholder="username"
        />
        {formik.errors.userName && <div style={{ color: "red" }}>{formik.errors.userName}</div>}
        <br /><br />

        <label htmlFor="remarks">Remarks: </label>
        <textarea
          id="remarks"
          name="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          placeholder="Remarks"
        />
        <br /><br />

        <label htmlFor="rating">Rating: </label>
        <input
          id="rating"
          type="number"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          min={1}
          max={5}
          placeholder="rating"
        />
        <br /><br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
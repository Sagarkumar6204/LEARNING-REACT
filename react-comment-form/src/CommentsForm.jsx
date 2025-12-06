import React, { useState } from "react";

export default function CommentsForm({addNewComment}) {
  const [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 5,
  });
let show = (e) => {
  e.preventDefault(); // stop form reload first

  addNewComment(formData); // then add the comment

  alert(`Username: ${formData.userName}\nRemarks: ${formData.remarks}\nRating: ${formData.rating}`);
  console.log(formData);

  setFormData({
    userName: "",
    remarks: "",
    rating: 5,
  });
};

  return (
    <div>
      <h4>Give a Comment</h4>
      <form>
        <label htmlFor="username">Username: </label>
        <input
        id="username"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          placeholder="username"
        />
        <br /><br />
          <label htmlFor="remarks">Remarks: </label>
        <textarea
        id="remarks"
          name="remarks"
          value={formData.remarks}
          onChange={(e) =>
            setFormData({ ...formData, remarks: e.target.value })
          }
          placeholder="Remarks"
        />
        <br />
<label htmlFor="rating">Rating: </label>
        <input
        id="rating"
          type="number"
          name="rating"
          value={formData.rating}
          onChange={(e) =>
            setFormData({ ...formData, rating: Number(e.target.value) })
          }
          min={1}
          max={5}
          placeholder="rating"
        />
        <br /><br />

        <button onClick={show} type="submit">Add Comment</button>
      </form>
    </div>
  );
}

import { useState } from "react";

const initialValues = {
    comment : '',
    rating : '',
}

function TextareaAndSelect() {

    const [formData, setFormData] = useState(initialValues);
    const [submittedData, setSubmittedData] = useState(null);

    function handleOnChange(event){
        const {name , value} = event.target;

        setFormData({
            ...formData,
            [name] : value,
        });
    }

    function handleOnSubmit(event){
        event.preventDefault();
        setSubmittedData(formData);
        setFormData(initialValues);

    }


  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Comment : </label>
        <br />
        <textarea name="comment" id="comment" placeholder="Enter your comments" value={formData.comment} onChange={handleOnChange}></textarea>
        <br />
        <label>Ratings</label>
        <br />
        <select name="rating" id="rating" value={formData.rating} onChange={handleOnChange}>
          <option value="">--select--</option>
          <option value="Excellent">Excellentr</option>

          <option value="Good">Good</option>

          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
            <h3>Submitted Data :</h3>
            <p><strong>FeedBack : </strong>{submittedData.comment}</p>
            <p><strong>Rating : </strong>{submittedData.rating}</p>
        </div>
      )}
    </div>
  );
}

export default TextareaAndSelect;

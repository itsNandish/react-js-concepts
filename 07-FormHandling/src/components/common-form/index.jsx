import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = [],
  onHandleSubmit,
  formData,
  setFormData,
  buttonText,
}) {
  function renderFormElement(getCurrentFormElement) {
    let content = null;

    switch (getCurrentFormElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentFormElement.label}
            name={getCurrentFormElement.name}
            id={getCurrentFormElement.id}
            type={getCurrentFormElement.type}
            placeholder={getCurrentFormElement.placeholder}
            value={formData[getCurrentFormElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentFormElement.label}
            name={getCurrentFormElement.name}
            id={getCurrentFormElement.id}
            placeholder={getCurrentFormElement.placeholder}
            type={getCurrentFormElement.type}
            value={formData[getCurrentFormElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElement(singleFormElementItem, formData, setFormData)
          )
        : null}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;

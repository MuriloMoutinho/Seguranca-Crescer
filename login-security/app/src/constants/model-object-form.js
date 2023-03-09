export const MODEL_OBJECT_NOT_EMPTY_FORM = { value: "", error: "", validate: validateDataEmpty }
export const MODEL_OBJECT_EMPTY_FORM = { value: "", error: "" }



function validateDataEmpty(value) {
    const MESSAGE_ERROR_EMPTY = "Preencha este campo";

    if (value === "") return MESSAGE_ERROR_EMPTY;
    return "";
  }
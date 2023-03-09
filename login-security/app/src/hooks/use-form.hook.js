import { useState } from "react";

export function useForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  function onChangeData(event) {
    const { name, value } = event.target;

    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: { ...oldFormData[name], value: value },
    }));
  }

  function setError(inputName, message) {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [inputName]: { ...oldFormData[inputName], error: message },
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormError = Object.keys(formData).filter((key) => {
      const data = formData[key];
      if (data.validate) {
        const inputError = data.validate(data.value);
        setError(key, inputError);
        return !!inputError;
      }
    });

    if (isFormError.length === 0) return onSubmit();
  }

  return {
    onChangeData,
    handleSubmit,
    formData,
  };
}

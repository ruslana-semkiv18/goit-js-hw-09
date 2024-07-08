const formData = {
    email: "",
    message: ""
}


const feedbackForm = document.querySelector(".feedback-form");
const inputEmail = feedbackForm.querySelector("input");
const textareaMessage = feedbackForm.querySelector("textarea");

const lsKey = "feedback-form-state";

feedbackForm.addEventListener("input", handlerInput);
feedbackForm.addEventListener("submit", handlerSubmit);

const savedData = localStorage.getItem(lsKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    inputEmail.value = formData.email;
    textareaMessage.value = formData.message;
}


function handlerInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(lsKey, JSON.stringify(formData));
    console.log(formData)
}



function handlerSubmit(evt) {
    evt.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(lsKey);
    formData.email = "";
    formData.message = "";
    feedbackForm.reset();
}
  

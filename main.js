const message = document.getElementById("message");

const ValidMail = () => {

  let mail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/ig;        
  let myMail = document.getElementById("email").value;
  let valid = mail.test(myMail);

  if (valid) {
    
    alert("Вы успешно зарегистрировались");             
    message.style.display = "none";
    
  } else {

    message.innerText = "Не корректный формат почты";
    message.style.display = "block";
    
  }

  return valid;

};
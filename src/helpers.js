function checkPassword(str) {
  let strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(str);
}
function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function checkForm(form) {
  //   debugger;
  if (form.email.value == "") {
    alert("Error: Email cannot be blank!");
    form.email.focus();
    return false;
  }
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email.value)) {
    alert("Error: Invalid email address!");
    form.email.focus();
    return false;
  }

  //   if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
  //     if (form.pwd1.value.length < 6) {
  //       alert("Error: Password must contain at least six characters!");
  //       form.pwd1.focus();
  //       return false;
  //     }
  //     if (form.pwd1.value == form.username.value) {
  //       alert("Error: Password must be different from Username!");
  //       form.pwd1.focus();
  //       return false;
  //     }
  //     re = /[0-9]/;
  //     if (!re.test(form.pwd1.value)) {
  //       alert("Error: password must contain at least one number (0-9)!");
  //       form.pwd1.focus();
  //       return false;
  //     }
  //     re = /[a-z]/;
  //     if (!re.test(form.pwd1.value)) {
  //       alert(
  //         "Error: password must contain at least one lowercase letter (a-z)!"
  //       );
  //       form.pwd1.focus();
  //       return false;
  //     }
  //     re = /[A-Z]/;
  //     if (!re.test(form.pwd1.value)) {
  //       alert(
  //         "Error: password must contain at least one uppercase letter (A-Z)!"
  //       );
  //       form.pwd1.focus();
  //       return false;
  //     }
  //   } else {
  //     alert(
  //       "Error: Please check that you've entered and confirmed your password!"
  //     );
  //     form.pwd1.focus();
  //     return false;
  //   }

  alert("You entered a valid password: " + form.pwd1.value);
  return true;
}

export { checkPassword, validateEmail, checkForm };

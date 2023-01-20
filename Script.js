const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");

// Add Event

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = ( nameval, emailval, phoneval, dateval, timeval, sRate, count) => {
  if (sRate === count) {
    alert("Appointment Booked Successfully");
    swal("Great! " + nameval, "Appointment Booked Successfully", "success");
    localStorage.setItem('Name', nameval);
    localStorage.setItem('Email', emailval);
    localStorage.setItem('Phone', phoneval);
    localStorage.setItem('Date', dateval);
    localStorage.setItem('Time', timeval);

    clearField();
  }
};

// for final data validation

const successMsg = (nameval, emailval, phoneval, dateval, timeval) => {
  let formCon = document.getElementsByClassName("form-control");
  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
    //   console.log(sRate);
      sendData(nameval, emailval, phoneval, dateval, timeval, sRate, count);
    } else {
      return false;
    }
  }
};

// email validate

const isEmail = (emailval) => {
  var atSymbol = emailval.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailval.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailval.length - 1) return false;
  return true;
};

// define the validate function

const validate = () => {
  const nameval = name.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const dateval = date.value.trim();
  const timeval = time.value.trim();

  // validate name
  if (nameval === "") {
    setErrorMsg(name, "name cannot be blank");
  } else if (nameval.length <= 2) {
    setErrorMsg(name, "name min 3 character");
  } else {
    setSuccessMsg(name);
  }

  // validate email
  if (emailval === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailval)) {
    setErrorMsg(email, "Not a valid Email");
  } else {
    setSuccessMsg(email);
  }

  // validate Phone
  if (phoneval === "") {
    setErrorMsg(phone, "phone number cannot be blank");
  } else if (phoneval.length != 10) {
    setErrorMsg(phone, "Not a valid Phone number");
  } else {
    setSuccessMsg(phone);
  }

  // validate Date
  if (dateval === "") {
    setErrorMsg(date, "date cannot be blank");
  } else if (dateval.length <= 3) {
    setErrorMsg(date, "Minimum 6 character");
  } else {
    setSuccessMsg(date);
  }

  // validate time
  if (timeval === "") {
    setErrorMsg(time, "time cannot be blank");
  } else if (timeval.length <= 3) {
    setErrorMsg(time, "Minimum 6 character");
  } else {
    setSuccessMsg(time);
  }

  successMsg(nameval, emailval, phoneval, dateval, timeval);
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function clearField(input) {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}

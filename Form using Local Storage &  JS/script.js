//Read & Store user data

const register = (e) => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  //   user alllready register
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() ==
          document.getElementById("fname").value.toLowerCase() &&
        data.lname.toLowerCase() ==
          document.getElementById("lname").value.toLowerCase()
    );

  // new user register
  if (!exist) {
    formData.push({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      pwd: document.getElementById("pwd").value,
    });

    localStorage.setItem("formData", JSON.stringify(formData));
    //   console.log(localStorage.getItem("formData"));

    dispData();

    //   reset form and focus on first name field
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already registered");
  }
  //   no need to reload
  e.preventDefault();
};

// Displaying  Users Information

function dispData() {
  var formData = JSON.parse(localStorage.getItem("formData"));

  if (formData && Array.isArray(formData)) {
    var output = document.querySelector("tbody");
    output.innerHTML = ""; // Clear the existing content

    formData.forEach((data, index) => {
      var row = document.createElement("tr");

      // Create table cells for each data field
      var fnameCell = document.createElement("td");
      fnameCell.textContent = data.fname;
      row.appendChild(fnameCell);

      var lnameCell = document.createElement("td");
      lnameCell.textContent = data.lname;
      row.appendChild(lnameCell);

      var emailCell = document.createElement("td");
      emailCell.textContent = data.email;
      row.appendChild(emailCell);

      var pwdCell = document.createElement("td");
      pwdCell.textContent = data.pwd;
      row.appendChild(pwdCell);

      //   var phoneCell = document.createElement("td");
      //   phoneCell.textContent = data.phone;
      //   row.appendChild(phoneCell);

      // Create action buttons for edit and delete
      var actionCell = document.createElement("td");
      //   var editButton = document.createElement("button");
      //   editButton.textContent = "Edit";
      //   editButton.onclick = () => editContact(index); // Pass the index to identify the row
      //   actionCell.appendChild(editButton);

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteContact(index); // Pass the index to identify the row
      actionCell.appendChild(deleteButton);

      row.appendChild(actionCell);

      output.appendChild(row); // Append the new row to the table body
    });
  } else {
    console.log("No user data found or data is not in the expected format.");
  }
}

// Delete contact function
function deleteContact(index) {
  var formData = JSON.parse(localStorage.getItem("formData"));

  if (formData && Array.isArray(formData)) {
    // Remove the contact from the array
    formData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(formData));

    // Refresh the displayed data
    dispData();
  }
}

// Display initial data

dispData();

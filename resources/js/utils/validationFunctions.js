const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const nameValidation = input => /^[A-Za-z]+$/.test(input);

const phoneNumberValidation = phoneNumber =>
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
        phoneNumber
    );

const genderValidation = userGender => userGender != "";

const dateOfBirthValidation = (day, month, year) => {
    console.log(day + "-" + month + "-" + year);
    let finaldate = day + "-" + month + "-" + year;
    console.log(finaldate);
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
        finaldate
    );
};

export const validateAll = params => {
    if (!nameValidation(params.fname)) {
        alert("First Name is Required. It cannot be empty or use symbols.");
        return false;
    }
    //Name Validation - Last Name
    if (!nameValidation(params.lname)) {
        alert("Last Name is Required.  It cannot be empty or use symbols.");
        return false;
    }
    //Email Validation, already pre-checked.
    if (!emailIsValid(params.email)) {
        alert("Email Address is not valid. It cannot be empty.");
        return false;
    }

    //Phone Validation.
    if (!phoneNumberValidation(params.mobileNumber)) {
        alert("Phone Number is not valid. Please only use digits.");
        return false;
    }

    //Gender Validation
    if (!genderValidation(params.gender)) {
        alert("Gender Invalid. Please choose a Gender.");
        return false;
    }

    //Date of Birth Validation - must follow pattern of dd/mm/yyyy, e.g. 02/11/1990
    if (
        !dateOfBirthValidation(
            params.dateOfBirthDD,
            params.dateOfBirthMM,
            params.dateOfBirthYYYY
        )
    ) {
        alert(
            "Please input date of birth in format of dd/mm/yyyy, e.g. 02/11/1990"
        );
        return false;
    }
    return true;
};

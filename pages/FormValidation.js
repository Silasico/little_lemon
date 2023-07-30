export const Validate = (firstName, email, lastName = "") => {
  const nameRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const  emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  
  if (!nameRegex.test(firstName) && emailRegex.test(email) && (!lastName || !nameRegex.test(lastName))) {
    return true;
  } else {
    return false
  }
}
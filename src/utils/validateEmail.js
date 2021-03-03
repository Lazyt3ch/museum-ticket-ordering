const validateEmail = (emailStr) => {
  return /^[a-z0-9+_.-]+@[a-z0-9.-]+$/i.test(emailStr.trim());
};

export default validateEmail;
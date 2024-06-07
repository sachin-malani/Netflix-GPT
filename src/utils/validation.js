export const isValid = (name, email, password) => {

    if (typeof name !== 'string') return false;
  
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(name.trim());

    if(!isEmailValid) return "Invalid username";
    if(!isPasswordValid) return "Invalid password";
    if(!isNameValid) return "Invalid name";

    return null;
}
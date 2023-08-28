export const passwordValidator = (password) => {
    const passwordCheck = password.value;
    if(!passwordCheck) return "Password can't be empty";
    if(passwordCheck < 5) return "Password must be less at 5 character long";
    return "";
}
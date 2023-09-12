export const rePasswordValidator = (password, rePassword) => {
    const passwordCheck = password.value;
    const rePasswordCheck = rePassword.value;
    if (!rePasswordCheck) return "Repassword can't be empty";
    if (passwordCheck !== rePasswordCheck) {
        return "Re-Password and password do not match";
    } else return "";
}
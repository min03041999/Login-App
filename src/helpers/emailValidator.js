export function emailValidator(email) {
    const emailCheck = email.value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailCheck) return "Email can't be empty";
    if(!re.test(emailCheck)) return "Ooops! We need a valid email address";
    return "";
}
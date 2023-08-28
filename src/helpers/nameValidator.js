export function nameValidator(name) {
    const nameCheck = name.value;
    if(!nameCheck) return "Name can't be empty";
    return '';
}
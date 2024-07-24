export const validateEmail = (email) => {
    const valRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return valRegex.test(email);
}
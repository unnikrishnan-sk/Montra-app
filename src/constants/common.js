export const validateEmail = (email) => {
    const valRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return valRegex.test(email);
}

export const handleAuthError = (error, setFirebaseError) => {
    switch (error.code) {
        case 'auth/invalid-credential':
            setFirebaseError("Invalid Credentials")
            break;
        case 'auth/email-already-in-use':
            setFirebaseError("Email already in Use")
            break;
        case 'auth/wrong-password':
            setFirebaseError("Incorrect Password")
            break;
        case 'auth/invalid-email':
            setFirebaseError("Invalid Email Address")
            break;
        case 'auth/user-not-found':
            setFirebaseError("User Not Found")
            break;
        case 'auth/weak-password':
            setFirebaseError("Set Stronger Password")
            break;
        case 'auth/too-many-requests':
            setFirebaseError("Too Many Requests. Try Later")
            break;
        case 'auth/network-request-failed':
            setFirebaseError("Network Error")
            break;
        default:
            setFirebaseError("Unknown Error Occured")
            console.log(error);
            break;
    }
}
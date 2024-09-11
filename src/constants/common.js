import { food_icon, shopping_icon, subscription_icon, transfer_icon, transportation_general_icon } from "../assets";
import { colorMix } from "./color";

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


export const handleCategoryColor = (category) => {
    // console.log(category);
    const categoryValue = {
        "shopping": "Shopping",
        "subscription": "Subscription",
        "food": "Food",
        "salary": "Salary",
        "transportation": "Transportation"
    }
    let backgrounImage;

    let backgroundColor;
    switch (category) {
        case categoryValue.shopping:
            backgroundColor = colorMix.yellow_100;
            backgrounImage = shopping_icon
            console.log(backgroundColor);
            break;
        case categoryValue.subscription:
            backgroundColor = colorMix.violet_100;
            backgrounImage = subscription_icon
            break;
        case categoryValue.food:
            backgroundColor = colorMix.red_100;
            backgrounImage = food_icon
            break;
        case categoryValue.salary:
            backgroundColor = colorMix.green_100;
            break;
        case categoryValue.transportation:
            backgroundColor = colorMix.blue_100;
            backgrounImage = transportation_general_icon
            break;
        default:
            backgroundColor = colorMix.light_100;
            backgrounImage = null
    }
    // console.log(backgroundColor);
    return backgroundColor
    return backgrounImage
} 
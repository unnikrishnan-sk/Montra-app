import { onboarding_1, onboarding_2, onboarding_3, pass_icon } from "../assets";

export const onboardData = [{ id: 0, image: onboarding_1, heading: "Gain total control of your money", desc: "Become your own money manager and make every cent count" }, { id: 1, image: onboarding_2, heading: "Know where your money goes", desc: "Track your transaction easily, with categories and financial report" }, { id: 2, image: onboarding_3, heading: "Planning ahead", desc: "Setup your budget for each category so you in control" }]

export const signupDetails = [{ id: 0, placeholder: 'Name', value: 'name', nextRef: 'email', passwordSecure: false }, { id: 1, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 2, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const loginDetails = [{ id: 0, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 1, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]
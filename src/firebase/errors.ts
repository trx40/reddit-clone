export type FB_error =  {
    [key: string]: string,
}


export const FIREBASE_ERRORS: FB_error = {
    "Firebase: Error (auth/email-already-in-use).": 
    "A user with this email already exists.",
    "Firebase: Password should be at least 6 characters (auth/weak-password).":
    "Password should be at least 6 characters",
    "Firebase: Error (auth/user-not-found).": "Invalid email or password",
    "Firebase: Error (auth/wrong-password).": "Invalid email or password",
}
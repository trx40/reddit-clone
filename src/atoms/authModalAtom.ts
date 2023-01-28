//  Creating state for AuthModal in TypeScript
//  We will first set the interface for the AuthModalState
//  Create a defaultModalState object
//  Export this new state as an atom and set the default values

import { atom } from 'recoil'

export interface AuthModalState {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
    open: false,
    view: "login"
}

export const authModalState = atom<AuthModalState>({
    key: "authModalState",
    default: defaultModalState
})
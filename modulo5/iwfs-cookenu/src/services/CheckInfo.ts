export class CheckInfo {

    public checkPassword = (input: string): boolean => {
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

        if (input.match(validPassword)) return true
        return false
    }

    public checkEmail = (input: string): boolean => {
        const verifyEmail = /\S+@\S+\.\S+/

        if (input.match(verifyEmail)) return true
        return false
    }

}


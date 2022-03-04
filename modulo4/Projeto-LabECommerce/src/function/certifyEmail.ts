const certifyEmail = (email: string): boolean => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

export default certifyEmail
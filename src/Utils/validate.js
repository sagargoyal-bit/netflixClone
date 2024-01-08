export const validateEmailandPass = (email,password) => {
    const Email=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const Password=/^[a-zA-Z0-9]+$/.test(password);

    if(!Email || !Password)
    {
        return "Incorrect Password/Email Format"
    } 
    return null;
};

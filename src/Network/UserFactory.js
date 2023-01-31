const userFactory = (userId, username, password, userType) => {
    return {

        userId: userId,
        username: username,
        password: password,
        userType: userType
    }
}

export default userFactory;

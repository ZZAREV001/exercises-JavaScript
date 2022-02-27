const greetUser = (username, callback) => {
    if (callback) {
        callback(username);
    } else {
        console.log(username);
    }
}

export default greetUser;

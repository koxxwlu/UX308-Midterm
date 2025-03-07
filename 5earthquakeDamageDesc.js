function damageDesc() {
    var value = 0;

    if (numOfFriends >= 3) {
        value = cost * 0.85;
    }

    return value;
}

export {damageDesc}
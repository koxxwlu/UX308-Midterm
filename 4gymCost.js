function gymCost(cost, numOfFriends) {
    var value = 0;

    if (numOfFriends >= 3) {
        value = cost * 0.85;
    } else if (numOfFriends >= 2) {
        value = cost * 0.9;
    } else if (numOfFriends >= 1) {
        value = cost * 0.95;
    } else {
        value = cost;
    }

    return value;
}

export {gymCost}
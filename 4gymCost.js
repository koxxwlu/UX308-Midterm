function gymCost(cost, numOfFriends) {
    if (numOfFriends >= 3) {
        let value = cost * 0.85;
    } else if (numOfFriends >= 2) {
        let value = cost * 0.9;
    } else if (numOfFriends >= 1) {
        let value = cost * 0.95;
    } else {
        let value = cost;
    }

    return value;
}

export {heightToVolume}
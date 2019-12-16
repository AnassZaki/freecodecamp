let user = {
    name: 'Sara',
    age: 26,
    data: {
        username: 'SaraCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'Casablanca',
            country: 'Morocco'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
}

console.log(addFriend(user, 'Anass'));
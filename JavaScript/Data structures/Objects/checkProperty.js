let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {

    if (obj.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) {
        return 'Alan', 'Jeff', 'Sarah', 'Ryan' in users;
    } else {
        return false;
    }

}

console.log(isEveryoneHere(users));
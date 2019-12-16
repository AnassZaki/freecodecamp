// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    }
}
// copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// function to complete missing album informations
function updateRecords(id, prop, value) {

    if (prop === "tracks" && value !== "") {
        if (collection[id][prop]) {
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = [value];
        }
        } else if (value !== "") {
        collection[id][prop] = value;
        } else {
        delete collection[id][prop];
        }
    return collection;
}

// Alter values below to test your code

updateRecords(id, prop, value);
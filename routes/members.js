/**
 * Created with IntelliJ IDEA.
 * User: matts
 * Date: 2/25/14
 * Time: 9:35 AM
 * To change this template use File | Settings | File Templates.
 */
exports.memberList = function (req, res) {
    res.send(WARD_LIST_JSON);
}

var WARD_LIST_JSON = [
    {
        // HOH - no spouse, children
        "headOfHouse": { "individualId": 111,
            "formattedName": "Jones, Joseph", "surname": "Jones",
            "givenName1": "Joseph", "priesthoodOffice": null, "email": null, "photoUrl": "img/no-pic.png",
            "imageId": null, "gender": "MALE", "notes": null, "birthdate": 0, "phone": null
        },
        "spouse": null,
        "formattedCoupleName": "Jones, Joseph",
        "children": [
            {
                "individualId": 131,
                "formattedName": "Jones, Petala", "surname": "Jones",
                "givenName1": "Petala", "priesthoodOffice": null, "email": null, "photoUrl": "img/no-pic.png",
                "imageId": null, "gender": "FEMALE", "notes": null, "birthdate": 0, "phone": null
            }
        ],
        "phone": null,
        "address": {
            "streetAddress": "123 Any Street", "city": "City", "state": "UT", "postal": "88888"
        },
        "emailAddress": null
    },
    {
        // HOH male only
        "headOfHouse": {
            "individualId": 211,
            "formattedName": "Anderson, Tyson", "surname": "Anderson", "givenName1": "Tyson",
            "priesthoodOffice": "DEACON", "email": null, "photoUrl": "img/no-pic.png", "imageId": null,
            "gender": "MALE", "notes": null, "birthdate": 0, "phone": null
        },
        "spouse": null,
        "formattedCoupleName": "Anderson, Tyson",
        "children": [],
        "phone": "801-555-0211",
        "address": {
            "streetAddress": "1233 Any Street", "city": "City", "state": "UT", "postal": "88888"
        },
        "emailAddress": null
    },
    {
        // Couple - no children
        "headOfHouse": {
            "individualId": 311,
            "formattedName": "AFPEight, Husband", "surname": "AFPEight", "givenName1": "Husband",
            "priesthoodOffice": "ELDER", "email": "AFPEight@abc.com", "photoUrl": "img/no-pic.png", "imageId": null,
            "gender": "MALE", "notes": null, "birthdate": 0, "phone": "801-555-0311"
        },
        "spouse": {
            "individualId": 321,
            "formattedName": "AFPEight, Wife", "surname": "AFPEight", "givenName1": "Wife",
            "priesthoodOffice": null, "email": null, "photoUrl": "img/no-pic.png", "imageId": null,
            "gender": "FEMALE", "notes": null, "birthdate": 0, "phone": null
        },
        "formattedCoupleName": "AFPEight, Husband & Wife",
        "children": [],
        "phone": null,
        "address": {
            "streetAddress": "1233 Any Street", "city": "City", "state": "UT", "postal": "88888"
        },
        "emailAddress": null
    },
    {
        // Full Family
        "headOfHouse": {
            "individualId": 411,
            "formattedName": "Ross, Steve", "surname": "Ross", "givenName1": "Steve", "priesthoodOffice": "HIGHPRIEST",
            "email": "me@abc.com", "photoUrl": "img/no-pic.png", "imageId": null, "gender": "MALE",
            "notes": null, "birthdate": 0, "phone": "801-555-0411"
        },
        "spouse": {
            "individualId": 421,
            "formattedName": "Ross, Lani", "surname": "Ross", "givenName1": "Lani", "priesthoodOffice": null,
            "email": null, "photoUrl": "img/no-pic.png", "imageId": null, "gender": "FEMALE",
            "notes": null, "birthdate": 0, "phone": "801-555-0412"
        },
        "formattedCoupleName": "Ross, Steve & Lani",
        "children": [
            {
                "individualId": 431,
                "formattedName": "Ross, Steve Junior", "surname": "Ross", "givenName1": "Steve Junior", "priesthoodOffice": "ELDER",
                "email": null, "photoUrl": "img/no-pic.png", "imageId": null, "gender": "MALE",
                "notes": null, "birthdate": 0, "phone": "801-555-0413"
            },
            {
                "individualId": 432,
                "formattedName": "Ross, Fate",
                "surname": "Ross", "givenName1": "Fate", "priesthoodOffice": null, "email": null, "photoUrl": "img/no-pic.png",
                "imageId": null, "gender": "FEMALE", "notes": null, "birthdate": 0, "phone": null
            }
        ],
        "phone": null,
        "address": {
            "streetAddress": "1233 Any Street", "city": "City", "state": "UT", "postal": "88888"
        },
        "emailAddress": null
    },
    {
        // Full Family
        "headOfHouse": {
            "individualId": 511,
            "formattedName": "maria, Steve", "surname": "maria", "givenName1": "Steve", "priesthoodOffice": "HIGHPRIEST",
            "email": "me@abc.com", "photoUrl": "img/no-pic.png", "imageId": null, "gender": "FEMALE",
            "notes": null, "birthdate": 0, "phone": "801-555-0411"
        },
        "spouse": null,
        "formattedCoupleName": "maria Steve ",
        "children": [
            {
                "individualId": 531,
                "formattedName": "Ross, Steve Junior", "surname": "Ross", "givenName1": "Steve Junior", "priesthoodOffice": "ELDER",
                "email": null, "photoUrl": "img/no-pic.png", "imageId": null, "gender": "MALE",
                "notes": null, "birthdate": 0, "phone": "801-555-0413"
            },
            {
                "individualId": 532,
                "formattedName": "Ross, Fate",
                "surname": "Ross", "givenName1": "Fate", "priesthoodOffice": null, "email": null, "photoUrl": "img/no-pic.png",
                "imageId": null, "gender": "FEMALE", "notes": null, "birthdate": 0, "phone": null
            }
        ],
        "phone": null,
        "address": {
            "streetAddress": "1233 Any Street", "city": "City", "state": "UT", "postal": "88888"
        },
        "emailAddress": null
    }
];



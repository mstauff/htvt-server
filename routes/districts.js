/**
 * Created with IntelliJ IDEA.
 * User: matts
 * Date: 2/25/14
 * Time: 9:35 AM
 * To change this template use File | Settings | File Templates.
 */
exports.districtList = function (req, res) {
    var distList = [DISTRICT1_JSON, DISTRICT2_JSON];
    res.send(distList);
}

exports.recordVisit = function (req, res) {
    var visitDto = req.body;
    visitDto.id = randomId();
    res.send( visitDto);

};

function randomId() {
  return Math.floor((1 + Math.random()) * 0x10000);
};

DISTRICT1_JSON = {
    "id": 1,
    "auxiliaryId": 22,
    "companionships": [
        {
            // 111 & 211 teach 311 & 411
            "id": 1,
            "districtId": 1,
            "assignments": [
                {
                    "id": 1,
                    "companionshipId": 1,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 1,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 1,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 1,
                            "visited": null,
                        }
                    ],
                    "individualId": 311,
                    "assignmentType": "HT"
                },
                {
                    "id": 2,
                    "companionshipId": 1,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 244,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 244,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 244,
                            "visited": null,
                        }
                    ],
                    "individualId": 411,
                    "assignmentType": "HT"
                }
            ],
            "startDate": 1371570594320,

            "ids":[111,211],
            "teachers": [
                {
                    "id": 1,
                    "companionshipId": 1,
                    "individualId": 111
                },
                {
                    "id": 2,
                    "companionshipId": 1,
                    "individualId": 211
                }
            ],
            "label": null
        },
        {
            // 311 & 411 teach no one
            "id": 2,
            "districtId": 1,
            "assignments": [],
            "startDate": 1371582012261,
            "ids":[311,411],
            "teachers": [
                {
                    "id": 3,
                    "companionshipId": 2,
                    "individualId": 311
                },
                {
                    "id": 4,
                    "companionshipId": 2,
                    "individualId": 411
                }
            ],
            "label": null
        },
        {
            // no teachers assigned to 111 & 211
            "id": 3,
            "districtId": 1,
            "assignments": [
                {
                    "id": 756,
                    "companionshipId": 3,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 756,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 756,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 756,
                            "visited": null,
                        }
                    ],
                    "individualId": 111,
                    "assignmentType": "HT"
                },
                {
                    "id": 256,
                    "companionshipId": 3,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 256,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 256,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 256,
                            "visited": null,
                        }
                    ],
                    "individualId": 211,
                    "assignmentType": "HT"
                }
            ],
            "startDate": 1371582057550,
            "ids":[],
            "teachers": [],
            "label": null
        },
        {
            // 411 teaches no one
            "id": 4,
            "districtId": 1,
            "assignments": [],
            "startDate": 1371582072359,
            "ids":[411],
            "teachers": [
                {
                    "id": 1325,
                    "companionshipId": 4,
                    "individualId": 411
                }
            ],
            "label": null
        },
        {
            // 111 & 311 teach 211 & 511
            "id": 5,
            "districtId": 1,
            "assignments": [
                {
                    "id": 888,
                    "companionshipId": 5,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 888,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 888,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 888,
                            "visited": null,
                        }
                    ],
                    "individualId": 211,
                    "assignmentType": "HT"
                },
                {
                    "id": 889,
                    "companionshipId": 5,
                    "visits": [
                        {
                            "id": null,
                            "assignmentId": 889,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 889,
                            "visited": null,
                        },
                        {
                            "id": null,
                            "assignmentId": 889,
                            "visited": null,
                        }
                    ],
                    "individualId": 511,
                    "assignmentType": "HT"
                }
            ],
            "startDate": 1371570594320,
            "ids":[111,211],
            "teachers": [
                {
                    "id": 555,
                    "companionshipId": 5,
                    "individualId": 111
                },
                {
                    "id": 556,
                    "companionshipId": 5,
                    "individualId": 211
                }
            ],
            "label": null
        }
    ],
    "districtLeaderId": 111,
    "name": "district 1"
};
DISTRICT2_JSON = {
    "id": 2,
    "auxiliaryId": 22,
    "companionships": [],
    "districtLeaderId": 211,
    "name": "district 2"
};

var currMonth = new Date();
var numMonthVisits = 3;
var visitDates = new Array(3);

for( var i = numMonthVisits - 1; i >= 0; i-- ) {
    visitDates[i] = {'month': currMonth.getMonth() + 1, 'year': currMonth.getFullYear()};

    currMonth.setMonth( currMonth.getMonth() - 1 );
}

var visited = true;

for( var compIdx = 0; compIdx < DISTRICT1_JSON.companionships.length; compIdx++ ) {
    var comp = DISTRICT1_JSON.companionships[compIdx];
    if (comp.assignments != null ) {
        for (var assignIdx = 0; assignIdx < comp.assignments.length; assignIdx++) {
            var assignment = comp.assignments[assignIdx];
            if (assignment.visits != null) {

                for (var i = 0; i < assignment.visits.length; i++) {
                    var visit = assignment.visits[i];
                    visit.month= visitDates[i].month;
                    visit.year = visitDates[i].year;
                    visit.visited = visited;
                    visit.id = (assignment.id *10000) + (assignIdx * 100) + i;
                }
                if( visited == true ) {
                    visited = false;
                } else if( visited == false ) {
                    visited = null;
                } else {
                    visited = true;
                }
            }
        }
    }

}




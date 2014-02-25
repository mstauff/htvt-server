
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mobileConfig = function(req, res){

    var baseUrl = "http://htvt-ldscd.rhcloud.com/";
    var baseHtvtEndpoint = baseUrl + "htvt/services/v1/"
    var districtsUrl = baseHtvtEndpoint + "%@/districts/%@/"
    var compUrl = baseHtvtEndpoint + "companionships/"
    var visitUrl = baseHtvtEndpoint + "%@/visits/"
    var config = {
        urls : {
            "login":"lds.org/signin",
            "logout":"lds.org/signout",
            "current_user": baseHtvtEndpoint + "user",
            "member_list": baseHtvtEndpoint + "%@/members/",
            "htvt_districts": districtsUrl,
            "district_create": districtsUrl,
            "district_update": districtsUrl + "%@",
            "district_delete": districtsUrl + "%@",
            "comp_create": compUrl,
            "comp_delete": compUrl + "%@",
            "visit_record": visitUrl + "record/",
            "visit_delete": visitUrl + "%@",
            "latest_visits": visitUrl + "latestByOrganization/%@/"

        },
        cacheMemberData : "true"
    }
  res.send(config);
};
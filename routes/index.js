
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mobileConfig = function(req, res){

    var config = {
        urls : {
            "login":"lds.org/signin",
            "logout":"lds.org/signout",
            "member_list":"lds.org/directory",
            "htvt_districts":"https://beta.lds.org/htvt/%@/districts/%@"

        }
    }
  res.send(config);
};
var request = require('request');

var access_token = 'AQVcy2ztalk4jL97s_IOmkfQ7941sNFoDaAtmX6wNkMXaY2ayhbB49XKUKWW62Ie0f2skgHgOyBTMNAqZvKXJhyHeLZV5NgvclR9IH1dUzvdRMmJT9niMFfIZwMDukBs85-xgOTXiCEPF34PuytvTQsRk-Vu0y61fpzPhL_UlygCzEp0SSGDe7BQK6NmFWZbIIJRgIkmu9KTH6zBRldO9GVCcOk6gsDDhrg2SQBEspXiFM33AtzOotjznz7e52g02XD6QguJfhlOdIcoeWlNpbTKt9HIA1v9Ey66SwbQ8CGuDWid-azrFkmE3tB-ULkbDqEQZlzSjNxoikcpB0oycCgoubDaOg';

function callAPI(accessToken, done) {
    request.get({
        url: 'https://api.linkedin.com/v2/me?oauth2_access_token={77ye5mwpgp7ndd}',
        headers: {"Authorization": "Bearer" + accessToken}}, function (err, res, responseBody) {
        if (err) {
            console.log(err);
            done(err, null);
        } else {
            done(null, JSON.parse(responseBody));
        }
    });
}

function main(done) {
    callAPI(access_token, done);
}

main(function (err, res) {if (err) console.log(err); else console.log(res);  });

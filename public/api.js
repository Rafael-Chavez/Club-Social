function buildQueryURL() {

var unirest = require("unirest");

var req = unirest("GET", "https://universities-and-colleges.p.rapidapi.com/universities");

req.headers({
	"x-rapidapi-key": "6ccaabf5bfmshd38a0c923082aefp1e6d81jsn91c7de327e84",
	"x-rapidapi-host": "universities-and-colleges.p.rapidapi.com",
	"useQueryString": true
});

$("school").on("click",  function() {
    searchColleges($(this).text());
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
}
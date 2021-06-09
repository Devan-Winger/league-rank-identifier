//no longer requires 2 seperate functions.
function RANKFIND(league_ign) {
var tempign = "feargem" //this is for testing using my summoner id change variable to your own summoner ign
var apirequest1 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
var apirequest2 = "?api_key=" //after the = in "?api_key=" use your own key received from riot
var idapirequest = (apirequest1 + league_ign + apirequest2) //can switch "league_ign" with "tempign" for testing
var response = UrlFetchApp.fetch(idapirequest);
var content = response.getContentText();
var json = JSON.parse(content)
var id = json["id"]
var tempid = "YZ9wH1Bldkndu5YnBb9cYn5corkcU_rDCVsVEaHDttelCVg" //this is for testing using my summoner id change variable to your own
var apirequest3 = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"
var apirequest4 = "?api_key=" //after the = in "?api_key=" use your own key received from riot
var apirequestfull = (apirequest3 + id + apirequest4) //can switch "id" with "tempid" for testing
var response = UrlFetchApp.fetch(apirequestfull);
var content = response.getContentText();
var json2 = JSON.parse(content)
const obj = json2.find((o) => o.queueType === "RANKED_SOLO_5x5");
const { tier, rank, leaguePoints } = obj;
var full_rank = (tier+ "," + rank + " " + leaguePoints + "lp")
return full_rank
}

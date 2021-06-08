//currently needs to do each function individually first to find your summoner id and then uses summoner id to find ranked info

//finds id

function IDFINDER(league_ign) {
var tempign = "feargem" //this is for testing using my summoner id change variable to your own summoner ign
var apirequest1 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
var apirequest2 = "?api_key=RGAPI-ace8b476-be1c-49fd-8cf3-d0fc5b17225a"
var ign = league_ign
var idapirequest = (apirequest1 + ign + apirequest2) //can switch "ign" with "tempign" for testing
Logger.log(idapirequest);
var response = UrlFetchApp.fetch(idapirequest);
var content = response.getContentText();
Logger.log(content)
var json = JSON.parse(content)
var id = json["id"]
Logger.log(id);
return id
}

//uses id for ranked info

function FINDRANK(account_id) {
var tempid = "R0DS4hZSmhYRAbdlHaMt6-1IlUMWOLLYUDcgaX5wkO10iIc" //this is for testing using my summoner id change variable to your own useing IDFINDER
var apirequest1 = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/"
var apirequest2 = "?api_key=RGAPI-ace8b476-be1c-49fd-8cf3-d0fc5b17225a"
var accountid = account_id
var apirequestfull = (apirequest1 + accountid + apirequest2) //can switch "accountid" with "tempid" for testing
var response = UrlFetchApp.fetch(apirequestfull);
var content = response.getContentText();
var json = JSON.parse(content)
var json2 = json[0]
var tier = json2["tier"];
var rank = json2["rank"];
var league_points = json2["leaguePoints"];
var full_rank = (tier+ "," + rank + " " + league_points + "lp")
Logger.log(full_rank)
return full_rank
}

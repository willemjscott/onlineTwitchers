var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
$(document).ready(function () {
    for (i = 0; i < twitchers.length; i++) {
        getInfo(i);
    };

    function getInfo(num) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + twitchers[num] + "?callback=?", function (json) {
            $("#channel-info-" + (num + 1)).html('<img src="' + json.logo + '" class="profile-pic"><a href="' + json.url + '">' + json.display_name + "</a>");
        });
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + twitchers[num] + "?callback=?", function (json) {
            var streaming;
            if (json.stream === null) {
                streaming = "Offline";
            } else {
                streaming = '<span title="' + json.stream.channel.status + '">Online</span>';
                $("#stream-status-" + (num + 1)).css("color", "green")
            };
            $("#stream-status-" + (num + 1)).html(streaming);
        });
    };
});
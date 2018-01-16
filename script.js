var twitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
$(document).ready(function () {
    for (i = 0; i < twitchers.length; i++) {
        getUserInfo(i);
    };

    function getUserInfo(num) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + twitchers[num] + "?callback=?", function (json) {
            $("#channel-info-" + (num + 1)).html('<img src="' + json.logo + '" class="profile-pic">' + json.display_name);
        });
    };
});
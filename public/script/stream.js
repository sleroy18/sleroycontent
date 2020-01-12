$(document).ready(function () {

    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    var statusURL = "https://www.googleapis.com/youtube/v3/channels"
    var options = {
        part: "snippet",
        key: "AIzaSyCThCNnyf-3Gl7ECyKfhCfL9hf2iXY7rmE",
        maxResults: 20,
        playlistId: "LL8GBFCNFems1_g4XEE3OVaQ"
    }

    var statusOptions = {
        part: "id",
        mine: true,
        key: "AIzaSyCThCNnyf-3Gl7ECyKfhCfL9hf2iXY7rmE"
    }


    function loadVideos() {

        // $.getJSON(URL, options, function(data){
        //     console.log(data);
        // });

        $.getJSON(statusURL, statusOptions, function(data){
            console.log(data);
        })

        // $.ajax({
        //     url: URL,
        //     type: 'GET',
        //     options,
        //     success: function(res, status) {
        //         console.log(data);
        //         console.log(status);
        //     },
        //     error: function (res) {
        //         console.log("error:" + res);
        //     }
        // });
    }

    loadVideos();


    // $.get({
    //     url: 'https://www.googleapis.com/youtube/v3/liveBroadcast?part=snippet&channelId=UCubOLhTBRsFvrTobl2DwZIQ&type=video&eventType=live&key=AIzaSyDMEjeI2pU25ZngJh_639KdnnsILMtwzi8',
    //     success: function(){
    //         console.log("hit");
    //     }
    // }).done(function(res,s){
    //     console.log(res);
    //     console.log(s);
    // });

    // // $.get( "ajax/test.html", function( data ) {
    // //     $( ".result" ).html( data );
    // //     alert( "Load was performed." );
    // //   });
});


//UCXswCcAMb5bvEUIDEzXFGYg
//UC8GBFCNFems1_g4XEE3OVaQ
//https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXswCcAMb5bvEUIDEzXFGYg&type=video&eventType=live&key=AIzaSyDMEjeI2pU25ZngJh_639KdnnsILMtwzi8
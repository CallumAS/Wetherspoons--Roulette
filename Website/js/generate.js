$(document).ready(function () {
       jQuery.ajaxSetup({
             // Disable caching of AJAX responses 
                 cache: false
             });
    resultText = $('#resultText');
    reroll = $('#reroll');
    console.log(reroll);
        function generate() {
		resultText.html('please be patient..');
        $.ajax({
            method: 'GET',
            url: 'https://wetherspoons.club/api/index.php',
            headers: {
                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language':'en-GB,en-US;q=0.9,en;q=0.8',
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
           },
            success: function (response) { // What to do if we succeed
                 data = response;
                 console.log(data);
				window.setTimeout(function(){
				    resultText.html(data);
				}, 1000);
            }
        });
    }
    
        reroll.click(function (e) {
        generate();
        });
        generate();
});
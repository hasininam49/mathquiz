function addUser(){
    player1_name = document.getElementById("user1").value;
    player2_name = document.getElementById("user2").value;
        
        localStorage.setItem("player1_name", player1_name);
        localStorage.setItem("player2_name", player2_name);
        
    window.location.replace("game.html");
    
    console.log(Yay);
}   

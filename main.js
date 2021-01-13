
function login(){
    player1 = document.getElementById("username_input1").value
    localStorage.setItem("Player Name", player1)
    window.location = "game_page.html"

    player2 = document.getElementById("username_input2").value
    localStorage.setItem("Player Name 2", player2)
    window.location = "game_page.html"
}
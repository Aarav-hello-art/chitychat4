function login() {
       var user = document.getElementById("userinput").value
       localStorage.setItem("username",user)
       window.location = "kwitter_room.html"
}

function addroom() {
       var roomname = document.getElementById("roomname").value
       localStorage.setItem("roomname",roomname)
       window.location = "chitychat.html"
}

function logout() {
       window.location = "index.html"
}



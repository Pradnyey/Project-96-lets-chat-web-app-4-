
function addUser()
{
    user_name = document.getElementById("user_name");
    localStorage.setItem("user name", user_name)
    window.location = "kwitter_room.html"
    current_user = localStorage.getItem("user_name", user_name);
}
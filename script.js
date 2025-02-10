document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'You clicked the button!';
});
function toggleImage(){
    let img = document.getElementById("kitty");
    img.style.display = (img.style.display === "none" || img.style.display === "") ? "block" : "none";
}
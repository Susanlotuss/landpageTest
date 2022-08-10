const likeHeart = document.querySelector("#likeAnimation");

likeHeart.addEventListener("click", function() {
    const color = likeHeart.style.color;

    if (color === "red") {
        likeHeart.style.color = "black";
    } else {
        likeHeart.style.color = "red";
    }
    
})

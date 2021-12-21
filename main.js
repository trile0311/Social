var isLike = document.querySelectorAll(".like");
isLike.forEach(function(value,index){
    isLike[index].addEventListener("click",function(){
        isLike[index].classList.toggle("blue");
    })
})

var isComment = document.querySelectorAll(".comment");
var commentText = document.querySelectorAll(".text_comment");
isComment.forEach(function(value,index){
    commentText.forEach(function(value,index){
        isComment[index].addEventListener("click",function(){
            commentText[index].classList.toggle("open");
        })
    })
})
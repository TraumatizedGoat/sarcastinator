function sarcastinator(words){
    
    var output = "";

    for(i=0; i < words.length; i++){
        if(i % 2 != 0){
            output += words[i].toUpperCase();
        }
        else {
            output += words[i].toLowerCase();
         }   
    }
    return output;
}
// var words = document.querySelector("#yourText").value;
// var shitPost = sarcastinator(words);

$("button").click(function(){
    var words = document.querySelector("#yourText").value;
    var shitPost = sarcastinator(words);
    // $("#outText").text(shitPost);
    document.querySelector("#outText").innerHTML = shitPost;
});

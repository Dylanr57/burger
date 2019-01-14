$(function(){
    $(".devour").on("click", function(event){
        var id= $(this).data("id");
        var newDevour = $(this).data("devoured");

        var devouredState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("changed devoured to " + newDevour);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        });
    });
})
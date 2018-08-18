$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefaul();

        var newBurger = {
            burger_name: $("#order").val().trim(),
            devoured: $("[name-devoured]:checked").val.trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data:newBurger
        }).then(
            function() {
            console.log("created new Order");
            location.reload();
            })
        });

        $(".change-devour").on("click", function(event) {
            var id = $(this).data("id");
            var newDevour = $(this).data("id");

            var newDevourState = {
                devoured: newDevour
            };

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            }).then(
                function() {
                    console.log("changed devour status to", newDevour);
                    location.reload();
                }
            );
        })
});

        
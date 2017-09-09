

$(function () {
        $('.dropBtn').on('click', function (e) { //if dropBtn is clicked
            e.preventDefault();
            var id = $(this).attr('id'); //get the id of the button
            id = id + "Sub"; //concat Sub to target ul's id
            $("#"+id).toggle(); //toggle ul
    });
  });

// var hasBeenClicked = false;
// $(document).click(function () {
//     hasBeenClicked = true;
// });

// if (hasBeenClicked) {
//     console.log("clicked");
//     $(".dropContent").hide();
// }
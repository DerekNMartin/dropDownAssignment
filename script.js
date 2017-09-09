

$(function () {
        $('.dropBtn').on('click', function (e) { //if dropBtn is clicked
            e.preventDefault();
            var id = $(this).attr('id'); //get the id of the button
            id = id + "Sub"; //concat Sub to target ul's id
            $("#"+id).toggle(); //toggle ul
    });
  });

window.onclick = function(e) {
  if (!e.target.matches('.dropBtn')) { //if it wasn't the button that was pressed then...
    $(".dropContent").hide(); //hide any open .dropContent element
  }
}

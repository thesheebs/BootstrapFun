// By default Bootstrap keeps the collapsable nav open when a link is clicked.
// Below is the jQuery used to collapse the navbar back to the hamburger when a link is clicked.
$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
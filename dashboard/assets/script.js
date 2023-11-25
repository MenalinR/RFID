jQuery(function(){
    menuNavigation('dashboard');
});
 function menuNavigation(page){
    var url = "./pages/"+page+".html";

    $.get(url, function(response) {
        $("#ajaxContent").html(response);
    })
    .fail(function() {
        alert("Error loading page: " + url);
    });
 }
 function navigateToAddAdminPage() {
    menuNavigation('addadmin');
}
$(function () {
    // Toggle menu click event
    $(document).on("click", "#menuToggle", function () {
        $(".aside").toggleClass("active");
    });

    // Add click event listeners to sidebar items
    // ...

    // Default content (dashboard) on page load
    // ...
});



//only run scripts if document is ready
$().ready(function () {
    //function to allow "about me" to display info on click
    $("#aboutMeInfo").hide();
    $("#aboutMe").click(function() {
        $("#aboutMeInfo").slideToggle(2000);
    });

    //function to allow "skills and competency" to display info on click
    $("#skillsList").hide();
    $("#skills").click(function() {
        $("#skillsList").slideToggle(2000);
    });

    //function to allow "education" to display info on click
    $("#eduList").hide();
    $("#education").click(function() {
        $("#eduList").slideToggle(2000);
    });

    //function to allow "work experience" to display info on click
    $("#expList").hide();
    $("#exp").click(function() {
        $("#expList").slideToggle(2000);
    });
});
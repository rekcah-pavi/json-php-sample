
function getStudent() {
    var sid = $('#sid').val();
    $.ajax({
        url: 'get_details.php',
        type: 'GET',
        data: {
            sid: sid
         },
        dataType: 'json',
        success: function(response) {
            var studentInfoString = '<p>';
            $.each(response, function(key, value) {
                studentInfoString += key + ': ' + value + '<br> ';
            });
            studentInfoString = studentInfoString.slice(0, -2);
            studentInfoString += '</p>';
            $('#studentInfo').html(studentInfoString);
        },
        error: function(xhr, status, error) {
    $('#studentInfo').html("<p>Error fetching student info: " + error + "</p>");
}

     });
}

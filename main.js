// $('#burguer').click(function () {
//     $(this).remove();
//     $(this).add('#close');
// });

// $('#close').click(function () {
//     $(this).remove();
//     $(this).add('#burguer');
// });

$('#burguer').on('click', function () {
    $('#burguer').hide();
    if ($(this)) {
        $('#close').show();
        $('.navegacion').show();
    }
});
$('#close').on('click', function () {
    $('#burguer').show();
    if ($(this)) {
        $('#close').hide();
        $('.navegacion').hide();
    }
});
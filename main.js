// $('#burguer').click(function () {
//     $(this).remove();
//     $(this).add('#close');
// });

// $('#close').click(function () {
//     $(this).remove();
//     $(this).add('#burguer');
// });

$('#burguer').on('click', function(){
    $('#burguer').hide();
    $('#close').show();
});
$('#close').on('click', function(){
    $('#burguer').show();
    $('#close').hide();
});
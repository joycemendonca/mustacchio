$(function () {
    $('.gallery-img-1 img').click(function () {
        $('.modal').show();
    })
    $('#modal-close-button').click(function () {
        $('.modal').hide()
    })
})

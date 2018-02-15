$(document).ready(function() {
    $('[class^="content"]').on('click', function(e){
        e.preventDefault();
        var numb = this.className.replace('content', '');
        $('[id^="topic"]').hide();
        $('#topic' + numb).show();
    });

});
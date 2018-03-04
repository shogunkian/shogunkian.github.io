$('img').click(function(){
        video = '<iframe width="1068" height="600" style="margin-left:65px;" src="'+ $(this).attr('data-video') +'frameborder="0"</iframe>';
        $(this).replaceWith(video);
    });


$('.sl').slick({
    arrows: false,
    dots: true,
    infinite: true,
    draggable: true
//    asNavFor: '.sl2'
});
$('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
    .on('dblclick', function(){
        $('.slick-dots').css({'display':'none'});
        $('.close').css({'display':'block'});
        $('.sl').css({'height':'80vh'});
        $('.sl__slide').css({'height':'80vh'});
        $('.sl2').css({'display':'block'});
        $('.footer').css({'display':'block'});

    //Picture changer
        if($(this).attr('data-image') == 'img/photographer.jpeg'){
            console.log('1');
            $('.img1').attr('src', "img/br1.jpeg");
            $('.img2').attr('src', "img/br2.jpeg");
            $('.img3').attr('src', "img/br3.jpeg");
            $('.img4').attr('src', "img/br4.jpeg");
            $('.img5').attr('src', "img/br5.jpeg");
            $('.img6').attr('src', "img/br6.jpeg");
            $('.parallax').css({'background-image': 'url(img/roadphone.jpeg)'})
        }else if($(this).attr('data-image') == 'img/city1.jpeg'){
            console.log('2');
            $('.img1').attr('src', "img/city1.jpeg");
            $('.img2').attr('src', "img/city7.jpeg");
            $('.img3').attr('src', "img/city3.jpeg");
            $('.img4').attr('src', "img/city4.jpeg");
            $('.img5').attr('src', "img/city5.jpeg");
            $('.img6').attr('src', "img/city6.jpeg");
            $('.parallax').css({'background-image': 'url(img/city2.jpeg)'})
            $('.inParallax').css({'background-color':'#03315a'})
        }else{
            console.log('3');
            $('.img1').attr('src', "img/mou1.jpeg");
            $('.img2').attr('src', "img/mou7.jpeg");
            $('.img3').attr('src', "img/mou3.jpg");
            $('.img4').attr('src', "img/mou4.jpeg");
            $('.img5').attr('src', "img/mou5.jpg");
            $('.img6').attr('src', "img/mou6.jpg");
            $('.parallax').css({'background-image': 'url(img/mou2.jpeg)'})
            $('.inParallax').css({'background-color':'#03315a'})
        }
    
    
    })

//Close button on top of the page.
$('.close')
    .on('click', function(){
        $('.sl2').css({'display':'none'});
        $('.footer').css({'display':'none'});
        $('.close').css({'display':'none'});
        $('.slick-dots').css({'display':'block'});
        $('.sl').css({'height':'100vh'});
        $('.sl__slide').css({'height':'100vh'});

        $('.img1').attr('src', "img/br1.jpeg");
        $('.img2').attr('src', "img/br2.jpeg");
        $('.img3').attr('src', "img/br3.jpeg");
        $('.img4').attr('src', "img/br4.jpeg");
        $('.img5').attr('src', "img/br5.jpeg");
        $('.img6').attr('src', "img/br6.jpeg");
        $('.parallax').css({'background-image': 'url(img/roadphone.jpeg)'})

        // location.reload();
})

//MODAL switch
$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});


const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();
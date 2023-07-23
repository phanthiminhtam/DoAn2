$(document).ready(function(){
    $('.btn-bts').click(function(){
        addToCart({id:'01', image:'images/anhSP/spkm1.jpg', price:350000, name:'Gel Dưỡng Ẩm Im From Vitamin Tree Water Gel'});
        $('.cart').css({'transform': 'scale(1)'});
        $('.manhinh').css({'display':'block' });
    })
    $('.manhinh').click(function(){
        $('.cart').css({'transform': 'scale(0)'});
        $('.manhinh').css({'display':'none'});
    })
    $('.btn-bts2').click(function(){
        addToCart({id:'02', image:'images/anhSP/spm2.jpg', price:35000, name:'Sáp Dưỡng Đa Năng Vaseline Original Healing Jelly 49gr'});
        $('.cart').css({'transform': 'scale(1)'});
        $('.manhinh').css({'display':'block' });
    })
    $('.btn-bts3').click(function(){
        addToCart({id:'03', image:'images/anhSP/spm1.jpg', price:160000, name:'Bút Sáp Màu Mắt Và Kẻ Mắt Nước NongChat Browit Eyemazing Shadow & Liner'});
        $('.cart').css({'transform': 'scale(1)'});
        $('.manhinh').css({'display':'block' });
    })
})
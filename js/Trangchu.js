//slide_show
var list = document.getElementsByClassName("silde-img");
var index = 0;
function Init(){
    if(list && list.length>0)
    {
        for(let x of list)
        {
            x.style.display = 'none';
        }
        list[index].style.display='block';
    }
}
function showL(){
    if(list && list.length > 0)
    {
        for(let x of list)
        {
            x.style.display='none';
        }
        if(index<list.length-1)
            index=index+1;
        else 
            index=0;
        list[index].style.display='block';
    }
}
function showR(){
    if(list && list.length > 0)
    {
        for(let x of list)
        {
            x.style.display='none';
        }
        if(index>0)
            index=index-1;
        else 
            index=list.length-1;
        list[index].style.display='block';
    }
}
Init();
setInterval(function(){
    showL()
},3500)
//messenger

$(document).ready(function(){
    $('.contact_wrap_icon').click(function(){
        $('.messenger_ngoai').css({'transform': 'scale(1)'});
    })
    $('.bacham_dong').click(function(){
        $('.messenger_ngoai').css({'transform': 'scale(0)'});
    })
})

// mũi tên
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.muiten_co').fadeIn();
        }
        else
        {
            $('.muiten_co').fadeOut();
        }
    });
    $('.muiten_co').click(function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });
})
var tt=0;
//sanphamshow
$(document).ready(function(){
    var index=0;
    $('.left').click(function(){
        if(index!=0){
            tt=tt+230;
            $('.sanpham_box').css({'transform': `translateX(${tt}px)`})
            index-=1
        }
    })
    $('.right').click(function(){
        if(index<6){
            tt=tt-230;
            $('.sanpham_box').css({'transform': `translateX(${tt}px)`})
            index+=1;
        } 
    })
    $('.spmL').click(function(){
        if(index!=0){
            tt=tt+230;
            $('.spm').css({'transform': `translateX(${tt}px)`})
            index-=1
        }
    })
    $('.spmR').click(function(){
        if(index<6){
            tt=tt-230;
            $('.spm').css({'transform': `translateX(${tt}px)`})
            index+=1;
        } 
    })
})



function convertVND(number){
    if(number==0){return '0đ'}
    var str=JSON.stringify(number);
    var result=""
    var length=str.length
    var count=0
    for(var i=length-1; i>=0; --i){
        if(count%3==0&&count!=0){
            result=str[i]+'.'+result
        }
        else{
            result=str[i]+result
        }
        count++
    }
    return result
}
var list = JSON.parse(localStorage.getItem('Cart')) || [];
function LoadData(){
    var str = "";
    var n = 0;
    var t = 0;
    for (x of list)
    {
        t += x.price * x.quantity;
        str += ` <tr>
                        <td style="width: 90px; height: 90px;"><img src="`+x.image+`" alt="" class="img_anh1"></td>
                        <td>
                            <div class="ten_item_th">
                                <a href="">`+ x.name+`</a>
                                <div class="gia_ban_th">
                                    <span class="price-sc">`+convertVND(x.price)  +`₫</span>
                                    <span class="pull-right price-all" style="margin-left: 215px;">`+convertVND(x.price * x.quantity)+`₫</span>
                                </div>
                            </div>
                        </td>
                </tr> `; 
    }
    $('.cart_th').html(str);
    $(".fx").text(convertVND(t)+'₫');
}
LoadData();
function ThanhToan() {
    window.location.href = "thanhtoan.html";
}



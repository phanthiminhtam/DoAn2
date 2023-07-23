//Thêm sản phẩm vào giỏ hàng
var list = JSON.parse(localStorage.getItem('Cart')) || [];
function  addToCart(item){
    item.quantity = 1;
    if (localStorage.getItem('Cart') == "") 
    {
        list = [item];
    } 
    else 
    {
        let ok = true;
        for (let x of list) 
        {
            if (x.id == item.id) 
            {
                x.quantity += 1;
                ok = false;
                break;
            }
        }  
        if(ok)
        {
            list.push(item); 
        } 
    }
    localStorage.setItem('Cart', JSON.stringify(list));
    alert("Đã thêm giở hàng thành công");
    LoadData();
}
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
    return result+'đ'
}
//load phần tử đó lên giỏ hàng theo đúng định dạng
function LoadData(){
    var str = "";
    var n = 0;
    var t = 0;
    for (x of list) {
        t += x.price * x.quantity;
        str += `<div class="cart_item">
        <table>
            <tr>
                <td style="width: 90px; height: 90px;"><img src="`+x.image+`" alt="" class="img_anh1"></td>
                <td>
                    <i onclick="Xoa(`+ x.id + `)" class="fa fa-times fa-lg"></i>
                    <div class="ten_item">
                        <a href="">`+x.name+`</a>
                        <div class="gia_ban">
                            <span class="price-sc">`+ x.price +`</span>
                            <span class="pull-right price-all">`+ x.price * x.quantity +` ₫ </span>
                        </div>
                    </div>
                </td>      
            </tr>      
        </table>
        </div> `;
    }
    $('.cart_chitiet').html(str);
    $(".fx").text(convertVND(t));
}
LoadData();
function ThanhToan() {
    window.location.href = "thanhtoan.html";
}
function XoaCart() {
    localStorage.setItem('Cart', null);
    location.reload();
}
function Xoa(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list.splice(index, 1);
    }
    LoadData();
}
function updateCart() {
    localStorage.setItem('Cart', JSON.stringify(list));
     alert("Đã cập nhật thông tin giở hàng thành công");
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1; 
    }
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >=1) {
        list[index].quantity -= 1; 
    }
    LoadData();
}
function updateQuantity(id) {
    var quantity = Number($('#q_'+id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && quantity >=1) {
        list[index].quantity = quantity; 
    }
    LoadData();
}
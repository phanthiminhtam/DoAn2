var type=document.getElementById('Id_back_add_type');//loại mỹ phẩm
var back=document.getElementById('Id_back_add_type');
var mypham=document.getElementById('Id-product-mp');//mỹ phẩm
var types=document.getElementById('Id-product-type');
var supplier = document.getElementById('Id-product-supplier');//nhà cung cấp
var unconfirmed=document.getElementById('Id-unconfirmed_order');//đơn hàng chưa xác thực
var confirmed=document.getElementById('Id-order_confirmed');//đơn hàng đã xác thực
var delivered=document.getElementById('Id-order_delivered');//đơn hàng đã giao
var invoice_enter=document.getElementById('Id-invoice_enter');//đơn hàng nhập
var invoice_details=document.getElementById('Id-invoice_details');//chi tiết đơn hàng bán
//thêm loại sp

$("#mypham_type").click(function(){
    types.style.display="block";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    mypham.style.display="none";
});

$("#mypham").click(function(){  
    mypham.style.display="block";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
});
//nhà cung cấp
$("#supplier").click(function(){  
    supplier.style.display="block";
    types.style.display="none";
    mypham.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
});
//
$("#unconfirmed_order").click(function(){
    unconfirmed.style.display="block";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
});
$("#order_confirmed").click(function(){
    confirmed.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
});
$("#order_delivered").click(function(){
    delivered.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
});
$("#invoice_enter").click(function(){
    invoice_enter.style.display="block";
    types.style.display="none";
    mypham.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_details.style.display="none";
});
$("#invoice_details").click(function(){
    invoice_details.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
})
var data=[];
//Thêm loại mỹ phẩm
$("#Id_add_type").click(function(){
    $("#Id_back_add_type").show();
});
function  addItem(){
    var ghost=document.getElementById('ghost_type').value;
    var name=document.getElementById('name_type').value;
    var description=document.getElementById('description_type').value;
    var item={
        MaSP: ghost,
        TenSP: name,
        Mota: description
    }
    data.push(item);
    showItem();
}
function showItem(){
    table=` <tr id="1">
    <td id="ghost1">MaSP</td>
    <td id="name1">TenSP</td>
    <td id="made1">Mota</td>
    <td><button class="btn_edit" onclick="editHtmlTbleSelectedRow('ghost1','name1','made1')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>
    <td><button class="btn_remove" onclick="xoa1('1')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>
    </tr>`
    for(let i=0; i<data.length;i++)
    {
        table+=`  <tr id="1">
    <td id="ghost1">MaSP</td>
    <td id="name1">TenSP</td>
    <td id="made1">Mota</td>
    <td><button class="btn_edit" onclick="editHtmlTbleSelectedRow('ghost1','name1','made1')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>
    <td><button class="btn_remove" onclick="xoa1('1')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>
    </tr>`
    }
    document.getElementById('table_type').innerHTML=table
}

$("#exit_type").click(function(){
    $("#Id_back_add_type").hide();
})

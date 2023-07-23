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
var sum=document.getElementById('thongke');
//Thêm loại mỹ phẩm
$("#mypham_type").click(function(){
    types.style.display="block";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    mypham.style.display="none";
    sum.style.display="none";
});
//Thêm mỹ phẩm
$("#mypham").click(function(){  
    mypham.style.display="block";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    sum.style.display="none";
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
    sum.style.display="none";
});
//đơn hàng chưa xác thực
$("#unconfirmed_order").click(function(){
    unconfirmed.style.display="block";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    sum.style.display="none";
});
//đơn hàng đã xác thực
$("#order_confirmed").click(function(){
    confirmed.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    sum.style.display="none";
});
//đơn hàng đã giao
$("#order_delivered").click(function(){
    delivered.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    invoice_enter.style.display="none";
    invoice_details.style.display="none";
    sum.style.display="none";
});
//đơn hàng nhập
$("#invoice_enter").click(function(){
    invoice_enter.style.display="block";
    types.style.display="none";
    mypham.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_details.style.display="none";
    sum.style.display="none";
});
//đơn hàng bán
$("#invoice_details").click(function(){
    invoice_details.style.display="block";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
    sum.style.display="none";
})
$('#statistical').click(function(){
    sum.style.display="block";
    invoice_details.style.display="none";
    mypham.style.display="none";  
    types.style.display="none";
    supplier.style.display="none";
    unconfirmed.style.display="none";
    confirmed.style.display="none";
    delivered.style.display="none";
    invoice_enter.style.display="none";
})
$("#Id_add_type").click(function(){
    $("#Id_back_add_type").show();
});
//thêm loại sản phẩm
var list= JSON.parse(localStorage.getItem('typeProduct')) || [];
function loaddata(){
    var str=`<tr>
    <th>Mã loại mỹ phẩm</th>
    <th>Tên loại mỹ phẩm</th>
    <th>Mô tả</th>
    <th>Sửa</th>
    <th>Xóa</th>
    </tr>`
    for(var x of list){
        str += `<tr class="motasp">
        <td >${x.ma}</td>
        <td >${x.ten}</td>
        <td>${x.mota}</td>
        <td><button class="btn_edit" onclick="Sua('${x.ma}')" ><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>
        <td><button class="btn_remove" onclick="Xoa('${x.ma}')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>
        </tr>`
    }
    $("#table_type").html(str);
}

function addToTypeProduct(){     
    let ma=document.getElementById('ghost_type').value;
    let ten=document.getElementById('name_type').value;
    let mota=document.getElementById('description_type').value;
    let item=
    {
        ma: ma,
        ten:ten,
        mota:mota
    }
    if((list.findIndex(a=>a.ma==ma))==-1){
        list.push(item);
        localStorage.setItem('typeProduct',JSON.stringify(list));
        loaddata();
    }
    else{
        alert("Mã này đã tồn tại vui lòng nhập lại")
    }        
}               

function Update(){
    let ma=document.getElementById('ghost_type').value;
    let ten=document.getElementById('name_type').value;
    let mota=document.getElementById('description_type').value;
    let item=
    {
        ma: ma,
        ten:ten,
        mota:mota
    }
    for (x of list) {
        if (x.ma == ma) {
            x.ten = ten;
            x.mota = mota;
            break;
        }
    }
    localStorage.setItem('typeProduct',JSON.stringify(list));
    loaddata();            
    
}

function Sua(ma){
    $("#Id_back_add_type").css("display", "block")
    for(var x of list){
        if(x.ma==ma){
            $("#ghost_type").val(x.ma);
            $("#name_type").val(x.ten);
            $("#description_type").val(x.mota);
            break;
        }
    }           
}
function Xoa(ma){
    if(confirm("Bạn chắc chắn muốn xóa!")){
        for(var i = 0; i < list.length; i++){
            if(list[i].ma==ma){
                list.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('typeProduct',JSON.stringify(list))
        loaddata();
    }  
};
loaddata();



//thêm loại mỹ phẩm
// $("#add_type").click(function(){
//     var ghost=document.getElementById('ghost_type').value;
//     var name=document.getElementById('name_type').value;
//     var description=document.getElementById('description_type').value;
//     var table = document.querySelector('#table_type');
//         var newRow = table.insertRow(table.rows.length);
//         var cell1 = newRow.insertCell(0);
//         var cell2 = newRow.insertCell(1);
//         var cell3 = newRow.insertCell(2);
//         var cell4=newRow.insertCell(3);
//         var cell5=newRow.insertCell(4);
    
//         cell1.innerHTML = ghost;
//         cell2.innerHTML = name;
//         cell3.innerHTML = description;
//         cell4.innerHTML = '<td><button class="btn_edit"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>';
//         cell5.innerHTML='<td><button onclick="editItem(this)" class="btn_remove"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>';
//         $("#Id_back_add_type").hide();
// });

// $("#Id_add_mp").click(function(){
//     $("#Id_back_add_mp").show();
// });
//thêm mỹ phẩm
sl=1;
$("#add_mp").click(function(){
var ghost=document.getElementById('ghost_mp').value;
var name=document.getElementById('name_mp').value;
var type=document.getElementById('ghost_type-mp').value;
var im= document.getElementById('blah').src
var screen=document.getElementById('screen_mp').value;
var resolution=document.getElementById('resolution_mp').value;
var num=document.getElementById('num_mp').value;
var price=document.getElementById('price_mp').value;
var sl=44
sl++;
var table = document.querySelector('#table_mp');
   var html= `<tr id="mypham_${sl}">
   <td>${ghost}</td>
   <td>${name}</td>
   <td>${type}</td>
   <td>
       <img src="${im}" class="mupham_img">
   </td>
   <td>${screen}</td>
   <td>${resolution}</td>
   <td>${num}</td>
   <td>${price}</td>
   <td><button class="btn_edit"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>
   <td><button class="btn_remove" onclick="xoa1('${sl}')"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onclick="productDelete('1')"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>
</tr>` 
var cartRow = document.createElement('tr')
cartRow.innerHTML = html
table.append(cartRow);
   $("#Id_back_add_mp").hide();
});

//thêm nhà cung cấp
$("#Id_add_supplier").click(function(){
    $(Id_back_add_supplier).show();
})
$("#add_supplier").click(function(){
    var ghost=document.getElementById('ghost_supplier').value;
    var name=document.getElementById('name_supplier').value;
    var hotline=document.getElementById('hotline_supplier').value;
    var adress=document.getElementById('adress_supplier').value;
    var email=document.getElementById('email_supplier').value;
    
    var table = document.querySelector('#table_supplier');
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
    
        cell1.innerHTML = ghost;
        cell2.innerHTML = name;
        cell3.innerHTML = hotline;
        cell4.innerHTML = adress;
        cell5.innerHTML = email;
        cell6.innerHTML = '<td><button class="btn_edit"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></button></td>';
        cell7.innerHTML='<td><button class="btn_remove"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button></td>';
        $("#Id_back_add_supplier").hide();
});

//thêm hóa đơn nhập
$("#Id_add_type").click(function(){    
    type.style.display="block";
});
$("#Id_add_invoice_enter").click(function(){
    $("#Id_back_add_invoice_enter").show();
});

$("#add_invoice_enter").click(function(){
    var ghost=document.getElementById('ghost_invoice_enter').value;
    var ghost_supp=document.getElementById('ghost_supp').value;
    var date_invoice=document.getElementById('date_invoice_enter').value;
    var into=document.getElementById('into_money').value;

    var table = document.querySelector('#table-invoice_enter');
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4=newRow.insertCell(3);
    
        cell1.innerHTML = ghost;
        cell2.innerHTML = ghost_supp;
        cell3.innerHTML = date_invoice;
        cell4.innerHTML = into;

    $("#Id_back_add_invoice_enter").hide();
});
//thêm chi tiết hóa đơn nhập
$("#Id_add_invoice_details").click(function(){
    $("#Id_back_add_invoice_details").show();
});
$("#add_invoice_details").click(function(){
    var ghost_enter=document.getElementById('ghost_enter').value;
    var ghost_phones=document.getElementById('ghost_mps').value;
    var nums=document.getElementById('num').value;
    var price_phone=document.getElementById('price').value;

      
    var table = document.querySelector('#table-invoice_details');
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4=newRow.insertCell(3);
    
        cell1.innerHTML = ghost_enter;
        cell2.innerHTML = ghost_phones;
        cell3.innerHTML = nums;
        cell4.innerHTML = price_phone;

        $("#Id_back_add_invoice_details").hide();
});
//sua
// function readURL(input) {
//     if (input.files) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah') .attr('src', e.target.result);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }
//xóa hàng
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
  }
  function xoa1(id){
	var xoa=confirm("Bạn muốn xóa không?");
	if(xoa==true){
        document.getElementById(id).remove();
        unbind;
	}
}
//bấm vào dấu X ẩn màn hình thêm
$("#exit_type").click(function(){
    $("#Id_back_add_type").hide();
})
$("#exit_mp").click(function(){
    $("#Id_back_add_mp").hide();
})
$("#exit_unconfirmed_order").click(function(){
    $("#Id_back_add_unconfirmed_order").hide();
})
$("#exit_invoice_enter").click(function(){
    $("#Id_back_add_invoice_enter").hide();
})
$("#exit_invoice_details").click(function(){
    $("#Id_back_add_invoice_details").hide();
})

function editItem(el){
    console.log(el)
}
// function editHtmlTbleSelectedRow(ghost,name,made)
// {
//     $("#Id_back_add_type").show();
//     var code = document.getElementById(ghost).value;
//     names = document.getElementById(name).value;
//     mades = document.getElementById(made).value;

// $("#ghost_type").val = code;
// $("#name_type").val = names;
// $("#description_type").val = price_old;

// }
$(".btn-week").click(function(){
    $(".report-year").css("display","none");
    $(".report-week").css("display","flex");
    $(".btn-week").css({"background-color":"#1f601f","color":"#fff"})
    $(".btn-year").css({"background-color":"#eee","color":"#333"})
})

$(".btn-year").click(function(){
    $(".report-year").css("display","flex");
    $(".report-week").css("display","none");
    $(".btn-year").css({"background-color":"#1f601f","color":"#fff"})
    $(".btn-week").css({"background-color":"#eee","color":"#333"})
})
// $(document).ready(function(){
//     $('.menu_gh').click(function(e){
//         $('.menu_giohang').slideToggle(function(){
//             $('.menu_gh').css("height","200px");
//         });
//     })
// })
$(document).ready(function () {
    var status=0;
    $('.menu_gh').click(function(){
        if(status==0){
            $('.menu_giohang').css({'transform': 'scale(1)'});
            $('.menu_gh').css({'height':'200px'});
            status=1;
        }
        else if(status==1){
            $('.menu_giohang').css({'transform': 'scale(0)'});
            // $('.menu_giohang').css({'transition': '0.2s'});
            $('.menu_gh').css({'height':'50px'});
            status=0;
        }
    }) 
  
    
})

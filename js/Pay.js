function Check_DL() {
    var number = /^[0-9]+$/;
    var hoten = $('#txt_hoten').val();
    if( hoten == ' ' || hoten.length < 10) {
        $('#val-txtName').css({'display':'block','color': 'red'});

        $('#txt_hoten').click(function() {
            $('#val-txtName').css({'display':'none'});
        })
    } else {
        $('#txt_hoten').val();
    }
    var sdt = $('#txt_dienthoai').val();
    if( !sdt.match(number) || sdt  == ' ' || sdt.length != 10 ) {
        $('#val-txtPhone').css({'display':'block','color': 'red'});

        $('#txt_dienthoai').click(function() {
            $('#val-txtPhone').css({'display':'none'});
        })
    } else {
        $('#txt_dienthoai').val();
    }

    var city = $('#slt_qgia').val(); 
    if( city  ==  0) {
        $('#val-txtCity').css({'display':'block','color': 'red'});

        $('#slt_qgia').click(function() {
            $('#val-txtCity').css({'display':'none'});
        })
    } else {
        $('#slt_qgia').val();
    }

    var diachi = $('#txtAdress').val();
    if(  diachi == '' || diachi.length < 10) {
        $('#val-txtAdress').css({'display':'block','color': 'red'});

        $('#txtAdress').click(function() {
            $('#val-txtAdress').css({'display':'none'});
        })
    } else {
        $('#txtAdress').val();
    }
}


//var list = JSON.parse(localStorage.getItem('Cart'));
// function DatHang() {
//     var hoten = $('#txt_hdem').val();
//     var sdt = $('#txt_dienthoai').val();
//     var city = $('#slt_qgia').val(); 
//     var diachi = $('#txtAdress').val();
//     var ghichu = $('#txt_gc').val();
//     var number = /^[0-9]+$/;

//     if(hoten == null || hoten == "") {
//         $('#txt_hdem').val('Sai định dạng họ tên!');
//     } else {
//         $('#txt_hdem').val('*');
//     } 
    
//     // if (hoten == null || hoten == "") {
//     //     alert("Họ tên không được để trống! Vui lòng nhập lại!");
//     //     return false;
//     // } else if (sdt == null || sdt == "") {
//     //     alert("Số điện thoại không được để trống! Vui lòng nhập lại!");
//     //     return false;
//     // } else if (!sdt.match(number) || sdt.length != 10) {
//     //     alert("Số điện thoại không hợp lệ! Vui lòng nhập lại!");
//     //     return false;
//     // } else if (diachi == null || diachi == "") {
//     //     alert("Địa chỉ không được để trống! Vui lòng nhập lại!");
//     //     return false;
//     // } else if (city == null || city =="") {
//     //     alert("Thành phố không được để trống!");
//     //     return false;
//     // }

//     // var str = `
//     //     <section style="text-align: center;">
//     //         <h1>HÓA ĐƠN GIÁ TRỊ GIA TĂNG</h1>
//     //         <div class="ban">(Bản thể hiện hóa đơn mỹ phẩm)</div>
//     //         <div class="ngay">
//     //             <p id="date"></p>
//     //             <script>
//     //                 n = new Date();
//     //                 y = n.getFullYear();
//     //                 m = n.getMonth() + 1;
//     //                 d = n.getDate();
//     //                 document.getElementById("date").innerHTML = "Ngày " + d + " tháng " + m + " năm " + y;
//     //             </script>
//     //         </div>
//     //     </section>

//     //     <div class="le dam">Tên đơn vị bán hàng: Hệ thống cửa hàng BeautyGarden</div>
//     //     <div class="le">Mã số thuế: 3269289058</div>
//     //     <div class="le">Địa chỉ: 89 Chùa Bộc, Đống Đa, Hà Nội</div>
//     //     <div class="le doi">Điện thoại: 0911 584 114</div>
//     //     <div class="le doi">Số tài khoản: 762618652671614</div>
//     //     <div class="le dam">Người mua hàng: `+ hoten + `</div>
//     //     <div class="le">Điện thoại: `+ sdt + `</div>
//     //     <div class="le">Địa chỉ: `+ diachi + `</div>
//     //     <div class="le">Ghi chú: `+ ghichu + `</div>
//     //     <table>
//     //         <tr>
//     //             <th>STT</th>
//     //             <th>Tên sản phẩm</th>
//     //             <th>Số lượng</th>
//     //             <th>Thành tiền</th>
//     //         </tr>
//     // `;
//     // var n = 0;
//     // var t = 0;
//     // var sl = 0;
//     // for (x of list) {
//     //     t += x.price * x.quantity;
//     //     sl += x.quantity;
//     //     str += `
//     //     <tr>
//     //         <td>`+ (++n) + `</td>
//     //         <td>`+ x.name + `</td>
//     //         <td>`+ x.quantity + `</td>
//     //         <td>`+ (x.price * x.quantity) + `</td>
//     //      </tr>
//     //     `;
//     // }
//     // str += `
//     //     <tr>
//     //         <td></td>
//     //         <td class="dam">Tổng</td>
//     //         <td class="dam">`+ sl + `</td>
//     //         <td class="dam">`+ t + `</td>
//     //     </tr>
//     // </table>
//     // <div class="doi dam ky">Người mua hàng</div>
//     // <div class="doi dam ky">Người bán hàng</div>
//     // <div class="doi ky1">(Ký, ghi rõ họ tên)</div>
//     // <div class="doi ky1">(Ký, ghi rõ họ tên)</div>
//     // `;
//     // printHtml(str);
// }
// // function printHtml(data) {
// //     let popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
// //     popupWin.document.write(`
// //         <html>
// //             <head>
// //             <title>Print tab</title>
// //             <style>
// //             * {
// //                 margin: 0;
// //                 padding: 0;
// //             }

// //             table {
// //                 margin-top: 15px;
// //                 width: 100%;
// //             }

// //             body {
// //                 width: 900px;
// //                 margin: 0 auto;
// //             }

// //             tr {
// //                 line-height: 27px;
// //             }

// //             table,
// //             th,
// //             td {
// //                 border: 1px solid black;
// //                 border-collapse: collapse;
// //                 text-align: center;
// //             }

// //             .ngay {
// //                 font-style: italic;
// //                 font-size: 15px;
// //                 margin-bottom: 5px;
// //             }

// //             .ban {
// //                 font-style: italic;
// //                 font-size: 15px;
// //                 margin: 3px 0px;
// //             }

// //             .dam {
// //                 font-weight: bold;
// //             }

// //             .le {
// //                 margin-bottom: 4px;
// //                 font-size: 15px;
// //             }

// //             .doi {
// //                 width: 50%;
// //                 float: left;
// //             }

// //             .ky {
// //                 text-align: center;
// //                 margin-top: 20px;
// //             }

// //             .ky1 {
// //                 font-style: italic;
// //                 text-align: center;
// //                 margin-top: 5px;
// //             }
// //             </style>
// //             </head>
// //             <body onload="window.print();window.close()">${data}</body>
// //         </html>`
// //     );
// //     popupWin.document.close();
// // }
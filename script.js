$(document).ready(function(){
    $(".btn").on("click", function(){
        var product = $("#productName").val();
        addRow(product, 1); 
    });
    $('#productName').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           $('#addBtn').click();
           return false;  
         }
       });
});

function addRow(productName, productQuantity){

    var row = `
    <tr>
        <td>${productName}</td>
        <td><input type=\"number\" class="form-control"></td>
        <td><input type=\"checkbox\"></td>
        <td><i class="fas fa-times"></i></td>
    </tr>
        `;

    $('.table tr:last').after(row);//"<td>" + productName + "</td> <td>" + <input type=\"number\"> + "</td> <td><input type=\"checkbox\"> </td>")

}
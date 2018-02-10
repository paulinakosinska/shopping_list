$(document).ready(function () {
    $(".btn").on("click", function () {
        var product = $("#productName").val();
        addRow(product, 1);
        $("#productName").val("");
    });
    $('#productName').keypress(function (e) {
        var key = e.which;

        // the enter key code
        if (key == 13) {
            $('#addBtn').click();
            return false;
        }
    });
    $(document).on("click", function () {
        $(".remove").on("click", function () {
            remove($(this));
        });
    });
});
function remove(element) {
    element.parent().remove();
}

function addRow(productName, productQuantity) {

    var row = `
    <tr>
        <td>${productName}</td>
        <td><input type="number" id="qty" class="form-control"></td>
        <td><input type="checkbox"></td>
        <td class="remove"><i class="fas fa-times"></i></td>
    </tr>
        `;

    $('.table tr:last').after(row);

}
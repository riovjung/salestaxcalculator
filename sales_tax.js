//Rio Jung
//ISLT_7356
//Week 4 Micro-project
//September 12, 2019 
 
var $ = function (id) {
    return document.getElementById(id); 
};

var calculateTotal = function (subtotal, tax_rate) {
var sales_tax = (subtotal * tax_rate);
	var total = (subtotal + sales_tax);
total = total.toFixed(2);
return total;
};

var processEntries = function () {
var subtotal = parseFloat($("subtotal").value);         // get user entry
var tax_rate = parseFloat($("tax_rate").value);         // get user entry
if (isNaN(subtotal) || isNaN(tax_rate)) {
 alert("Subtotal must be > 0 and < 10000 \n Tax Rate must be > 0 and < 12");
}
else if (subtotal <0 || tax_rate <0) {
 alert("Subtotal must be > 0 and < 10000 \n Tax Rate must be > 0 and < 12");
}
else if (subtotal >10000 || tax_rate > 12) {
 alert("Subtotal must be > 0 and < 10000 \n Tax Rate must be > 0 and < 12");
}
else {
 $("calculateTotal".value = subtotal + sales_tax)
}

// display the results of calculations
$("subtotal").value = subtotal;
$("tax_rate").value = tax_rate;
$("sales_tax").value = sales_tax;
$("total").value = total;
}; 

function clearTextBox() {
document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value = "";
}

function cursorToSubtotal() {
$("subtotal").focus();
}

window.onload = function () {
    $("calculate").onclick = processEntries;
$("calculate").onclick = cursorToSubtotal;
$("clear").onclick = clearTextBox
$("subtotal").focus();


};

$(document).ready(function() {
$("[id^='AAmain']").hide();
$("#AAmain1").show();
$("[id^='AAclick']").click(function() {
var index = $(this).attr('id').replace('AAclick', '');
$("[id^='AAmain']").hide();
$("#AAmain" + index).show();
});

$("[id^='BBmain']").hide();
$("#BBmain2").show();
$("[id^='BBclick']").click(function() {
var index = $(this).attr('id').replace('BBclick', '');
$("[id^='BBmain']").hide();
$("#BBmain" + index).show();
});

$("[id^='CCmain']").hide();
$("#CCmain2").show();
$("[id^='CCclick']").click(function() {
var index = $(this).attr('id').replace('CCclick', '');
$("[id^='CCmain']").hide();
$("#CCmain" + index).show();
});
});

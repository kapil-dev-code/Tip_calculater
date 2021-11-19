function tipvalue(){
    var bill=document.getElementById(`bill_amount`).value;
    var tip_pre=document.getElementById(`percentage_amount`).value;
  var tip=(parseFloat(bill)*parseFloat(tip_pre))/100;
  var total=parseFloat(bill)+parseFloat(tip);
  document.getElementById("tip_amount").value=tip;
  document.getElementById("total_amount").value=total;
}
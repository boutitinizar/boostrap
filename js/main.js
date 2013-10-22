$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
$('#element').tooltip('destroy')
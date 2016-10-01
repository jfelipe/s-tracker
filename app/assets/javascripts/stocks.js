var init_stock_lookup;

init_stock_lookup = function() {

  $('#stock-lookup-form').on('ajax:before', function(event, data, status){
    $('#spinner').show();
  });

  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
    $('#spinner').hide();
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
    $('#spinner').hide();
  });
}

$(function(){
  init_stock_lookup();
});
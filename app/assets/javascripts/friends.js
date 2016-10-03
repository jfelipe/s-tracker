var init_friend_lookup;

init_friend_lookup = function() {

  $('#friend-lookup-form').on('ajax:before', function(event, data, status){
    $('#spinner').show();
  });

  $('#friend-lookup-form').on('ajax:complete', function(event, data, status){
    $('#spinner').hide();
  });

  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('Person was not found.');
  });
}

$(function(){
  init_friend_lookup();
});
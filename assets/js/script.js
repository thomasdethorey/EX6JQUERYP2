// $(function(){
//   $('#green').hover(function(){
//     $('#text').css({'color':'green'});
//   }, function(){
//     $('#text').css({'color':'black'});
//   });
//   $('#red').hover(function(){
//     $('#text').css({'color':'red'});
//   }, function(){
//     $('#text').css({'color':'black'});
//   });
//   $('#blue').hover(function(){
//     $('#text').css({'color':'blue'});
//   }, function(){
//     $('#text').css({'color':'black'});
//   });
// });

$(function(){
  $('.color').hover(function(){
    divColor = $(this).attr('id');
    $('#text').css('color', divColor);
  }, function(){
    $('#text').css('color', '');
  });
});

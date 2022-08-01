  $(function(){
    var sec = 0;
    var min = 0;
    var hour = 0;
    
    var timer;
  
  //start
  $('#start').click(function(){
    sec = 0;
    min = 0;
    hour = 0;
   
    $('#clock').html('00:00:00:00');
    timer = setInterval(countup, 100);
    
    $(this).prop('disabled',true);
     $('#stop,#reset').prop('disabled',false);
  });
  
  //stop
  $('#stop').click(function(){
    clearInterval(timer);
    $(this).prop('disabled', true);
     $('#start,#reset').prop('disabled', false);
  });
  
  //reset
  $('#reset').click(function(){
  sec = 0;
  min = 0;
  hour =0 ;
 
  $('#clock').html('00:00:00:00');
    clearInterval(timer);
    
    $('#stop,#reset').prop('disabled', true);
     $('#start').prop('disabled', false);
  });

//countup
function countup()
{
  sec +=1;
  
  if (sec >10){
    sec = 0;
    min += 1;
  }
  
  if(min >10){
    min = 0;
    hour +=1;
  }
  
  //ume
  sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('0' + hour).slice(-2);

    $('#clock').html(hour_number + ':' +  min_number + ':' + sec_number);
  }
  
});


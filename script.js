
      let timeleft = 11;
      let downloadTimer = setInterval(()=>{
      if(timeleft==1){
          document.getElementById("countdown").textContent = 'Happy Independence Day';
      }else{
          timeleft--;
          document.getElementById("countdown").textContent = timeleft; 
      }},1000);



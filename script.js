function countdown(number, callback) {
    if (number > 0) {
      setTimeout(() => {
        console.log(number);
        document.getElementById('countdown').textContent = number;
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  countdown(10, function() {
    document.getElementById('countdown').textContent = 'Happy Independence Day';
  });
  
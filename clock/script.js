function setISTTime() {
    const clockHour = document.getElementById('hour');
    const clockMinute = document.getElementById('minute');
    const clockSecond = document.getElementById('second');
  
    const now = new Date();
    const ISTOffset = 5.5 * 60 * 60 * 1000; // IST offset 
    const indianTime = new Date(now.getTime() + ISTOffset);
  
    const hours = indianTime.getHours();
    const minutes = indianTime.getMinutes();
    const seconds = indianTime.getSeconds();
  
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;
  
    clockHour.style.transform = `rotate(${hourDegrees}deg)`;
    clockMinute.style.transform = `rotate(${minuteDegrees}deg)`;
    clockSecond.style.transform = `rotate(${secondDegrees}deg)`;
  }
  
  setInterval(setISTTime, 1000); // Update every second
  
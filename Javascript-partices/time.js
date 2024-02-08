

let a = "10:00 AM - 12:30 PM";
let timeSplit = a.split(' - ');
let timeStart = timeSplit[0];
let timeEnd = timeSplit[1];


function getMintes(time){
   const timeSplit = time.split(" ");
   const onlyTime = timeSplit[0];
   const AMORPM = timeSplit[1];
   const onlyTimeSplit = onlyTime.split(":");
   let hours = Number(onlyTimeSplit[0]);
   // set 12 hr 
   if(AMORPM === 'AM' && hours == 12){
    hours = 0;
   }
   // covert to 24 hrs
   if(AMORPM === 'PM' && hours != 12 && hours >= 1){
    hours = hours + 12;
   }
   // covert minutes to hrs
   const minutes = Number(onlyTimeSplit[1] /60);
   return hours+minutes;
}

let outputStart = getMintes(timeStart);
let outputEnd = getMintes(timeEnd);
console.log("outputStart",outputStart);
console.log("outputEnd",outputEnd);
let diff = outputEnd - outputStart;
let hours = Math.floor(diff);
let minutes = Math.round((diff - hours) * 60);
console.log(hours,minutes);

const getSleepHours = day => {
    if(day === 'Monday'){
      return 8;
    } else if (day === 'Tuesday'){
      return 7;
    } else if (day === 'Wednesday'){
      return 7;
    } else if (day === 'Thursday'){
      return 8;
    } else if (day === 'Friday'){
      return 9;
    } else if (day === 'Saturday'){
      return 9;
    } else if (day === 'Sunday'){
      return 9;
    } else {
      return 'Error, invalid day';
      }
    };
    
    const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 +11;
      /*getSleepHours('Monday') +
      getSleepHours('Tuesday') +
      getSleepHours('Wednesday') +
      getSleepHours('Thursday') +
      getSleepHours('Friday') +
      getSleepHours('Saturday') +
      getSleepHours('Sunday');*/
    
    const getIdealSleepHours = idealHours => idealHours * 7;
    
    const calculateSleepDebt = () => {
    
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(8);
    
      console.log('Actual Sleep Hours: ' + actualSleepHours);
      console.log('Ideal Sleep Hours: ' + idealSleepHours);
    
    
    if (actualSleepHours === idealSleepHours){
      console.log(`You've got the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You've got more sleep than needed.`);
    } else {
      console.log(`You should get some rest!`);
      }
    };
    
    calculateSleepDebt();
    
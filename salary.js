const prompt = require('prompt');
//calls prompt module
prompt.start();

prompt.get(['basicSalary'], function (err, salary1)
//returns value input keyed-in through commanline
 {


const payee =()=>{
    // computes NSSF
    const nssfMin = 0.06;
    let nssf2 = 0;
    
    if (salary1.basicSalary <= 6000){
        nssf2 += Math.floor(salary1.basicSalary * nssfMin);
    }
    else if(salary1.basicSalary > 6000 && salary1.basicSalary <=18000){
        nssf2 += Math.floor((salo.basicSalary-6000) * nssfMin + 360);
    }
    else{
        nssf2 += 1080;
    }


    let salary = salary1.basicSalary - nssf2;
    let personalRelief = 2400;
    
  // returns an error message
  if (err) { return onErr(err);
  }
  let paye=0;
    let nhif = 0;
    //initializes payee and NHIF to value 0
//subtract NSSF from basic salary


    if (salary<=24000) {
          paye += 2400;
          //updates the salary as 2400 when PAYE is 2400 or less
    } else if(salary>24000 && salary<=32333){
        paye += Math.floor(((salary-24000)*0.25) + 2400)
        //if salary is more than 24000 and less than 32333
        //it subtracts 24000 from salary and the multiply by 0.25 the add 2400 
    }
    else if(salary>32333){
        paye += Math.floor(((salary-32333)*0.3) + 2083.33 + 2400);
        //checks if the salary is more than 32333
        //if so, takes salary less 32333 multiply by 0.3
        //the add 2083.33 and 2400 to the value obtained
    }



    //Uses if-else statement to know the NHIF to be deducted
    if (salary1.basicSalary >= 1000) {
        if (salary1.basicSalary  >= 1000 && salary1.basicSalary  <= 5999) {
            nhif += 150;
        } else if (salary1.basicSalary  >= 6000 && salary1.basicSalary  <= 7999) {
            nhif += 300;
        } else if (salary1.basicSalary  >= 8000 && salary1.basicSalary  <= 11999) {
            nhif += 400;
        } else if (salary1.basicSalary  >= 12000 && salary1.basicSalary  <= 14999) {
            nhif += 500;
        } else if (salary1.basicSalary  >= 15000 && salary1.basicSalary  <= 19999) {
            nhif += 600;
        } else if (salary1.basicSalary  >= 20000 && salary1.basicSalary  <= 24999) {
            nhif += 750;
        } else if (salary1.basicSalary  >= 25000 && salary1.basicSalary  <= 29999) {
            nhif += 850;
        } else if (salary1.basicSalary  >= 30000 && salary1.basicSalary  <= 34999) {
            nhif += 900;
        } else if (salary1.basicSalary  >= 35000 && salary1.basicSalary  <= 39999) {
            nhif += 950;
        } else if (salary1.basicSalary  >= 40000 && salary1.basicSalary  <= 44999) {
            nhif += 1000;
        } else if (salary1.basicSalary  >= 45000 && salary1.basicSalary  <= 49999) {
            nhif += 1100;
        } else if (salary1.basicSalary  >= 50000 && salary1.basicSalary  <= 59999) {
            nhif += 1200;
        } else if (salary1.basicSalary  >= 60000 && salary1.basicSalary  <= 69999) {
            nhif += 1300;
        } else if (salary1.basicSalary  >= 70000 && salary1.basicSalary  <= 79999) {
            nhif += 1400;
        } else if (salary1.basicSalary >= 80000 && salary1.basicSalary  <= 89999) {
            nhif += 1500;
        } else if (salary1.basicSalary  >= 90000 && salary1.basicSalary  <= 99999) {
            nhif += 1600;
        } else if (salary1.basicSalary  >= 100000) {
            nhif += 1700;
        }
    } else {
        nhif += 0;
    }

    //paye is obtained by subtracting personal relief
    //net monthly salary is obtained by subtracting PAYE, NHIF AND NSSF.
    let pay = paye-personalRelief;
    let pow =salary1.basicSalary  - (pay + nhif  + nssf2);
    console.log('  Basic Salary: ' + salary1.basicSalary);
    console.log('  Paye without relief: ' + paye);
    console.log('  NHIF Contribution: ' + nhif);    
    console.log('  nssf contribution: ' + nssf2);
    console.log('  paye with relief: ' + pay); 
    console.log('  Net Monthly Salary: ' + pow);
}


payee();
});



function onErr(err) {
    console.log(err);
    return 1;
  }
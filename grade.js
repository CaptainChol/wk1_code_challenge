const prompt = require('prompt');

prompt.start();

prompt.get(['marks'],

function grade (error, knock) 
{

    console.log('  Marks: ' + knock.marks);
   
    if (error) 
    
    { 
        return errorDisplay(error);
    }
 
    if(knock.marks >=101 || knock.marks < 0)
    {
        console.log('Invalid Entry');
        
             }
    else{
        if(knock.marks>79 && knock.marks <= 100 ){
            console.log('You have Attainde A');
            }
            else if (knock.marks<79 && knock.marks >=60){
                console.log('You have Attainde B');
            }
            else if (knock.marks<60 && knock.marks >=49){
                console.log('You have Attainde C');
            }
            else if (knock.marks<49 && knock.marks >=40){
                console.log('You have Attainde D');
            }
            else if (knock.marks<40 && knock.marks >=0){
                console.log('You have Attainde E');
            }
      
           }
   
    });


    function errorDisplay(error) {
        console.log(error);
        return 1;
    }
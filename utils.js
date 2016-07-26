function processGrade(grade){
    if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    console.log("There is no grade like that");
    }
    
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }else{

 if(grade % 2){  //even
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }
   if(grade >100){  //greaterthan100
    console.log("Grade is overkill");
    }
  }
   if(grade ="INC"){  //INC
    console.log("Your grade is incomplete");
    }
   else if(grade = "DROP")  //DROP
    console.log("You have drop the subject");
    } 


module.exports = {
    processTheGrade:processGrade
}
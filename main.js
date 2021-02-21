var currentDateh2=document.querySelector('h2');

Date.getCurrentMonthNameAbbrStr=function(monthIndex){
    if(monthIndex==0){
        return 'Jan.';
    }else if(monthIndex==1){
        return 'Feb.';
    }else if(monthIndex==2){
        return 'Mar.';
    }else if(monthIndex==3){
        return 'Apr.';
    }else if(monthIndex==4){
        return 'May';
    }else if(monthIndex==5){
        return 'June';
    }else if(monthIndex==6){
        return 'July';
    }else if(monthIndex==7){
        return 'Aug.';
    }else if(monthIndex==8){
        return 'Sep.';
    }else if(monthIndex==9){
        return 'Oct.';
    }else if(monthIndex==10){
        return 'Nov.';
    }else{
        return 'Dec.';
    }
};
Date.getCurrentDayOfTheWeekNameAbbrStr=function(dayIndex){
    if(dayIndex==0){
        return 'Sun.';
    }else if(dayIndex==1){
        return 'Mon.';
    }else if(dayIndex==2){
        return 'Tue.';
    }else if(dayIndex==3){
        return 'Wed.';
    }else if(dayIndex==4){
        return 'Thu.';
    }else if(dayIndex==5){
        return 'Fri.';
    }else{
        return 'Sat.';
    }
};

var currentDate=new Date();
var currentMonthNameAbbrStr=Date.getCurrentMonthNameAbbrStr(currentDate.getMonth());
var currentDayOfTheWeekNameAbbrStr=Date.getCurrentDayOfTheWeekNameAbbrStr(currentDate.getDay());
var currentDayOfTheMonthNum=currentDate.getDate();
var currentYearNum=currentDate.getFullYear();

currentDateh2.innerText=currentDayOfTheWeekNameAbbrStr+', '+currentMonthNameAbbrStr+' '+currentDayOfTheMonthNum+', '+currentYearNum;
var qs; var currQ = 0; var cAns = 0;
var abcd = ['a','b','c','d']; 
var results = document.querySelector("#res");
function makeCourse() 
{document.querySelector('#form').style.display="none";
var pop = document.querySelector("#pop").style; pop.display = "block"; pop.color="#666"; pop.float="left"; pop.width="6vw"; pop.marginTop="3vw"; }
var currentCourse ="";
 //**************************Hereo!!

 if( !(localStorage["questions"])) {  
  let thereBeLight = {};
  localStorage.setItem("questions", JSON.stringify(thereBeLight));    }

 var item = localStorage.getItem("questions") ;
var questions = JSON.parse( item ) ; 
let i; let len=Object.keys(questions).length; 

var crs=Object.keys(questions) ;

/// Here's TEST!!
function test(){
document.querySelector("#res").innerHTML=0;
qs = Object.keys(  questions[currentCourse]  );  console.log("We typed currC : " + currentCourse);
var len = qs.length ;
document.querySelector("#questions").innerHTML = " This course has a total of : "+ len  + " Questions.  "; 
if( len < 4) {return;}
document.querySelector("#total").innerHTML = len;
var t=document.querySelector('.test');t.style.display="block"; currQ = 0;
document.querySelector("#sol").innerHTML = qs[0];
 cAns = num = Math.floor(Math.random() * Math.floor(4));
document.querySelector("#a"+num).innerHTML = questions[currentCourse][qs[0]]       ;  
cAns = num;
var loksha ;
for(var i=0;i<4;i++)
{ if( i== num ){continue;}
var Rando = Math.floor(Math.random() * len-1); 

loksha = qs.filter(e=> qs.indexOf(e)!=cAns);
let elem = loksha[Rando];
  document.querySelector(`#a${i}`).innerHTML=  questions[currentCourse][  elem ] ;loksha.pop()
 }
}
var inf=document.querySelector("#info");
///       ADD THeM ALL !! /////////***********
for(i=0;i<len;i++)
{ var mia = document.createElement("LI");
 var turtle=  crs[i]; mia.id = turtle; mia.innerHTML = turtle;  
var ul= document.getElementById("courses-list"); ul.appendChild(mia);
mia.onclick= function(){currentCourse = inf.innerHTML = this.innerHTML ; test();}; }

//var suckDick = JSON.stringify(questions["fathermother"]);

function addQuestions() 
{ document.querySelector('.test').style.display = "none";
document.querySelector('#pop').style.display = "none";
    document.querySelector("#form").style.display = "block";}

function add_it() {
questions[currentCourse][document.querySelector("#Q").value]= document.querySelector('#A').value;
document.querySelector("#Q").value = ""; document.querySelector('#A').value = "";
document.querySelector("#questions").innerHTML = " This course has a total of : " + Object.keys(questions[currentCourse]).length + " Questions.  ";

}

function quit(){
localStorage["questions"]=JSON.stringify(questions);
document.querySelector("#form").style.display = "none";}

/* Fucking coro
function coro()
{ var info=document.querySelector("#info"); info.innerHTML = course.id ; info.style.width = "100%"  ; 
    document.querySelector("#main"); 

document.querySelector("#courses-list").appendChild(course);
var ret = Object.keys(questions[course.id]) ? 
for(var fuck in  )
{ let ref = document.createElement("LI"); ref.innerHTML = fuck; document.querySelector("#questions").appendChild(ref); 
    }
} */

/*// *************  test *************************** */


// Here is SaveCourse !
/////////////////////////////////////////
function saveCourse() 
{
var nom = document.getElementById("course").value;
questions[nom] = {} ; 

//qs=Array.from(Object.keys(questions[currentCourse] ) ) ;

var pop = document.querySelector("#pop").style.display = "none";
    
    var info=document.querySelector("#info");
    
var course = document.createElement("TR"); 
course.href ="#";
course.innerHTML = nom; 
course.setAttribute("id", nom);
course.style.width = "100%";
course.onclick = ()=>{currentCourse = info.innerHTML = nom; test();};
 var hov = () =>course.style.backgroundColor ="rgb(100,100,100,0.5)"; course.onmouseover = hov ; 
 var out = () => course.style.backgroundColor = "white"; course.onmouseout = out ;
course.questions = {} ; 
    document.querySelector("#main"); 

document.querySelector("#courses-list").appendChild(course);

}
///////////////////////////////////

function next()
{ 

results = results ?? document.getElementById("res"); 
qs =Object.keys(questions[currentCourse]);
if(document.querySelector("#r"+cAns).checked == true ){ var x = parseInt(results.innerHTML); x++; results.innerHTML = x;    }
if(currQ>=(qs.length-1)){ alert("Exercise is over. Your result is : " + results.innerHTML ); 
 document.getElementsByClassName("test")[0].style.display = "none";  
return  ;}   /*   Here is where the fun begins         */
currQ+=1;

var sol=document.querySelector('#sol');
sol.innerHTML=qs[currQ];

var num = Math.floor(Math.random() * Math.floor(4 ) );
cAns = num; document.querySelector(`#a${num}`).innerHTML = questions[currentCourse][qs[currQ]]       ; var C_int=0; var lsF = [];
var lsTwo = qs.filter(e=> qs.indexOf(e)!=currQ)
while(C_int<4)
{ 
if(C_int == num) { C_int += 1; continue; }
var rNd = Math.floor(Math.random() * (lsTwo.length -1)  );
if( !lsF.includes(rNd)  ) { 
document.querySelector(`#a${C_int}`).innerHTML=questions[currentCourse][ lsTwo[rNd] ]   ; lsF.push(rNd); C_int+=1; }


}
    
}



















var qs; var currQ = 0; var cAns = 0;
var results = document.querySelector("#res");
const feedback = document.querySelector('#feedback');
function makeCourse() 
{

document.querySelector('#form').style.display="none";
var pop = document.querySelector("#pop").style; pop.display = "block"; pop.color="#666"; pop.float="left"; pop.width="6vw"; pop.marginTop="3vw"; }
var currentCourse ="";
 //**************************Hereo!!

 if( !(localStorage["questions"])) {  
  let thereBeLight = {};
  localStorage.setItem("questions", JSON.stringify(thereBeLight));    }

 var item = localStorage.getItem("questions") ;
var questions = JSON.parse( item ) ; 
let i; var len=Object.keys(questions).length; 

var crs=Object.keys(questions) ;

/// Here's TEST!!
function test(){
document.querySelector("#res").innerHTML=0;
if(!currentCourse){return;}
let currCourse =    questions[currentCourse];
if(!currCourse){return;}
qs = Object.keys(  currCourse );
var len = qs.length ;
document.querySelector("#questions").innerHTML = " This course has a total of : "+ len  + " Questions.  "; 
if( len < 4) {return;}
document.querySelector("#total").innerHTML = len;
var t=document.querySelector('#test');t.style.display="block"; currQ = 0;
document.querySelector("#sol").innerHTML = "Q n." + currQ + " - " + qs[0];
 cAns = num = Math.floor(Math.random() * 4  ); var rightAns=questions[currentCourse][qs[0]]   
document.querySelector( `#a${num}`).innerHTML =  rightAns    ;  
cAns = num;
var filteredQuestions = [...qs]; filteredQuestions.shift();

for(var i=0;i<4;i++)
{ if( i== num ){continue;}

var Rando = Math.floor(Math.random() * (filteredQuestions.length -1) );
let elem = filteredQuestions[Rando];
filteredQuestions = filteredQuestions.filter(e=> filteredQuestions.indexOf(e)  != Rando  );
var numQ = `#a${i}`; 
  document.querySelector(numQ).innerHTML=  questions[currentCourse][  elem ] ; 
 }
}
var inf=document.querySelector("#info");
///       ADD THeM ALL !! /////////***********

for(let i=0;i < len; i++)
{ 

 let nameOfTest =  crs[i];  
let div= document.createElement("LI"); div.id=nameOfTest;
div.innerHTML = nameOfTest;  
let ul= document.getElementById("courses-list"); 
div.onclick= function(){currentCourse = inf.innerHTML = nameOfTest; test();}; 
let remBut = document.createElement("BUTTON");remBut.innerHTML='✘';remBut.style.width='auto'; /* remBut.style.height= ""; */ remBut.style.float="right";
remBut.onmouseover = ()=>{remBut.style.backgroundColor="red";remBut.style.color="lightgray";}
remBut.onmouseout = ()=>{remBut.style.backgroundColor="lightgray";remBut.style.color="red";}
remBut.onclick = ()=>{Remove( div.id );}
div.width = ul.style.width;
div.appendChild(remBut);
ul.appendChild(div); 
}

//////////////
function addQuestions() 
{ 
if(!currentCourse){return;}

document.querySelector('#test').style.display = "none";
document.querySelector('#pop').style.display = "none";
    document.querySelector("#form").style.display = "block";}

function add_it() {
let Q = document.querySelector("#Q").value;
let A = document.querySelector('#A').value;
if(!A || !Q){return;}

let currCourse = questions[currentCourse];
if(currCourse == null || currCourse == undefined){

quit(); return;
}
currCourse[Q]=A ;
document.querySelector("#Q").value = ""; document.querySelector('#A').value = "";
document.querySelector("#questions").innerHTML = " This course has a total of : " + Object.keys(questions[currentCourse]).length + " Questions.  ";

}

function quit(){

localStorage["questions"]=JSON.stringify(questions);
let form = document.querySelector("#form");
form.childNodes.forEach(e=> e.value = "");
form.style.display = "none";
}



/*// *************  test *************************** */


// Here is SaveCourse !
/////////////////////////////////////////
function saveCourse() 
{
let ddg = document.getElementById("course");
 
 let nom = ddg.value
 if(questions[nom]){ddg.value="";return;}
if(/^\s+$/g.test(nom) || nom === "" ) {alert("This's not a valid name. "); return; } 
questions[nom] = {} ; 
let pop = document.querySelector("#pop");
 pop.style.display = "none";
let info=document.querySelector("#info");    
let course = document.createElement("A"); 
let div= document.createElement("LI");
div.setAttribute("id", nom); 
course.innerHTML = nom.slice(0, 15); 
//course.style.width = "100%";
div.onclick = ()=>{currentCourse = info.innerHTML = nom; test();};
 //var hov = () =>course.style.backgroundColor ="rgb(100,100,100,0.5)"; course.onmouseover = hov ; 
 //var out = () => course.style.backgroundColor = "white"; course.onmouseout = out ;
course.questions = {} ; 
let remBut = document.createElement("BUTTON");remBut.innerHTML='✘';remBut.style.color="red";remBut.style.backgroundColor="lightgray";
remBut.onmouseover = ()=>{remBut.style.backgroundColor="red";remBut.style.color="lightgray";}
remBut.onmouseout = ()=>{remBut.style.backgroundColor="lightgray";remBut.style.color="red";}
remBut.onclick = ()=>{Remove(nom);}
 localStorage.setItem("questions", JSON.stringify(questions))
var List = document.querySelector("#courses-list");div.width = List.width ;
div.appendChild(course);div.appendChild(remBut);
List.appendChild(div);ddg.value="";
}
///////////////////////////////////

function next()
{ 

results = results ?? document.getElementById("res"); 
qs =Object.keys(questions[currentCourse]);
let rightAnswer = document.querySelector("#a"+cAns);

let str = "The right answer is : " + (rightAnswer.innerHTML) + " ."
if( document.querySelector("#r"+cAns).checked === true ){ var x = parseInt(results.innerHTML); 
x++; 
results.innerHTML = x;    
feedback.style.color= "green";
feedback.innerHTML = "Correct! " + str;
}
else {
feedback.style.color = "red";
feedback.innerHTML = "Wrong, " + str;
}
if(currQ>=(qs.length-1)){ 

feedback.innerHTML = "Exercise is over. Your result is : " + results.innerHTML ; 
 document.getElementById("test").style.display = "none";  
return  ;
}  

 /*   Here is where the fun begins         */
currQ+=1;

var sol=document.querySelector('#sol');
sol.innerHTML="Q n." + currQ + " - " +qs[currQ];

var num = Math.floor(Math.random() * 4  );
nwAns= questions[currentCourse][qs[currQ]]  ;
cAns = num; document.querySelector(`#a${num}`).innerHTML = nwAns    ; var C_int=0; var lsF = [];
var arrAns = [...qs].filter(p=> qs.indexOf(p) != currQ  )     ;  
for(let i=0;i<4;i++)
{ 
if(i == num) { continue; }
var rNd = Math.floor(Math.random() * (arrAns.length -1)  );
document.querySelector(`#a${i}`).innerHTML=questions[currentCourse][ arrAns[rNd] ]   ;
arrAns=arrAns.filter( e=> arrAns.indexOf(e) != rNd   );

}
    
}


function Remove(ID){

try
{ 
if(confirm("Are you sure you want to delete this test? : " + ID + ". ")){
delete questions[ID];
let Node = document.getElementById(ID);
Node.parentNode.removeChild(Node); 

if(currentCourse === ID) {currentCourse = "";}
localStorage.setItem("questions", JSON.stringify(questions) );}

return true;}
catch (err){
console.log(' There was a problem with removing the element.');
console.error(err);
} 

}


function ErasePop(){
document.querySelector("#form").style.display = "none";
document.querySelector("#course").value = "";
document.querySelector("#pop").style.display="none";



}
















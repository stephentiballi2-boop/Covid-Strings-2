<doctype.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third round
heading8=fourth round
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings2 fan voting js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,inital scale 1>
<title covid strings2 fan voting</title>
<style>
vote button
margin:5px;
padding:10px;
background-color:4caf50
color:white;
border:none;
cursor:pointer;
vote button.hover
background color 45a049
</style>
</head>
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string limit=16
amount of rounds= math.log(entry limit) /math.log(2) 
for (i=amount_ of_ rounds;-i>0;i- -)
s=round+(amount_ of_ rounds; i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,i-1)+matches’;
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class=vote button on click “vote” (‘string 1’) <string pair button>
<button class=vote button on click “vote” (‘string 2’) <string pair button>
<button class=vote button on click “vote” (‘string 3’) <string pair button>
<button class=vote button on click “vote” (‘string 4’) <string pair button>
<button class=vote button on click “vote” (‘string 5’) <string pair button>
<button class=vote button on click “vote” (‘string 6’) <string pair button>
<button class=vote button on click “vote” (‘string 7’) <string pair button>
<button class=Vote button on click “vote” (‘string 8’) <string pair button>
<button class=vote button on click “vote” (‘string 9’)<string pair  button>
<button class=vote button on click “vote” (‘string 10’) <string pair button>
<button class=vote button on click “vote” (‘string 11’) <string pair button>
<button class=vote button on click “vote” (‘string 12’) <string pair button>
<button class=vote button on click “vote” (‘string 13’) <string pair button>
<button class=vote button on click “vote” (‘string 14’) <string pair button>
<button class=vote button on click “vote” (‘string 15’) <string pair button>
<button class=vote button  on click “vote” (‘string 16’) <string pair button>
<header.html>
first round 
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round} <h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded ,()
let current round=1
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function(index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup”
concatenated strings 
matchup1=string1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class=”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
matchup2=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<Div>
matchup3=string 7 vs string 10
<button id vote string 7 “vote for string 7”  </button>
<button id vote string 10 "vote for string 10”  </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup4=string 5 Vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup5=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class=”results”>
<p>string 3 <span id=“votes string 3 >0</span> votes <p>
<p> string 14 <span id=“votes string 14 >0</span> votes <p>
<Div>
matchup6=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup7=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup8=string 6 vs string 11
<button id vote string 6 “vote for string 6”  </button>
<button id vote string 11 “vote for string 11” </button>
<div class=”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
non-concatenated strings 
matchup1=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<Ddiv>
matchup2=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup3=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup4= string 7 vs string 10
<button id vote string 7 “vote for string 7”  </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup5=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup6=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup7=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class=”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup8=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
<h2 id=”result”></h2>
<header.html>
result
the end result of voting on a particular pair of strings
<script src=”vote.js”><
<script>
<body>
<html>
vote js file notes:
votes={
‘string 1
‘string 2’
vote (string)
if (votes.hasownproperty(character))
votes [character]++
display results
else:
console.error(‘invalid string’)
displayresults
result element=document get element by id (‘result’)
result element inner html
<header.html>
non-concatenated string variables 
non-concatenated strings in covid strings
non-concatenated strings list=[1:phrase “talk about staying at home lasts shooter than a soda can on venus”, 2: phrase ”i am not a super spreader i am a supra spreader”, 3:phrase  “no sun cubed does not kill viruses”, 4:phrase “elon musk is wrong take the purple pill”, 5:phrase “nothing labeled dexie turns you into benjamin button”, 6:phrase “aaron rodgers proves the coverup is worse than the crime”, 7:math problem “if aaron rodgers decided two weeks later that he would get a johnson and johnson vaccine how soon after getting vaccinated can he play”, 8:phrase “astrazeneca is only slightly better than the saturn astra” , 9: math problem “the local flag day in town has been postponed due to an outbreak of the omicron variant if the guidelines say the positivity rate can be not greater than six and quarter percent can the event happen on the new date of june 17th”, 10: phrase “mdx does not mean medical doctors prescription”, 11:math problem " if former president trump shared 14 covid misinformation posts over a period of 2 days how many posts per day did trump share?”, 12:math problem “if the same town decided to have a juneteenth celebration and the same guidelines regarding positivity were used could juneteenth be held if the rate was five and one fiftieth percent?”, 13: math problem ”if a study found that “immunization” increases the likelihood that one would decline vaccination by 65% what could get done to convince skeptical people”, 14:math problem “this same study found that when asked about what party they would vote for in the midterms 71% of people who were “immunized would vote republican whereas 80% of people who say they were vaccinated vote democrat if the margin of error is 2.9% what is the range?”, 15: sentence “vitamin d exposure is one way to boost immunity”, 16: sentence “work from home is not just for famous people”  ]
non-concatenated string1=phrase ”talk about staying at home lasts shorter than a soda can on venus”
non-concatenated string2=phrase "i am not a super spreader i am a supra spreader”
non-concatenated string3=phrase "no sun cubed does not kill viruses”
non-concatenated string4=phrase “elon musk is wrong take the purple pill”
non-concatenated string5=phrase “nothing labeled dexie turns you into benjamin button”
non-concatenated string6=phrase ”aaron rodgers proves the coverup is worse than the crime”
non-concatenated string7=math problem "if aaron rodgers decided two weeks later that he would get a johnson and johnson vaccine how soon after getting vaccinated can he play”
non-concatenated string8=phrase “astrazeneca is only slightly better than the saturn astra”
non-concatenated string9=math problem “the local flag day in town has been postponed due to an outbreak of the omicron variant if the guidelines say the positivity rate can be not greater than six and quarter percent can the event happen on the new date of june 17th?”
non-concatenated string10=phrase ”mdx does not mean medical doctors prescription”
non-concatenated string11=math problem “if former president trump shared 14 covid misinformation posts over a period of 2 days how many posts per day did trump share?”
non-concatenated string12=math problem “if the same town decided to have a juneteenth celebration and the same guidelines regarding positivity were used could juneteenth be held if the rate was five and one fiftieth pehrcent?”
non-concatenated string13=math problem ”if a study found that “immunization” increases the likelihood that one would decline vaccination by 65% what could get done to convince skeptical people”,
non-concatenated string14=math problem “this same study found that when asked about what party they would vote for in the midterms 71% of people who were “immunized would vote republican whereas 80% of people who say they were vaccinated vote democrat if the margin of error is 2.9% what is the range?”
non-concatenated string15=sentence “vitamin d exposure is one way to boost immunity”
non-concatenated string16=sentence“work from home is not just for famous people” 
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with/ 
for apostrophe in covid strings2fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
<p>string 3 [votes ‘string 3 ‘]}votes</p>
<p>string 4 [votes ‘string 4 ‘]}votes</p>
<p>string 5[votes ‘string 5 ‘]}votes</p>
<p>string 6[votes ‘string 6 ‘]}votes</p>
<p>string 7 [votes ‘string 7 ‘]}votes</p>
<p>string 8[votes ‘string 8 ‘]}votes</p>
<p>string 9 [votes ‘string 9 ‘]}votes</p>
<p>string 10 [votes ‘string 10 ‘]}votes</p>
<p>string 11[votes ‘string 11 ‘]}votes</p>
<p>string 12 [votes ‘string 12 ‘]}votes</p>
<p>string 13 [votes ‘string 13 ‘]}votes</p>
<p>string 14 [votes ‘string 14 ‘]}votes</p>
<p>string 15 [votes ‘string 15 ‘]}votes</p>
<p>string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
<header.html>
concatenated string variables
concatenated strings in covid strings
concatenated string list=[1:phrase “no”+”covid”+”was”+”not”+”cheated”+”out”+”of”+”the+”2020”+”election”, 2:phrase “work”+”from”+”home”+”is”+”not”+”just”+”for”+”rihanna”, 3: phrase “no”+”corona”+”beer”+”has”+”nothing”+”to”+”do”+”with”+”corona”+”virus”, 4: phrase “it”+”is”+”not”+”fifth”+”harmonies”+”right”+”either”, 5: phrase ”at”+”least”+”60”+”minutes”+”of”+”excercise”+”also”+”helps”,6: math problem ”if”+”a”+”local”+”stores”+”vitamin”+”d”+”supply”+”of”+”100”+”is”+”sold”+”out”+”300”+”percent”+”after”+”a”+”local”+”influencer”+”says”+”it”+”works”+”like”+”a”+”charm”+”how”+”many”+”people”+”cut”+”of”+”1000”+”will”+”be”+”vaccinated?”, 7: math problem ”if”+”it”+”becomes”+”public”+”that”+”vitamin”+”d”+”only”+”has”+”a”+“third”+”of”+”the”+”effiacy”+”of”+”vaccines”+”should”+”the”+”store”+”offer”+”vitamin”+”d”?,8: phrase ”vitamin”+”d”+”however”+”is”+”a”+”compliment”+”to”+”getting”+”vaccinated”, 9: whats wrong with this code “the”+”covid”+”death”+”toll”+”in”+”terms”+”of”+”pi”+”is”+”1000”, 10:phrase “one”+”comedian”+”believed”+”that”+”the”+”last”+”year”+”was”+”one”+”and”+”four”+”twenty”+”firsts”+”of”+”a”+”uraninan”+”year”, 11: math problem “a”+“poll”+”showing”+”support”+”for”+”pandemic”+”meausres”+”has”+”decreased”+”from”+”46”+”to”+”43”+”percent”+”and”+”the”+”margin”+”of”+”error”+”is”+”2.35”+”percent”+”what”+”is”+”the”+”range?”,12:math problem ”if”+”the”+”same”+”poll”+”showed”+”that”+”if”+”a”+”new”+”variant”+”came”+”support”+”would”+”increase”+”by”+”3”+”percent”+”what”+”is”+”the”+”new”+”range?”, 13:phrase ”it”+”figures”+”a”+”bubble”+”would”+”be”+”in”+”a”+”round”+”robin”+”format”, 14: math problem ”if”+”the”+”same”+”poll”+”showed”+”that”+”if”+”a”+”new”+”variant”+”leaves”+”support”+”recedes”+”by”+”5”+”percent”+”what”+”is”+”the”+”new”+”range?”,15:sentence “trump”+”said”+”covid”+”made”+”him”+”20”+”years”+”younger”,16:sentence “covid”+”misinformation”+”spreads”+”just”+”as”+”fast”+”as”+”covid”+”itself”
concatenated string1=phrase “no”+”covid”+”was”+”not”+”cheated”+”out”+”of”+”the+”2020”+”election”, 
concatenated string2=phrase“work”+”from”+”home”+”is”+”not”+”just”+”for”+”rihanna”
concatenated string3=phrase “no”+”corona”+”beer”+”has”+”nothing”+”to”+”do”+”with”+”corona”+”virus”
concatenated string4=phrase "it”+”is”+”not”+”fifth”+”harmonies”+”right”+”either”
concatenated string5=phrase ”at”+”least”+”60”+”minutes”+”of”+”exercise”+”also”+”helps”
concatenated string6=math problem ”if”+”a”+”local”+”stores”+”vitamin”+”d”+”supply”+”of”+”100”+”is”+”sold”+”out”+”300”+”percent”+”after”+”a”+”local”+”influencer”+”says”+”it”+”works”+”like”+”a”+”charm”+”how”+”many”+”people”+”out”+”of”+”1000”+”will”+”be”+”vaccinated?
concatenated string7=math problem ”if”+”it”+”becomes”+”public”+”that”+”vitamin”+”d”+”only”+”has”+”a”+“third”+”of”+”the”+”effiacy”+”of”+”vaccines”+”should”+”the”+”store”+”offer”+”vitamin”+”d”?,
concatenated string8=phrase “vitamin”+”d”+”however”+”is”+”a”+”compliment”+”to”+”getting”+”vaccinated”
concatenated string9=whats wrong with this code “the”+”covid”+”death”+”toll”+”in”+”terms”+”of”+”pi”+”is”+”1000” 
concatenated string10=phrase “one”+”comedian”+”believed”+”that”+”the”+”last”+”year”+”was”+”one”+”and”+”four”+”twenty”+”firsts”+”of”+”a”+”uraninan”+”year”
concatenated string11=math problem “a”+“poll”+”showing”+”support”+”for”+”pandemic”+”meausres”+”has”+”decreased”+”from”+”46”+”to”+”43”+”percent”+”and”+”the”+”margin”+”of”+”error”+”is”+”2.35”+”Percent”+”What”+”Is”+”The”+”Range?”
concatenated string12=math problem ”if”+”the”+”same”+”poll”+”showed”+”that”+”if”+”a”+”new”+”variant”+”came”+”support”+”would”+”increase”+”by”+”3”+”percent”+”what”+”is”+”the”+”new”+”range?”
concatenated string13=phrase ”it”+”figures”+”a”+”bubble”+”would”+”be”+”in”+”a”+”round”+”robin”+”format”
concatenated string14=math problem ”if”+”the”+”same”+”poll”+”showed”+”that”+”if”+”a”+”new”+”variant”+”leaves”+”support”+”recedes”+”by”+”5”+”percent”+”what”+”is”+”the”+”new”+”range?"
concatenated string15=sentence “trump”+”said”+”covid”+”made”+”him”+”20”+”years”+”younger”
concatenated string16=sentence “covid”+”misinformation”+”spreads”+”just”+”as”+”fast”+”as”+”covid”+”itself”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘with/ 
for apostrophe in covid strings2 fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1‘]}votes</p>
<p>string 2[votes ‘string 2‘]}votes</p>
<p>string 3 [votes ‘string 3‘]}votes</p>
<p>string 4 [votes ‘string 4‘]}votes</p>
<p>string 5[votes ‘string 5‘]}votes</p>
<p>string 6[votes ‘string 6‘]}votes</p>
<p>string 7 [votes ‘string 7‘]}votes</p>
<p>string 8[votes ‘string 8‘]}votes</p>
<p>string 9 [votes ‘string 9‘]}votes</p>
<p>string 10 [votes ‘string 10‘]}votes</p>
<p>string 11[votes ‘string 11‘]}votes</p>
<p>string 12 [votes ‘string 12‘]}votes</p>
<p>string 13 [votes ‘string 13‘]}votes</p>
<p>string 14 [votes ‘string 14‘]}votes</p>
<p>string 15 [votes ‘string 15‘]}votes</p>
<p>string 16 [votes ‘string 16‘]}votes</p>
<subheading.html>
first round  concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display(part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
newwindow=window.open(current round)
currentround=first round
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for first round
<header.html>
second round
the second round of fan voting
render round
roundcontainer.innerhtml=<h2 round {second round} <h2>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes</p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener(‘dom content loaded)
let current round=round2
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 2:
commence round 2
else:
remain 
string numbers[non-concatenated strings:name ‘string pair1’ votes 
name: ‘string pair2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
string numbers[concatenated strings:name ‘string pair1’ votes 
name: ‘string pair 2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
<subheading.html>
second round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 4)
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
concatenated strings 
name string1 votes
name string2 votes
name string3 votes
name string4 votes
name string5 votes
name string6 votes
name string7 votes
name string8 votes
<subheading.html>
second round concatenated string advancing 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,Num To 4)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
newwindow=window.open(current round)
currentround=first round
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround<totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for second round
<header.html>
third round
the third round of fan voting
render round
roundcontainer.innerhtml=<h3 round {third round} <h3>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round3
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 3:
commence round 3
else:
remain 
string numbers[non-concatenated strings:name ‘string pair1’ votes 
name:‘string pair2’ votes
string numbers[concatenated strings:name ‘string pair1’ votes 
name:‘string pair2’ votes
<subheading.html>
third round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
name string1 votes
name string2 votes
name string3 votes
name string4 votes
<subheading.html>
third round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) strings 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings 
percentage calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Third Round 
<Header.Html>
Fourth Round
The Fourth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H4 Round {Fourth Round} <H4>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name}</Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 4:
Commence Round 4
Else:
Remain 
Let Current Round=ROUND4
Total Rounds=5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Non-Concatenated Strings : Name ‘String Pair1’ Votes 
String Numbers[Concatenated Strings :Name ‘String Pair1’ Votes 
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2)Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String )
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fourth Round 
<Header.Html>
Fifth Round
The Fifth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H5 Round {Fifth Round} <H5>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name} {Candidate Votes} Votes</P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 5:
Commence Round 5
Else:
Remain 
Let Current Round=Round5
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Name ‘String Pair Votes‘]
Last Remaining Non-Concatenated String 
Last Remaining Non-Concatenated String 
<Subheading.Html>
Covid Strings Fan Voting Victory
The End Result Of Fan Voting 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(Winner String)
Return Winner
Last Remaining Non-Concatenated String=Last Non-Concatenated String Variable Left In Fan Voting
Last Remaining Concatenated String=Last Concatenated String Variable Left In Fan Voting
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Last Remaining Non-Concatenated String>=.5
If Last Remaining Concatenated String>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fifth Round 
Return Filename

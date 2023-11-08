// 1.For the given JSON - Iterate - all FOR loops

var json = [{
  "id" : "bala_1", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : "zen portal task",
  "mail": "balamk@gmail.com"
},
{
  "id" : "bala_2", 
  "msg"   : "For the - JSON iterate all for loops",
  "task" : "zen - task",
  "mail": "balamk@gmail.com"
}];

//for loop

for(var i = 0; i < json.length; i++) 
{
  var obj = json[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);
}

//for Each

json.forEach(function(obj) { console.log(obj.msg); });

//for In

for (var key in json) 
{
if (json.hasOwnProperty(key)) 
{
console.log(json[key].id);
}
}

//for Of

// let text = "";
// for (let x of json[key].id) 
// {
// text += x; 
// }
// console.log(text);

//--------------------------------------------------------

// 2.MY RESUME - JSON FORMAT

var myCurriculumVitae={
  "basics": {
    "name": "Balamugundan Karunanidhi",
    "email": "balamk@gamil.com",
    "phone": 9578741700,
    "degree": "B.E",
    "location": {
      "address": "No 134 Veerapandiyapuram Gangaikondan",
      "postalCode": 601488,
      "city": "Ariyalur",
      "state": "Tamilnadu",
      "country": "India"
    },
    "profiles": [
      {
        "website": "https://www.linkedin.com/in/balamk-k-70457758/",
      }
    ]
  },
  "work": [
    {
      "company": "Special Oilfield services",
      "position": "Sr. Quality Inspector ",
      "startDate": "2017-04-15",
      "endDate": "2022-09-15",
      "summary": "Worked as an Oilman",
    },
  ],
  "education": [
    {
      "institution": "Panimalar Engineering College",
      "department": "Mechanical Engineer",
      "batch start year": 2010,
      "batch end year": 2014,
      "gpa": 7.5,
    }
  ],
  "skills": [
    {
      "name": "python,javascript,ASNT Level II",
      "level": "beginner",
      "project": 
      [
        "adjusting the lathe machine system using python language"
      ]
    }
  ],
  "languages": [
    {
      "language": "Tamil,English,Hindi,Malayalam",
    }
  ],
  "interests": [
    {
      "name": "Heavy Engineering,Oilfield,Interstellar,Planting",
    }
  ]
}
console.log(myCurriculumVitae);
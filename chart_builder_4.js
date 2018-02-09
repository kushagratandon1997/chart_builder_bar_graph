{name: "Chennai", Population: 500, Units: 350, Households: 320,},
{name: "Delhi", Population: 400, Units: 500 , Households: 478,},
{name: "Mumbai", Population: 800, Units: 740, Households: 860,}
];

var measures = Object.keys(cities[0]);

function writeData(x) {
    for (var i = 0; i<cities.length; i++) 
    {
        document.getElementById("name" + (i)).innerHTML= eval("cities[i]." + measures[0]);
        document.getElementById("bartext" + (i)).innerHTML= eval("cities[i]." + measures[x]);
        document.getElementById("bar" + (i)).style.width = eval("cities[i]." + measures[x])/10 + "%";
        document.getElementById("bar" + (i)).title= eval("cities[i]." + measures[4]); 
    }
    document.getElementById("cat").innerHTML = "<strong>" + measures[x] + "</strong>";
};
writeData(1);  
function selMeasure() 
{ 
var m = document.getElementById("sel").value;
writeData(m); 
};

$( document ).ready(function() {
   $("[title]").tooltip({offset: [10, -30]});
    });
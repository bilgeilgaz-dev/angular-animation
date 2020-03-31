
function drawChart() {
    // *** these are the numbers for each segment of the chart. Count how many items there are in this array. There must also be exactly the same number of items in the 'colors' array for the code to work***
  var sectors = [
  		72, //Communication 
      54, //IT
      41, //Consumer services
      13, //Utilities
      27, //Health care 
      25, //Industrial 
      19, //Financial
      16  //Other
  ];
  
  var sum = sectors.reduce(function(a, b){
        return a + b;
    }, 0);
  
  var segments = [];
  
  //turn the array items into a percentage, add to segments array
  for (i=0; i<=sectors.length; i++) {
      segments.push(sectors[i]/sum*100);
  }

  // *** there must be the same number of items as in the 'sectors' array for the code to work
  var colors = [
        "#03D0BF", 
        "#30AAD5", 
        "#3C678F", 
        "#9B4DA9",
        "#A2224F", 
        "#DB4D59", 
        "#EA8743",
        "#F7C163"  /*,
        "#F0DF0F",
        "#9FD212",
        "#50BC20"  */
      ];

  var thickness = 3;
  var ns = "http://www.w3.org/2000/svg";
  var cx = 21;
  var cy = 21;
  var r = 100/(2*Math.PI);;
  offset = 25;
  var svg = document.createElementNS(ns, "svg");
  svg.setAttribute("height", 120);
  svg.setAttribute("width", 120);
  svg.setAttribute("viewBox","0 0 42 42");
  svg.setAttribute("transform", "scale(-1, 1)");
  document.getElementById("chart").appendChild(svg);

  var hole = document.createElementNS(ns, "circle");
  hole.setAttribute("cx",cx);
  hole.setAttribute("cy",cy);
  hole.setAttribute("r",r);
  hole.setAttribute("fill", "#fff");
  svg.appendChild(hole);

  var ring = document.createElementNS(ns, "circle");
  ring.setAttribute("cx",cx);
  ring.setAttribute("cy",cy);
  ring.setAttribute("r",r);
  ring.setAttribute("fill", "transparent");
  ring.setAttribute("stroke", "#eee");
  ring.setAttribute("stroke-width", thickness);
  svg.appendChild(ring);

  function drawSegments(i, p) {
    var unused = 100-p;
    var dasharray = p + " " + unused;
    offset = offset+p;
    var segment = document.createElementNS(ns, "circle");
    var color = colors[i];
    segment.setAttribute("cx",cx);
    segment.setAttribute("cy",cy);
    segment.setAttribute("r",r);
    segment.setAttribute("fill", "transparent");
    segment.setAttribute("stroke", color);
    segment.setAttribute("stroke-width", thickness);
    segment.setAttribute("stroke-dasharray", dasharray);
    segment.setAttribute("stroke-dashoffset", offset);
    svg.appendChild(segment);
  }


  for (i=0; i<=segments.length; i++) {
      drawSegments(i, segments[i]);
  }
}

document.body.onload = function() {drawChart()};
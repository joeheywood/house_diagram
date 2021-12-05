// !preview r2d3 data=dgrm
//
// r2d3: https://rstudio.github.io/r2d3
//

window.dd = data;

svg.
  style("background-color", "#fbf1c7")
  
var down = svg.append("g")
  .attr("width", height)
  .classed("room", true)

var up = svg.append("g")
  .classed("room", true)
  .attr("transform", `translate(${height}, 0)`); 
  
var y = d3.scaleLinear()
  .domain([0, 15])
  .range([0, height]);
  
var x = d3.scaleLinear()
  .domain([0, 15])
  .range([0, height ]);
  
down
  .selectAll("line")  
  .data(data)
  .enter()
  .append("line")
  .filter((d) => {return d.floor == "downstairs"})
  .attr("x1", d => x(d.startx))
  .attr("x2", d => x(d.endx))
  .attr("y1", d => y(d.starty))
  .attr("y2", d => y(d.endy))
  .style("stroke", (d) => {
    var clr = "";
    switch(d.code) {
      case 1: 
        clr = "#cc241d"
        break;
      case 2:
        clr = "#7c6f64";
        break;
      case 3:
        clr = "#888888"
        break;
      case 4:
        clr = "#98971a"
       break; 
      case 5:
        clr = "#d79921"
       break; 
      case 10:
        clr = "#458488"
       break; 
    }
    return clr;
  })
  .style("stroke-width", (d) => {
    var wdth;
    switch(d.code) {
      case 1: 
        wdth = "3px"
        break;
      case 2:
        clr = "1px";
       break; 
      case 3:
        wdth = "1px";
        break;
      case 4:
        wdth = "4px";
        break;
      case 5:
        wdth = "3px";
        break;
      case 10:
        wdth = "5px";
       break; 
    }
    return wdth;
  })
  
  

up
  .selectAll("line")  
  .data(data)
  .enter()
  .append("line")
  .filter((d) => {return d.floor == "upstairs"})
  .attr("x1", d => x(d.startx))
  .attr("x2", d => x(d.endx))
  .attr("y1", d => y(d.starty))
  .attr("y2", d => y(d.endy))
  .style("stroke", (d) => {
    var clr = "";
    switch(d.code) {
      case 1: 
        clr = "#cc241d"
        break;
      case 2:
        clr = "#7c6f64";
        break;
      case 3:
        clr = "#888888"
        break;
      case 4:
        clr = "#98971a"
       break; 
      case 5:
        clr = "#d79921"
       break; 
      case 10:
        clr = "#458488"
       break; 
    }
    return clr;
  })
  .style("stroke-width", (d) => {
    var wdth;
    switch(d.code) {
      case 1: 
        wdth = "3px"
        break;
      case 2:
        clr = "1px";
       break; 
      case 3:
        wdth = "1px";
        break;
      case 4:
        wdth = "4px";
        break;
      case 5:
        wdth = "3px";
        break;
      case 10:
        wdth = "5px";
       break; 
    }
    return wdth;
  })
  
  
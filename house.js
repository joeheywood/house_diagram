// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

svg.append("line")
  .data(data)
  .attr("x1", d => d.startx)
  .attr("x2", d => d.endx)
  .attr("y1", d => d.starty)
  .attr("y2", d => d.endy)
  .style("stroke", "black")
  .style("stroke-width", "3px")
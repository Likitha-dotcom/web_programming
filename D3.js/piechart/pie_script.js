const data = [
  {"name" : "Network security(6%)","value" :"16"},
  {"name" : "IOT(31%)","value" :"29"},
  {"name" : "Big Data(13%)","value" :"20"},
  {"name" : "Machine Learning(50%)","value" :"35"}];

const svg = d3.select('svg'), width=svg.attr('width'),height=svg.attr('height');
const radius = 300;
const g = svg.append('g').attr('transform',`translate(${width/2},${height/2})`);

const color = d3.scaleOrdinal(['orangered','greenyellow','yellow','aqua']);

const pie = d3.pie().sort(null).value(d => d.value);

const path = d3.arc().outerRadius(radius).innerRadius(0);

const label = d3.arc().outerRadius(radius).innerRadius(radius - 220);

const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class','arc');

pies.append('path').attr('d',path).attr('fill', d => color(d.data.value));

pies.append('text').attr('transform',function(d){
  return `translate(${label.centroid(d)})`;}).text(d => d.data.name)

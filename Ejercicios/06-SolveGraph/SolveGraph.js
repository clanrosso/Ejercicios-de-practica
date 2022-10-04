function SolveGraph (graph, start, end, /* visitados = [] */) {
  // Your code here:
/*   console.log(start);
  console.log(target);
​
  if(visitados.includes(start)) return false
  visitados.push(start);
  
  for (const node of graph[start]) {
    console.log(node);
    //                        ^
    if(node === target) return true
    console.log(visitados);
    //
    if(SolveGraph(graph, node, target, visitados)) return true
  }
  return false
 */
​
  let queue = [start]; //Juan Gerardo
    let visited = new Set();
    while (queue.length > 0) {
      let node = queue.shift();
      if (node === end) {
        return true;
      }
      if (!visited.has(node)) {
        visited.add(node);
        queue = queue.concat(graph[node]);
      }
    }
    return false;
}
​
module.exports = SolveGraph

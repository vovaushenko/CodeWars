function testit(a,b){
  a = [... new Set(a)];
  b = [... new Set(b)];
  return a.concat(b).sort((a,b) => a-b)
}
// https://www.codewars.com/kata/583203e6eb35d7980400002a

const countSmileys = (faces) => {
  console.log(faces);

  return faces
    .filter((face) => face.length < 4)
    .filter((face) => face.includes(':') || face.includes(';'))
    .filter((face) => face.includes(')') || face.includes('D'))
    .filter((face) => face.includes('-') || face.includes('~') || face.length === 2).length;
};
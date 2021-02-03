// https://www.codewars.com/kata/57e8f757085f7c7d6300009a

const planeSeat = (a) => {
  let section = a.replace(/\D+/g, '');
  let seat = a.replace(/[^a-zA-Z]+/g, '');
  if (section > 60) return 'No Seat!!';
  if (seat === 'I' || seat === 'J') return 'No Seat!!';

  let seatLocation = '';

  if (section <= 20) {
    seatLocation += 'Front';
  } else if (section > 20 && section <= 40) {
    seatLocation += 'Middle';
  } else {
    seatLocation += 'Back';
  }

  if (seat.charCodeAt(0) <= 67) {
    seatLocation += '-Left';
  } else if (seat.charCodeAt(0) > 67 && seat.charCodeAt(0) <= 70) {
    seatLocation += '-Middle';
  } else {
    seatLocation += '-Right';
  }

  return seatLocation;
};

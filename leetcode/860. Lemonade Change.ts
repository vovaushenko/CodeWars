// 860. Lemonade Change
// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

const lemonadeChange = (bills: number[]): boolean => {
  let fiveBucks = 0;
  let tenBucks = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fiveBucks++;
    } else if (bill === 10) {
      if (!fiveBucks) return false;
      fiveBucks--;
      tenBucks++;
    } else if (bill === 20) {
      if (fiveBucks && tenBucks) {
        fiveBucks--;
        tenBucks--;
      } else if (fiveBucks >= 3) {
        fiveBucks -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

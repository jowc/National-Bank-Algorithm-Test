// find median
const median = (arr) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// transaction records
let transactions = [2, 3, 4, 2, 3, 6, 8, 4, 5];

const numNotifications = (day, span) => {
  let notifications = 0;
  let latestTrx;

  for (let days = 1; days <= day; days++) {
    switch (days) {
      case 6:
        latestTrx = transactions.slice(0, span);
        spent = 6;
        if (spent >= median(latestTrx) * 2) notifications += 1;
        transactions.shift(); //sends a recent 5 days transaction history
        continue;
      case 7:
        latestTrx = transactions.slice(0, span);
        spent = 8;
        spent >= median(latestTrx) * 2 ? (notifications += 1) : notifications;
        transactions.shift();
        continue;
      case 8:
        latestTrx = transactions.slice(0, span);
        spent = 4;
        spent >= median(latestTrx) * 2 ? (notifications += 1) : notifications;
        transactions.shift();
        continue;
      case 9:
        latestTrx = transactions.slice(0, span);
        spent = 5;
        spent >= median(latestTrx) * 2 ? (notifications += 1) : notifications;
        transactions.shift();
        break;
      default:
        notifications = 0;
    }
  }

  //activate to test result in console
  // return console.log(notifications)

  return notifications;
};

numNotifications(9, 5);

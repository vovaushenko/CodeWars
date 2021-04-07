// https://www.codewars.com/kata/5b6375f707a2664ada00002a

const whosOnline = (friends) =>
  friends.reduce((output, friend) => {
    if (friend.status === 'online') {
      if (friend.lastActivity > 10) {
        if (!output['away']) output['away'] = [];
        output['away'].push(friend.username);
      } else {
        if (!output['online']) output['online'] = [];
        output['online'].push(friend.username);
      }
    }

    if (friend.status === 'offline') {
      if (!output['offline']) output['offline'] = [];
      output['offline'].push(friend.username);
    }
    return output;
  }, {});

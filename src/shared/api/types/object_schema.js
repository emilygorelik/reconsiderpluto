export const message = (uid, from, subject, content, timestamp) => {
  return {
    message_id: { S: uid },
    timestamp: { N: '' + timestamp },
    data: {
      M: {
        content: { S: content },
        from: { S: from },
        subject: { S: subject },
      },
    },
  };
};

export const log = (date, type, content) => {
  return {
    date: { S: date },
    type: { S: type },
    content: { S: content },
  };
};

export const sort_order = (type, order) => {
  return {
    type: { S: type },
    sort: { L: order },
  };
};

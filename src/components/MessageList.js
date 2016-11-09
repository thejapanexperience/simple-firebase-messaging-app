import React from 'react';

export default (props) => {
  const { messages } = props;

  const Messages = Object.keys(messages).map((key) => {
    const message = messages[key];
    return (
      <li key={key}>{message}</li>
    );
  });
  return (
    <ul>
      {Messages}
    </ul>
  );
};

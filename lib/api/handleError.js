import { ErrorLayout } from '@/components/Layout';

class UserIsEmptyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserIsEmptyError';
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class LimitExceededError extends Error {
  constructor(message) {
    super(message);
    this.name = 'LimitExceededError';
  }
}

function handleError(message) {
  if (!message) return null;

  let error = new Error(message);
  if (message.includes('Require username')) error = new UserIsEmptyError(message);
  if (message.includes('Not Found')) error = new NotFoundError(message);
  if (message.includes('API rate limit exceeded'))
    error = new LimitExceededError(message);

  console.log({ error });

  return error;
}

export const getErrorLayout = error => {
  switch (error.name) {
    case 'UserIsEmptyError':
      return <ErrorLayout message="Hey! Username is required." />;
    case 'NotFoundError':
      return <ErrorLayout message="Sorry, we could not find any data." />;
    case 'LimitExceededError':
      return (
        <ErrorLayout
          message={
            `Request per hour rate exceeded.\nPlease check it after an hour.`
          }
        />
      );
    default:
      return <ErrorLayout message={error.message}/>;
  }
};

export default handleError;

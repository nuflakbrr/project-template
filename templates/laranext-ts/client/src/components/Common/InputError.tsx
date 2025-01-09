import { FC } from 'react';

type Props = {
  messages: [];
  className: string;
};

const InputError: FC<Props> = ({ messages, className }) => {
  return (
    <>
      {messages?.length > 0 && (
        <>
          {messages.map((message, index) => (
            <p className={`${className} text-sm text-red-600`} key={index}>
              {message}
            </p>
          ))}
        </>
      )}
    </>
  );
};

export default InputError;

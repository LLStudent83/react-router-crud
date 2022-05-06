import * as React from 'react';
import { MouseEvent } from 'react';
import './button.scss';

type ButtonType = {
  className: string,
  action: (event: MouseEvent<HTMLButtonElement>) => void,
  nameButon: string,
  typeButton: 'submit' | 'button',
};

export default function Button({
  className, action,
  nameButon, typeButton,
}: ButtonType): JSX.Element {
  return (
    <button
      className={`button ${className}`}
      type={typeButton}
      onClick={action}
    >
      {nameButon}
    </button>
  );
}

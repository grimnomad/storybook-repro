import React, { ReactElement } from 'react';
import { ButtonProps } from '../Buttons';

interface HeaderProps extends ButtonProps {}

function Header(props: HeaderProps): ReactElement {
  const { title } = props;

  return <div>
    {title}
  </div>
}

export { Header, HeaderProps };
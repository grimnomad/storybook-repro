import React, { ReactNode } from 'react';
import { Foo } from '@test/core';

interface IButtonProps {
  readonly title: ReactNode;
}

function Button(props: IButtonProps) {
  const foo: Foo = 'BAR';

  return <button>{foo}</button>
}

export { Button, IButtonProps }
import { Button } from '../Buttons';
import { Header } from './Header';
import React from 'react';

export default {
  title: 'Header',
  component: Header
}

export const Primary = {
  args: {
    title: <Button title="Foo" />
  }
}

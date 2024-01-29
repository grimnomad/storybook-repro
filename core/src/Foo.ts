export const Foo = {
  FOO: 'FOO',
  BAR: 'BAR'
} as const;

export type Foo = (typeof Foo)[keyof typeof Foo];

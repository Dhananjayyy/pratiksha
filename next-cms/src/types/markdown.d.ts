declare module '*.md' {
  interface Cat {
    name: string;
    description: string;
  }

  interface Attributes {
    title: string;
    date: string;
    cats: Cat[];
    [key: string]: any;
  }

  const attributes: Attributes;
  
  // For the React component that renders the content
  import React from 'react';
  const react: React.ComponentType;

  export { attributes, react };
}

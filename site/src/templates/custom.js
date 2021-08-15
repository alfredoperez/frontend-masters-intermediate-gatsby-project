import * as React from 'react';
import { stringify } from '../../public/render-page';

export default function CustomPage({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <pre>{JSON.stringify(pageContext)}</pre>
    </div>
  );
}

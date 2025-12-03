import React from 'react';
import DocItem from '@theme-original/DocItem';
import PasswordProtect from '@site/src/components/PasswordProtect';
import { useLocation } from '@docusaurus/router';

// Define which paths require password protection
const PROTECTED_PATHS = [
  '/docs/core/',
  '/docs/supporting/',
];

const PASSWORD = 'admin123';

export default function DocItemWrapper(props) {
  const location = useLocation();
  
  // Check if current path is protected
  const isProtected = PROTECTED_PATHS.some(path => 
    location.pathname.startsWith(path)
  );

  if (isProtected) {
    return (
      <PasswordProtect password={PASSWORD} storageKey="skymirror-docs-auth">
        <DocItem {...props} />
      </PasswordProtect>
    );
  }

  return <DocItem {...props} />;
}

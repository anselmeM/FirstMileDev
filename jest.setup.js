import '@testing-library/jest-dom';
import React from 'react';

jest.mock('framer-motion', () => {
  const motion = new Proxy(
    {},
    {
      get: (target, prop) => {
        return React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, variants, ...props }, ref) => {
          return React.createElement(prop, { ref, ...props }, children);
        });
      },
    }
  );

  return {
    motion,
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});

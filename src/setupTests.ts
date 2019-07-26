// Custom DOM elements matchers for Jest
import '@testing-library/jest-dom/extend-expect';
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each';

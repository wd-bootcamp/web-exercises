// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Quick fix: Hiding Buggy Error Message
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation((msg, ...args) => {
    // Only suppress the specific "act" warning message
    if (
      typeof msg === "string" &&
      msg.includes("Warning: An update to") &&
      msg.includes("inside a test was not wrapped in act")
    ) {
      return;
    }

    // Otherwise, preserve default behaviour
    // (You could call the original console.error, or console.warn, or do nothing)
    console.error(msg, ...args);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

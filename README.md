# Playwright Test Project

## Requirements

Before getting started, ensure you have the following installed:

- **Node.js**
- **pnpm**

You can install **pnpm** package manager globally using the following command:

```
npm install -g pnpm
```

## Getting Started
Follow these steps to get the project up and run it on your local machine:

**1**. __Clone the repository:__
```
git clone https://github.com/irynakozak1/E2E-test-assignment && 
cd E2E-test-assignment
```
**2**. __Install dependencies:__
```
pnpm install
```
**3**. __Install browsers:__ Playwright requires browser binaries to execute tests. Install them using the following command:
```
pnpm exec playwright install
```
**4**. __Run the tests:__
```
pnpm test
```
This command will run all the tests in Chromium browser. 

**4.1**. __Running Tests in Different Browsers__

__Run tests in WebKit:__
```
pnpm test:webkit
```
__Run tests in Firefox:__
```
pnpm test:firefox
```

## Code Quality

This project uses **ESLint** to maintain consistent code style and quality. Ensure that you run ESLint before submitting any changes.

__Run  ESLint:__
```
pnpm eslint .
```

__Automatically fix issues:__
```
pnpm eslint . --fix
```

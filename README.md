# Buggy Cars Automation Testing

This project provides robust automated testing for the Buggy Cars Rating website using Playwright with TypeScript.

## Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/MMichael20/youcc-home-task.git
cd YOUCC-HOME-TASK
npm install
```
### 2. Install Playwright Browsers
```bash
npx playwright install
```

### 3. Environment Configuration
- Update configuration in `playwright.config.ts`.



## Authentication Setup
- Authentication sessions are stored in `data/storageState.json`.
- The global setup logs in once, optimizing test execution.

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run UI tests only:
```bash
npx playwright test tests/ui
```

Run API tests:
```bash
npx playwright test tests/api
```

Run Hybrid tests:
```bash
npx playwright test tests/hybrid
```

## Project Structure
```
YOUCC-HOME-TASK
├── config
├── data
├── pages 
├── tests
│   ├── ui 
│   ├── api
│   └── hybrid 
├── utils 
├── global-setup.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Notes
This was a very fun and interesting project, especially with combining the hybrid test which is something I've never tried before.

For the single login mechanism I created a global-setup file that registers a new user and logs in, and then saves the token to data/storageState.json, which later all the test are using. Some of the tests don't need to be signed in so for that I used ```storageState: 
undefined``` to tell the test to not use localStorage, that was also a fun and educating experience.

I used the POM module splitting the pages, while creating for each page its functions, and using them to construct many different tests more easily.

I've splitted the test to ui, hybrid and api. For UI - I was performeing a registertion process, one negative and one positive. For the hybrid one I updated the user's hobby and then checked in the UI if it shows correctly. For the API - I updated the user's gender and then verified it has updated successfully.

For the locators I used playwright's codegen and transformed the locators to be usable in my pages.

In conclusion I enjoyed creating this framework and glad for the opportunity to grow and learn :)






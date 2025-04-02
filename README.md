# Buggy Cars Automation Testing

This project provides robust automated testing for the Buggy Cars Rating website using Playwright with TypeScript.

## Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/MMichael20/youcc-home-task.git
cd YOUCC-HOME-TASK
npm install
```

### 2. Environment Configuration
- Update configuration in `config/app.config.ts`.
- Configure environment variables in `config/environments.ts`.

## Authentication Setup
- Authentication sessions are stored in `data/storageState.json`.
- The global setup (`global-setup.ts`) logs in once, optimizing test execution.

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
Was a very fun and interesting project, especially with combining the hybrid test which is something I've never tried before. Ran into some issues with locators - found all the locators using playwright's codegen and transformed them to be usable in my pages.



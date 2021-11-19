# Project Airtable
Airtable cypress test Assignemnt

# Download application
git clone https://github.com/girishnaidu88/Airtable.git
(OR)
gh repo clone girishnaidu88/Airtable

# Install dependencies
node, npm, cypress, @testing-library

# run automation
cd <To the Project home folder>
Run the command below:
1. node_modules/.bin/cypress run --spec "cypress/integration/signup.spec.js" // For headless execution
2. node_modules/.bin/cypress run --headed --spec "cypress/integration/signup.spec.js" // For Actual browser execution


├── README.md
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── signup.spec.js
│   ├── plugins
│   │   └── index.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   └── videos
│       └── signup.spec.js.mp4
├── cypress.json
├── package-lock.json
└── package.json

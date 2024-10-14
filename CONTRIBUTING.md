# Contributing to Implement Contact Form Logic

Thank you for considering contributing to **Implement Contact Form Logic**! We appreciate your time and effort, and we want to make this an enjoyable and collaborative experience for everyone. Below are the guidelines to help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Feature Requests](#feature-requests)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Style Guide](#style-guide)
- [Commit Messages](#commit-messages)
- [License](#license)

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to abide by its terms. 

## How to Contribute

### Reporting Bugs

If you find any bugs or issues with the contact form logic, please [open an issue](https://github.com/dipesh2508/health-optima/issues) and include:

- A clear description of the problem.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Screenshots or error logs (if applicable).

### Feature Requests

We welcome new ideas to improve the contact form logic! To request a new feature:

- Check the existing issues to ensure that it has not been requested already.
- [Open a new feature request issue](https://github.com/dipesh2508/health-optima/issues) and describe:
  - The feature you would like to add.
  - Why it is needed.
  - Any relevant use cases.

### Submitting Pull Requests

Before submitting a pull request:

1. Fork the repository.
2. Create a new branch for each change.
3. Make sure your code follows the style guide (see below).
4. Write clear, concise commit messages.
5. Test your changes thoroughly.
6. [Submit a pull request](https://github.com/dipesh2508/health-optima/pulls) to the `main` branch.

Ensure that your pull request includes:

- A detailed description of what you have done.
- Reference to any relevant issues (e.g., `Fixes #123`).
- Screenshots or a short demo of the new functionality (if applicable).

## Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dipesh2508/health-optima
   cd health-optima
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Style Guide

We follow the following style guidelines for consistency:

- **JavaScript/TypeScript**: Follow the [Airbnb style guide](https://github.com/airbnb/javascript).
- **Tailwind CSS**: Follow the existing order of arranging classes.
- **React Components**: Prefer functional components and hooks.
- **Type Checking**: Use TypeScript for type safety and validations.
- **Linting**: Ensure your code passes linting before committing:

## Commit Messages

Please write clear and meaningful commit messages to make it easier to understand the history of the project. Use the following format for commit messages:

```
type(scope): subject

body (if necessary)
```

- **Type**: The type of change, such as `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **Scope**: The scope of the change, such as `form`, `validation`, `ui`.
- **Subject**: A short description of the change.
- **Body**: A detailed explanation of the change (if necessary).

**Example**:
```
feat(form): add email validation logic

Added a validation function for the email field to ensure that
only valid email addresses are submitted through the contact form.
```

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

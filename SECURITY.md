# Security Policy

## Supported Versions

| Next.js Version | Supported          |
| ------- | ------------------ |
| 14.x    | :white_check_mark: |
| < 14.0  | :x:               |

## Reporting a Vulnerability

We take the security of Health Optima seriously. If you believe you have found a security vulnerability, please report it to us following these steps:

### Where to Report

- **For Critical Issues**: Email us directly at [tnt.tryntest@gmail.com](mailto:tnt.tryntest@gmail.com)
- **For Non-Critical Issues**: Open a GitHub issue with the label "security"

### What to Include

When reporting a vulnerability, please include:

1. Description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact
4. Technical details if possible
5. Any suggested fixes if available

### Response Timeline

- **Initial Response**: Within 48 hours
- **Vulnerability Assessment**: Within 7 days
- **Fix Implementation**: Timeline will vary based on severity and complexity

### Security Best Practices

1. **Authentication**
   - All authentication is handled through Clerk.js
   - Protected routes are managed via middleware
   - API routes are secured with proper authentication checks

2. **Data Protection**
   - Sensitive data is never exposed in client-side code
   - MongoDB connection strings and API keys are properly secured
   - Environment variables are used for all sensitive configuration

3. **API Security**
   - Rate limiting is implemented on API routes
   - CORS policies are properly configured
   - Input validation on all API endpoints

### Development Security Guidelines

1. **Code Standards**
   - Follow TypeScript best practices
   - Use proper type checking
   - Implement proper error handling
   - Regular dependency updates

2. **Environment Configuration**
   - Never commit `.env` files
   - Use `.env.example` for reference
   - Properly configure environment variables in production

3. **Third-Party Dependencies**
   - Regular security audits using `npm audit`
   - Keep dependencies updated
   - Review package permissions

## Responsible Disclosure

We kindly ask you to:

- Give us reasonable time to respond and fix issues before public disclosure
- Not perform tests that could harm the availability or integrity of our services
- Not access or modify data without authorization

## Acknowledgments

We appreciate the security research community's efforts in helping keep Health Optima secure. Contributors who report valid security issues will be acknowledged (if desired).

## License

This security policy is part of the Health Optima project and is covered under the [MIT License](LICENSE).

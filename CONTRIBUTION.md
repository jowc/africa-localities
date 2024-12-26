# Contribution Guide

Thank you for considering contributing to our project! By contributing, you help us improve and grow the African Localities platform for everyone. This guide will help you get started.

## How to Contribute

### 1. Fork the Repository

- Navigate to the [repository on GitHub](https://github.com/jowc/africa-localities.git).
- Click the **Fork** button at the top-right corner to create your own copy of the repository.

### 2. Clone the Forked Repository

- Clone your forked repository to your local machine:
  ```bash
  git clone https://github.com/jowc/africa-localities.git
  cd africa-localities
  ```

### 3. Set Upstream Remote

- Add the original repository as a remote:
  ```bash
  git remote add upstream https://github.com/jowc/africa-localities.git
  ```

### 4. Create a Branch

- Always create a new branch for your contributions:
- Use onle name if its a country and hyphenate if its a state or city. e.g feature/nigeria, feature/nigeria-abuja, feature/nigeria-abuja-wuse
  ```bash
  git checkout -b feature/your-location-name
  ```

### 5. Make Changes

- Make your changes in the appropriate files.
- Follow the coding style and best practices used in the project.

### 6. Test Your Changes

- Run end-to-end test to ensure the project compiles successfully:
  ```bash
  npm run dev
  ```
- Then check the endpoint provided http://localhost:3000 using tools like Postman, Thunder Client VS code extension, or your browser using a JSON preview extension.

- Run tests to ensure your changes don’t break the existing functionality:
  ```bash
  npm test
  ```

### 7. Commit Your Changes

- Write clear and concise commit messages:
  ```bash
  git add .
  git commit -m "Add your message here"
  ```

### 8. Push Your Changes

- Push the changes to your forked repository:
  ```bash
  git push origin feature/your-feature-name
  ```

### 9. Open a Pull Request

- Navigate to the original repository on GitHub.
- Click **New Pull Request**.
- Select your forked repository and branch.
- Provide a clear description of your changes and why they should be merged.

### 10. Respond to Feedback

- Be ready to discuss your pull request and make any necessary changes based on feedback from maintainers.

## Contribution Tips

- **Keep Commits Small**: Focus on a single feature or bug fix per commit.
- **Write Documentation**: Update README.md or add comments to your code if needed.
- **Respect Code Reviews**: Address any feedback in a timely and respectful manner.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Join the Community

Have questions or need help? Join the discussion in our [GitHub Discussions](https://github.com/jowc/africa-localities/discussions) or open an issue. We’re here to help!

## Thank You

Your contributions make a big difference! Thank you for helping us build a better African Localities platform.


# LinkedIn Mock Extension

This browser extension, built using the **WXT framework**, incorporates modern web technologies like **React**, **TypeScript**, **TailwindCSS**, and **shadcn**. It enhances LinkedIn form interactions by providing features such as **instance focus detection**, **UUID attachment** for collision avoidance, and **global state management** using **Zustand**. Additionally, the extension can automatically **generate and insert responses into forms**.

## Features

- **WXT Framework**: A lightweight and flexible framework for web extensions.
- **React & TypeScript**: A powerful combination for building fast, scalable UI components.
- **TailwindCSS & shadcn**: Utility-first CSS framework and component library for a beautiful, customizable UI.
- **Instance Focus Detection**: Detects and identifies the active LinkedIn instance or tab in focus.
- **Global Zustand Store**: A global state management solution to handle user session, form data, and app-wide state.
- **UUIDs for Collision Avoidance**: Automatically attach unique identifiers (UUIDs) to avoid collisions during form submissions.
- **Form Response Generation**: Generates responses for LinkedIn forms and automatically inserts them into the relevant fields.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: TailwindCSS, shadcn
- **State Management**: Zustand
- **Framework**: WXT Framework

## Installation

Follow these steps to install and run the LinkedIn Mock Extension locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/linkedin-mock-extension.git
   cd linkedin-mock-extension
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the extension:**

   ```bash
   npm run build
   ```

4. **Load the extension into your browser:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top right).
   - Click **Load Unpacked** and select the `dist` folder from your project directory.

## Usage

Once the extension is loaded, it will automatically activate on LinkedIn pages. 

## Development

To start the extension in development mode, run the following command:

```bash
npm run dev
```

This will start a local development server with hot-reloading capabilities. Any changes made to the codebase will automatically be reflected in your extension.

## Contributing

Contributions are always welcome! To contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature`).
- Make your changes.
- Commit your changes (`git commit -m 'Add some feature'`).
- Push the branch (`git push origin feature/your-feature`).
- Open a Pull Request.

## Demo

Watch the demo video to see how the extension works:

[![LinkedIn Mock Extension Demo](https://www.youtube.com/watch?v=PJBc1akIM5s)

Click the image above or [here](https://www.youtube.com/watch?v=PJBc1akIM5s) to watch the full demo on YouTube!

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

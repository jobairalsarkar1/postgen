# PostGen AI

PostGen AI is an AI-powered social media content generator that helps users create tailored posts for different platforms.
With just a **prompt** and a **selected platform**, the app generates a ready-to-use post designed to match the tone and style of that specific platform.

Currently supported platforms:

- Facebook
- LinkedIn
- Reddit
- Twitter (X)

---

## Features

- **Authentication with Appwrite OAuth**
  Secure login with Google and GitHub before generating posts.

- **AI Post Generation**
  Powered by **Cohere AI**, posts are generated based on your prompt and chosen platform.

- **Account Management**
  Users can delete their account anytime with a single click.

- **Modern Stack**
  Built with **Next.js 15**, **TailwindCSS**, and **Zustand** for state management.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication & Database:** [Appwrite](https://appwrite.io/)
- **AI Generation:** [Cohere AI](https://cohere.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Utilities:** [Axios](https://axios-http.com/), [date-fns](https://date-fns.org/), [Lucide React](https://lucide.dev/)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/jobairalsarkar1/postgen.git
cd postgen
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment setup

Create a `.env` file in the project root and add:

```env
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
NEXT_PUBLIC_APPWRITE_PROJECT_NAME=your-appwrite-project-name
NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
APPWRITE_DATABASE_ID=your-appwrite-database-id
APPWRITE_API_KEY=your-appwrite-api-key
APPWRITE_TABLE_CAMPAIGNS=your-appwrite-table
APPWRITE_TABLE_MESSAGES=your-appwrite-table
COHERE_API_KEY=your-cohere-api-key
```

### 4. Run locally

```bash
npm run dev
```

---

## Credits

- Authentication & Database: [Appwrite](https://appwrite.io/)
- AI Text Generation: [Cohere AI](https://cohere.com/)
- Frontend: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Lucide React](https://lucide.dev/)
- State Management: [Zustand](https://zustand-demo.pmnd.rs/)

---

## License

This project is open source and available under the [Apache License](LICENSE).

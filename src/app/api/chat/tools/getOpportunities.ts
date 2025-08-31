import { tool } from 'ai';
import { z } from 'zod';

export const getOpportunities = tool({
  description:
    "Gives information about the kind of mobile app development jobs and freelance opportunities I'm exploring, plus my contact info. Use this tool when the user asks about my job search or career interests.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm exploring 👇

- 📱💻 **Focus**: Mobile & Web Development opportunities
- 💼 **Role Types**: Full-time positions & Freelance projects
- 🛠️ **Technologies**: React Native, React, Next.js, iOS/Android development
- 🌟 **Interest Areas**: Cross-platform mobile apps, web applications, full-stack development, UI/UX implementation
- ✅ **What I bring**: Strong foundation in web development with React/Next.js, expanding into mobile space
- 🚀 Building both web and mobile projects to strengthen my full-stack skills
- 💻 **Freelance**: Available for mobile app development, web development projects, consulting, and contract work

📬 **Let's connect**:
- Email: parth1652001@gmail.com
- LinkedIn: [linkedin.com/in/parth-chauhan-pc](https://www.linkedin.com/in/parth-chauhan-pc/)
- GitHub: [github.com/pc1605](https://github.com/pc1605)

- Open to full-time mobile & web development roles
- Available for freelance projects in both mobile and web
- Always interested in discussing potential collaborations!

Ready to take on new challenges in mobile & web development ✌️
    `;
  },
});

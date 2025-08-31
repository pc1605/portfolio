import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Parth Chauhan. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Parth Chauhan, a 24-year-old skilled full-stack developer with a Master's in Computer Applications and 2.5 years of experience. Currently working as a Mobile App Developer at Brilworks Software, specializing in React Native, React.js, Node.js, and cloud technologies. I've architected 15+ scalable mobile applications impacting 20,000+ daily users.",
    };
  },
});

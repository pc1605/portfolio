import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description: "This tool will show Parth's sports interests and hobbies",
  parameters: z.object({}),
  execute: async () => {
    return "Here are my sports interests and hobbies!";
  },
});


import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo representing one of the craziest things I've ever done - diving into a swimming pool from a great height! It was such an exhilarating experience that really pushed me out of my comfort zone. The rush of adrenaline and the feeling of complete freedom during the dive was absolutely incredible. It's moments like these that remind me why I love taking on new challenges and adventures!";
  },
});
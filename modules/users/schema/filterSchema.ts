import { z } from "zod";

const filterSchema = z.object({
  name: z.string(),
});
export default filterSchema;

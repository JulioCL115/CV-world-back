const { z, ZodError } = require("zod");

const createCommentSchema = z.object({
  comment: z
    .string()
    .nonempty("Comment is required")
    .min(5, "Comment is too short")
    .max(100, "Comment is too long"),
});

module.exports = {
  createCommentSchema,
  ZodError,
};

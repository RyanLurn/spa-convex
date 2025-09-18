import { query } from "backend/_generated/server";

export const get = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query("tasks").collect();
  }
});

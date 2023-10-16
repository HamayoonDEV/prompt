import connectDb from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectDb();
    const prompts = await Prompt.find({});
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Faild to fetch all prompts", { status: 500 });
  }
};

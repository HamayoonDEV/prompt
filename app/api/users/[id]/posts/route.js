import connectDb from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const prompts = await Prompt.find({ _id: params.id });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Faild to fetch all prompts", { status: 500 });
  }
};

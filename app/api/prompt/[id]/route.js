import connectDb from "@utils/database";
import Prompt from "@models/prompt";
//GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const prompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to fetch all prompts", { status: 500 });
  }
};

//PATCH (update)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectDb();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to update prompt", {
      status: 500,
    });
  }
};

//DELETE (delete)

export const DELETE = async (request, { params }) => {
  try {
    await connectDb();
    await Prompt.findByIdAndRemove(params.id);
    return new Response("Deleted SuccessFully ", { status: 200 });
  } catch (error) {
    return new Response("Faild to delete prompt", { status: 500 });
  }
};

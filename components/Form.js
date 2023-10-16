import Link from "next/link";

const Form = ({ type, post, setPost, submittig, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let the imagination
        run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-2xl flex flex-col gap-7 glassmorphism "
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="write your prompt here"
            required
            className="form_textarea"
          />
        </label>

        {/* tag */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            tag{" "}
            <span className="font-normal">
              (#product,#webdevelopment,#idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
        </div>
        <button
          type="submit"
          disabled={submittig}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          {submittig ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
"use client";
export default function page() {
  //   throw new Error(" failed to load data");
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-1"
        action="/page/sign-in"
        method="post"
      >
        <label htmlFor="username">
          USERNAME:
          <input type="username" required name="username" id="password" />
        </label>

        <label htmlFor="password">
          PASSWORD:
          <input type="password" name="pasword" id="password" />
        </label>
        <input
          className="p-0.5 w-fit bg-blue-400 text-white-400 rounded shadow"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

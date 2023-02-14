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

        <label htmlFor="email">
          EMAIL:
          <input type="email" required name="email" id="email" />
        </label>

        <label htmlFor="password">
          PASSWORD:
          <input type="password" name="pasword" id="password" />
        </label>

        <label htmlFor="cpassword">
          CONFIRM PASSWORD:
          <input type="password" name="cpasword" id="cpassword" />
        </label>

        <input
          className="transition transform hover:scale-95 filter drop-shadow-lg p-0.5  bg-blue-400 text-white-400 rounded shadow-lg "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

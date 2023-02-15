"use client";
export default function page() {
  //   throw new Error(" failed to load data");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // Object.entries(query).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/user/log-in";
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    // alert(`Is this your full name: ${result.data}`);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-1"
        method="POST"
        acceptCharset="UTF-8"
        id="ajaxForm"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          EMAIL:
          <input type="email" required name="email" id="email" />
        </label>
        <label htmlFor="password">
          PASSWORD:
          <input type="password" name="password" id="password" />
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

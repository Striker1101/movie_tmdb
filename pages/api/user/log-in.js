import User from "../../../user";

export default function handler(req, res) {
  const { email, password } = req.body;
  switch (req.method) {
    case "POST":
      // Get data from your database
      for (let i = 0; i < User.length; i++) {
        if (email === User[i].email && password === User[i].password) {
          res.status(200).json({ message: "success" });
        } else {
          res.status(400).json({ message: "fail" });
        }
      }

      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

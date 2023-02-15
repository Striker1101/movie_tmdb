import { v4 as uuidv4 } from "uuid";
import {User }from "@/pages/user";
export default function handler(req, res) {
  const id = uuidv4();
  const { username, email, password } = req.body;
  switch (req.method) {
    case "POST":
      // Get data from your database
      User.push({ id, username, email, password });
      res.status(200).json({ message: 200 });
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

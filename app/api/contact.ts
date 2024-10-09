import { NextApiRequest, NextApiResponse } from "next";

export default function sendGmail(req: NextApiRequest,res: NextApiResponse ) {
return res.status(200).json({ name: "shincode" });
}
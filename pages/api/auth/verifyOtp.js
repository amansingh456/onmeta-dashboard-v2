import entityClient from "../../../app/clients/entityClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await entityClient.post("/merchant/v1/verify", req.body);
      return res.status(response?.status).send(response?.data);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  } else {
    return res.status(404).send({ error: "Not found" });
  }
}

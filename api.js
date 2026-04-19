export default async function handler(req, res) {

  const { input, tool } = req.body;

  let prompt = "";

  if (tool === "ads") {
    prompt = "اكتب إعلان باللهجة العراقية: " + input;
  }

  if (tool === "ideas") {
    prompt = "اعطيني أفكار مشاريع في العراق: " + input;
  }

  if (tool === "profit") {
    prompt = "احسب الربح من هذا: " + input;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: prompt
    })
  });

  const data = await response.json();

  res.status(200).json({
    result: data.output[0].content[0].text
  });
}

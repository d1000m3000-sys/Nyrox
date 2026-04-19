let currentTool = "ads";

function setTool(tool) {
  currentTool = tool;
}

async function send() {
  const input = document.getElementById("input").value;

  const res = await fetch("/api", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({input, tool: currentTool})
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.result;
}

let currentTool = "ads";

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleTheme(){
  document.body.classList.toggle("light");
}

function setTool(tool){
  currentTool = tool;
}

function addMessage(text, type){
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

async function send(){
  const input = document.getElementById("input");
  const text = input.value;

  if(!text) return;

  addMessage(text,"user");
  input.value = "";

  const res = await fetch("./api",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({input:text, tool:currentTool})
  });

  const data = await res.json();

  addMessage(data.result,"bot");
}

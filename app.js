// تسجيل Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log("PWA شغال ✅"))
      .catch(err => console.log("خطأ:", err));
  });
}

// AI function (نفس القديم)
async function send() {
  const input = document.getElementById("input").value;

  const res = await fetch("/api", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({input})
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.result;
}

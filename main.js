let sends = 0;
setInterval(() => {
  sends++;
  document.getElementById("count").textContent = `sends: ${sends}`;
  import.meta.hot?.send("repro:ping", { sends });
}, 1000);

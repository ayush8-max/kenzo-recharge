document.getElementById("rechargeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    userid: userid.value,
    serverid: serverid.value,
    pack: pack.value
  };

  const res = await fetch("/api/recharge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});

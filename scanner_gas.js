

document.getElementById("barcode").addEventListener("keydown", (event) => {
  let barcode_value = document.getElementById("barcode").value;
  if (event.key === "Enter") {
    const barcode_container_html = document.createElement("p");
    barcode_container_html.textContent = `Barcode number: ${barcode_value}`;
    document.getElementById("barcode-container").appendChild(barcode_container_html);
    document.getElementById("barcode").value = "";
  }







});

// const currentDate = new Date().toISOString().slice(0, 10);
// document.getElementById("dateCurrent").value = currentDate;

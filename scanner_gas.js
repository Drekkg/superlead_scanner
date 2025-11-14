document.getElementById("technician").focus();
const currentDate = new Date().toISOString().slice(0, 10);




document.getElementById("technician").addEventListener("keydown", (event) => {
  let technician_value = document.getElementById("technician").value;
  if (event.key === "Enter" && technician_value) {
    const technician_html = document.createElement("h4");
    technician_html.textContent = `Techniker: ${technician_value}  Datum: ${currentDate}`;
    document.getElementById("barcode-container").appendChild(technician_html);
    document.getElementById("technician").value = "";
    document.getElementById("technician_input").remove();
    document.getElementById("barcode_bottle").focus();
  }});

document.getElementById("barcode_bottle").addEventListener("keydown", (event) => {
  let barcode_value = document.getElementById("barcode_bottle").value;
  if (event.key === "Enter" && barcode_value) {
    const barcode_container_html = document.createElement("p");
    barcode_container_html.textContent = `Barcode number: ${barcode_value} Gas: Sticksoff Fullmenge: 10l`;
    document.getElementById("barcode-container").appendChild(barcode_container_html);
    document.getElementById("barcode_bottle").value = "";
  }







});

// const currentDate = new Date().toISOString().slice(0, 10);
// document.getElementById("dateCurrent").value = currentDate;

document.getElementById("technician").focus();
const currentDate = new Date().toISOString().slice(0, 10);
let barcode_id = 0;



document.getElementById("technician").addEventListener("keydown", (event) => {
  let technician_value = document.getElementById("technician").value;
  if (event.key === "Enter" && technician_value) {
    const technician_html = document.createElement("h4");
    technician_html.textContent = `Techniker: ${technician_value}  Datum: ${currentDate}`;
    document.getElementById("barcode-container").appendChild(technician_html);
    document.getElementById("technician").value = "";
    document.getElementById("technician_input").remove();
    document.getElementById("span_hide").classList.remove("hide");
    document.getElementById("barcode_bottle").focus();
  }});

document.getElementById("barcode_bottle").addEventListener("keydown", (event) => {
  let barcode_value = document.getElementById("barcode_bottle").value;
  if (event.key === "Enter" && barcode_value) {
    barcode_id ++;
    const barcode_container_html = document.createElement("p");
    barcode_container_html.id = `barcode_${barcode_id}`;
    barcode_container_html.textContent = `Barcode number: ${barcode_value} Gas: Sticksoff Fullmenge: 10l`;
    const button = document.createElement("button");
    button.textContent = "X";
    button.id = `barcode_button_${barcode_id}`;
    barcode_container_html.appendChild(button)
    document.getElementById("barcode-container").appendChild(barcode_container_html);
    document.getElementById("barcode_bottle").value = "";
    remove_scanned_item();
  }
});

const remove_scanned_item = () => {
document.getElementById(`barcode_button_${barcode_id}`).addEventListener("click", (event) => {
const barcode_to_remove_id = event.target.id.substring(15);
document.getElementById(`barcode_${barcode_to_remove_id}`).remove();
})


}



// const currentDate = new Date().toISOString().slice(0, 10);
// document.getElementById("dateCurrent").value = currentDate;

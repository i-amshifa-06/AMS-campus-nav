const blocks = [
  { name: "CSE & IT Block", lat: 13.147709, lon: 80.058464 },
  { name: "Basic Engineering Block", lat: 13.147422, lon: 80.058960 },
  { name: "ECE Block", lat: 13.146888, lon: 80.058802 },
  { name: "EEE Block", lat: 13.147037, lon: 80.059698 },
  { name: "AMS Canteen", lat: 13.146777, lon: 80.059334 },
  { name: "Girls Hostel", lat: 13.146819, lon: 80.060008 },
  { name: "AMS Masjid", lat: 13.146475, lon: 80.060354 },
  { name: "Boys Hostel", lat: 13.147469, lon: 80.057550 },
  { name: "Architecture Block", lat: 13.147296, lon: 80.056759 },
  { name: "Mechanical Block", lat: 13.147151, lon: 80.056290 }
];

const select = document.getElementById("blockSelect");

blocks.forEach((b, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = b.name;
  select.appendChild(opt);
});

function startAR(){
  const selected = blocks[select.value];
  localStorage.setItem("destination", JSON.stringify(selected));
  window.location.href = "ar.html";
}

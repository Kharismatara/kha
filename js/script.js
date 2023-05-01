const url = "https://data.bps.go.id/api/v1/pusdatin/satuan/010100/indikator/93191/tahun/2018";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const tableData = document.getElementById("data-stunting");
    data.forEach((item) => {
      const row = tableData.insertRow();
      const year = row.insertCell(0);
      const prevalence = row.insertCell(1);
      year.innerHTML = item.tahun;
      prevalence.innerHTML = item.nilai;
    });
  });

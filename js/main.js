
const getErgastAPI = async function (series, season) {
    let response = await fetch(`https://ergast.com/api/f1/${series}/${season}/driverStandings.json`);
    let data = await response.json();
    return await data;
}
const f1data = stats.MRData.StatsTable.StatsLists[0].DriverStats

function addTable(tableColumn, tableRow) {
    let statsTable = document.getElementById('stats');
    new_col = document.createElement('td');
    new_col.innerText = tableColumn;
    tableRow.append(new_col);
    statsTable.appendChild(tableRow);
}
    
  function addToDriverList(driversList) {
        driversList = document.createElement('tr'); 
        let driversList=`FullName : ${driver.name},Position:${driver.postion},Points:${driver.points},Wins:${driver.wins}`
        driversList.append(statsTable);
}

const f1Form = document.getElementById('f1Table');
f1Form.addEventListener('submit', async (x) => {
    x.preventDefault();
    let f1Series = x.target.series.value;
    console.log(f1Series)
    let f1Season = x.target.season.value;
    console.log(f1Season)
    let stats = await getErgastAPI(f1Series, f1Season);
    tableList(stats);
    console.log(stats)

});
function Submitbutton(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("Year")[0]. value) 
    console.log(document.getElementsByName("round")[0]. value)
    APICall(document.getElementsByName("Year")[0].value, document.getElementsByName("round")[0]. value)

}


async function APICall(Year, round){
    // connecting to API source
    let save = await axios.get(`https://ergast.com/api/f1/${Year}/${round}/driverStandings.json`)
    console.log(save)
    // search into the json file in API
    save=save.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(save)

    // get the tagname on the THML and store date to each table start from 0 index 
    // move each data by append child 
    let tbody=document.getElementsByTagName('tbody')[0];

// create the table under the table base on the table cell 
    for (let racer of save){
        let tr=document.createElement('tr')
        tbody.appendChild(tr)
        
        let th=document.createElement('th');
        th.scope="row";
        th.innerText=racer.Driver.givenName;
        tr.appendChild(th);

        td=document.createElement('td');
        td.innerText=racer.Driver.familyName;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.position;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.wins;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Driver.dateOfBirth;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Driver.nationality;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=racer.Constructors[0].name;
        tr.appendChild(td);
    }
} 

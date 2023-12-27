export class Table{
    constructor(host, h, data) {
        if(!host)
            throw new error("Roditeljski element ne postoji!");
    
        const table = document.createElement('table');
        table.classList.add('tabela');
        host.append(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const trh = document.createElement('tr');
        thead.append(trh);
        h.forEach(e => {
            const th = document.createElement('th');
            th.innerText = e;
            trh.append(th);
        });

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        data.forEach(e => {
            const trb = document.createElement('tr');
            tbody.append(trb);

            const thname = document.createElement('td');
            thname.innerText = e.name;
            trb.append(thname);

            const thinitiator = document.createElement('td');
            thinitiator.innerText = e.initiator;
            trb.append(thinitiator);

            const thparticipants = document.createElement('td');
            thparticipants.innerText = e.participants;
            trb.append(thparticipants);

            const thtime = document.createElement('td');
            thtime.innerText = e.time;
            trb.append(thtime);

            const thview = document.createElement('td');
            thview.innerText = e.view;
            trb.append(thview);

            const thrating = document.createElement('td');
            thrating.innerText = e.rating;
            trb.append(thrating);

            const thstatistics = document.createElement('td');
            thstatistics.innerText = e.statistics;
            trb.append(thstatistics);
        });
    }
}
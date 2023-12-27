import { Table } from "./table.js";

export class FoldersList {
    constructor(host){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const title1 = document.createElement('div');
        title1.setAttribute('class', 'folders-list-title');
        host.append(title1);

        const name = document.createElement('p');
        name.innerText = "Favorites";
        title1.append(name);

        const icon = document.createElement('img');
        icon.setAttribute('src', 'img/folders-list/down-circle.png');
        title1.append(icon);

        let h = ["Name", "Initiator", "Participants", "Time stamps", "View statistics", "Rating", "Speaking statistics"];
        let data1 = [
            {name: "Video Record 01", initiator:"Jovan S.", participants:"Jovan S, Masa M.", time: "12:53 - 13:27", view: "152 views", rating: "4.5 out of 5.0", statistics: "86% speaking"},
            {name: "Video Record 02", initiator:"Jovan S.", participants:"Jovan S, Masa M.", time: "12:53 - 13:27", view: "152 views", rating: "4.5 out of 5.0", statistics: "86% speaking"}
        ];

        const table1 = new Table(host, h, data1);

        const tabela = document.querySelector(".tabela");
        console.log(tabela);

        icon.addEventListener('click', function() {
            console.log(tabela);
            if(!tabela.classList.contains("hidden"))
            {
                tabela.classList.add('hidden');
            }
            else
            {
                tabela.classList.remove("hidden");
            }
        })

        const title2 = document.createElement('div');
        title2.setAttribute('class', 'folders-list-title');
        host.append(title2);

        const name2 = document.createElement('p');
        name2.innerText = "Jovan";
        title2.append(name2);

        const icon2 = document.createElement('img');
        icon2.setAttribute('src', 'img/folders-list/minus-circle.png');
        title2.append(icon2);
    }
}
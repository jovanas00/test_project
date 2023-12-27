import { Folders } from "./folders.js";
import { Videos } from "./videos.js";
import { Table } from "./table.js";
import { FoldersList } from "./foldersList.js";
import { SectionTitle } from "./section.js";

export class Layout {
    constructor(host){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const layouts = document.createElement('div');
        layouts.setAttribute('class', 'layouts');
        host.append(layouts);

        const tmp = document.createElement('div');
        tmp.setAttribute('class', 'tmp-div');
        host.appendChild(tmp);

        const grid = document.createElement('img');
        
        layouts.append(grid);
        grid.setAttribute('src', 'img/grid-layout.png');

        const list = document.createElement('img');
        
        layouts.append(list);
        list.setAttribute('src', 'img/list-layout.png');

        grid.addEventListener('click', function() {
            let folders1 = document.querySelector('.folders-div');
            if(folders1 != null)
                host.removeChild(folders);

            let videos1 = document.querySelector('.videos-div');
            if(videos1 != null)
                host.removeChild(videos1);

            let section = document.querySelectorAll('.section');
            if(section != null)
            {
                section.forEach(element => {
                    host.removeChild(element);
                });
            }
            
            let foldersListTitle = document.querySelectorAll('.folders-list-title');
            if(foldersListTitle != null)
            {
                foldersListTitle.forEach(element => {
                    host.removeChild(element);
                });
            }

            let tables = document.querySelectorAll('.tabela');
            if(tables != null)
            {
                tables.forEach(element => {
                    host.removeChild(element);
                });
            }
            
            const folders = new Folders();
            folders.folders(host);

            const videos = new Videos();
            videos.videos(host);
        })



        list.addEventListener('click', function() {
            let section = document.querySelectorAll('.section');
            if(section != null)
            {
                section.forEach(element => {
                    host.removeChild(element);
                });
            }

            let folders = document.querySelector('.folders-div');
            console.log(folders);
            if(folders != null)
                host.removeChild(folders);

            let videos = document.querySelector('.videos-div');
            if(videos != null)
                host.removeChild(videos);

            const title = new SectionTitle();
            title.section(host, 'img/section-title/folders.png', 'Folders');

            const foldersList = new FoldersList(document.body);

            const title1 = new SectionTitle();
            title1.section(host, 'img/section-title/video.png', 'Videos');
            let h = ["Name", "Initiator", "Participants", "Time stamps", "View statistics", "Rating", "Speaking statistics"];
            let data2 = [
                {name: "Video Record 01", initiator:"Jovan S.", participants:"Jovan S, Masa M.", time: "12:53 - 13:27", view: "152 views", rating: "4.5 out of 5.0", statistics: "86% speaking"},
                {name: "Video Record 02", initiator:"Jovan S.", participants:"Jovan S, Masa M.", time: "12:53 - 13:27", view: "152 views", rating: "4.5 out of 5.0", statistics: "86% speaking"},
                {name: "Video Record 03", initiator:"Jovan S.", participants:"Jovan S, Masa M.", time: "12:53 - 13:27", view: "152 views", rating: "4.5 out of 5.0", statistics: "86% speaking"}
            ];

            const table2 = new Table(document.body, h, data2);
            
        })
    }
}
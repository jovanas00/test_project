import { SectionTitle } from "./section.js";
import { FoldersCard } from "./foldersCard.js";

export class Folders {
    constructor(){

    }
    
    folders(host){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const title = new SectionTitle();
        title.section(host, 'img/section-title/folders.png', 'Folders');

        let data = [{name: "Favorites", images: ['img/giphy (1) 5.png', 'img/giphy (1) 5.png', 'img/giphy (1) 5.png', 'img/giphy (1) 5.png']}, 
        {name: "Jovan", images: ['img/giphy (1) 5.png', 'img/giphy (1) 5.png']}]
        
        // let data = {name: "Favorites", images: ['img/giphy (1) 5.png', 'img/giphy (1) 5.png', 'img/giphy (1) 5.png', 'img/giphy (1) 5.png']}
        const folder = document.createElement('div');
        folder.setAttribute('class', 'folders-div');
        host.append(folder);

        data.forEach(element => {
            const card = new FoldersCard(folder, element);
        });
    }
}
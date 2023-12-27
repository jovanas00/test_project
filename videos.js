import { SectionTitle } from "./section.js";
import { VideosCard } from "./videosCard.js";

export class Videos {
    constructor(){

    }

    videos(host){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const title = new SectionTitle();
        title.section(host, 'img/section-title/video.png', 'Videos');

        let data = [{image: 'img/giphy (1) 5.png', name: "Video Record 01", time: "2 minutes ago"}, 
        {image: 'img/giphy (1) 5.png', name: "Video Record 02", time: "5 minutes ago"}, 
        {image: 'img/giphy (1) 5.png', name: "Video Record 03", time: "Yesterday"}, 
        {image: 'img/giphy (1) 5.png', name: "Video Record 04", time: "3 days ago"}]

        const video = document.createElement('div');
        video.setAttribute('class', 'videos-div');
        host.append(video);

        data.forEach(element => {
            const card = new VideosCard(video, element);
        });
    }
}
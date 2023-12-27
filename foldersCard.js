export class FoldersCard {
    constructor(host, data){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const foldersCard = document.createElement('div');
        host.append(foldersCard);
        foldersCard.setAttribute('class', 'folders-card');
        
        const cardTitle = document.createElement('div');
        cardTitle.setAttribute('class', 'folders-card-title');
        foldersCard.append(cardTitle);

        const title = document.createElement('p');
        title.innerText = data.name;
        cardTitle.append(title);

        const more = document.createElement('img');
        more.setAttribute('src', 'img/folders-card/more-vertical.png');
        more.setAttribute('class', 'more-dots');
        cardTitle.append(more);

        const images = document.createElement('div');
        images.setAttribute('class', 'folders-images-div');
        foldersCard.append(images);

        data.images.forEach(e => {
            const img = document.createElement('img');
            img.setAttribute('src', e);
            images.append(img);
        });
    }
}
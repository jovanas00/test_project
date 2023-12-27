export class SectionTitle {
    constructor(){

    }

    section(host, img, title){
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const section = document.createElement('div');
        section.setAttribute('class', 'section');
        host.append(section);

        const sectionImg = document.createElement('img');
        sectionImg.setAttribute('src', img);
        sectionImg.setAttribute('class', 'section-img');
        section.append(sectionImg);

        const sectionTitle = document.createElement('p');
        sectionTitle.innerText = title;
        sectionTitle.setAttribute('class', 'section-title');
        section.append(sectionTitle);

        const moreIcon = document.createElement('img');
        moreIcon.setAttribute('src', 'img/section-title/plus-circle.png');
        moreIcon.setAttribute('class', 'plus-circle');
        section.append(moreIcon);
    }
}
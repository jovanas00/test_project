export class SidebarElement{
    constructor(){
        
    }

    sidebarEL(host, imgSrc, text) {
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const sidebarEl = document.createElement('div');
        sidebarEl.setAttribute('class', 'sidebar-div');
        host.append(sidebarEl);

        const elImg = document.createElement('img');
        elImg.setAttribute('src', imgSrc);
        elImg.setAttribute('class', 'el-img');
        sidebarEl.append(elImg);
        const el = document.createElement('h6');
        el.innerText = text;
        sidebarEl.append(el);
        el.setAttribute('class', 'sidebar-text');
    }
    
}
export class Profile {
    constructor(host) {
        if(!host)
            throw new error("Roditeljski element ne postoji!");
        const profile = document.createElement('div');
        host.append(profile);
        profile.setAttribute('class', 'profile');

        const searchIcon = document.createElement('img');
        searchIcon.setAttribute('src', 'img/profile/search.png');
        searchIcon.setAttribute('class', 'profile-icon');
        profile.append(searchIcon);

        const bellIcon = document.createElement('img');
        bellIcon.setAttribute('src', 'img/profile/new.png');
        profile.append(bellIcon);

        const divider = document.createElement('img');
        divider.setAttribute('src', 'img/profile/vertical.png');
        profile.append(divider);
        divider.setAttribute('class', 'divider');
        
        const name = document.createElement('h6');
        name.innerText = "Jovan Soldatovic";
        profile.append(name);
        name.setAttribute('class', 'profile-name');

        const image = document.createElement('img');
        image.setAttribute('src', 'img/profile/200w (1) 1.png');
        profile.append(image);
        image.setAttribute('class', 'profile-image');
    }
}
import { SidebarElement } from "./SidebarElement.js";

export class Sidebar{
    construstor(){

    }

    sidebar(host) {
        if(!host)
            throw new error("Roditeljski element ne postoji!");
   
        const sidebar = document.createElement('div');
        sidebar.setAttribute('class', 'sidebar');
        host.append(sidebar);

        //studio
        // const sidebarTitle = new SidebarElement();
        // sidebarTitle.sidebarEL(sidebar, 'img/Group 1.png', "Studio");
        const sidebarTitle = document.createElement('div');
        sidebarTitle.setAttribute('class', 'sidebar-title');
        sidebar.append(sidebarTitle);

        const titleImg = document.createElement('img');
        titleImg.setAttribute('src', 'img/sidebar/Group 1.png');
        titleImg.setAttribute('class', 'title-img');
        sidebarTitle.append(titleImg);
        const title = document.createElement('p');
        title.innerText = "Studio";
        sidebarTitle.append(title);
        title.setAttribute('class', 'sidebar-title-text');

        //session
        const el1 = new SidebarElement();
        el1.sidebarEL(sidebar, 'img/sidebar/double-caret-right-circle.png', "Session");

        //profile
        const el2 = new SidebarElement();
        el2.sidebarEL(sidebar, 'img/sidebar/user-circle.png', "Profile");

        //notifications
        const el3 = new SidebarElement();
        el3.sidebarEL(sidebar, 'img/sidebar/bell.png', "Notifications");

        //calendar
        const el4 = new SidebarElement();
        el4.sidebarEL(sidebar, 'img/sidebar/appointments.png', "Calendar");

        //statistics
        const el5 = new SidebarElement();
        el5.sidebarEL(sidebar, 'img/sidebar/3. ideas.png', "Statistics");

        //settings
        const el6 = new SidebarElement();
        el6.sidebarEL(sidebar, 'img/sidebar/a_1. settings.png', "Settings");

        
        //admin
        const adminSettings = document.createElement('div');
        sidebar.append(adminSettings);
        adminSettings.setAttribute('class', 'admin-settings');

        const el7 = new SidebarElement();
        el7.sidebarEL(adminSettings, 'img/sidebar/6. articles.png', "Admin");

        //company settings
        const el8 = new SidebarElement();
        el8.sidebarEL(adminSettings, 'img/sidebar/a_1. settings.png', "Company settings");

        //studio
        // const sidebarTitle = document.createElement('div');
        // sidebar.append(sidebarTitle);

        // const titleImg = document.createElement('img');
        // titleImg.setAttribute('src', 'img/Group 1.png');
        // sidebar.append(titleImg);
        // const title = document.createElement('p');
        // title.innerText = "Studio";
        // sidebarTitle.append(title);
        // sidebarTitle.setAttribute('class', 'sidebar-text');

        // //session
        // const sidebarEl1 = document.createElement('div');
        // sidebar.append(sidebarEl1);

        // const el1Img = document.createElement('img');
        // el1Img.setAttribute('src', 'img/double-caret-right-circle.png');
        // sidebarEl1.append(el1Img);
        // const el1 = document.createElement('h5');
        // el1.innerText = "Session";
        // sidebarEl1.append(el1);
        // el1.setAttribute('class', 'sidebar-text');

        // //profile
        // const sidebarEl2 = document.createElement('div');
        // sidebar.append(sidebarEl2);

        // const el2Img = document.createElement('img');
        // el2Img.setAttribute('src', 'img/user-circle.png');
        // sidebarEl2.append(el2Img);
        // const el2 = document.createElement('h6');
        // el2.innerText = "Profile";
        // sidebarEl2.append(el2);
        // el2.setAttribute('class', 'sidebar-text');

        // //notifications
        // const sidebarEl3 = document.createElement('div');
        // sidebar.append(sidebarEl3);

        // const el3Img = document.createElement('img');
        // el3Img.setAttribute('src', 'img/bell.png');
        // sidebarEl3.append(el3Img);
        // const el3 = document.createElement('h6');
        // el3.innerText = "Notifications";
        // sidebarEl3.append(el3);
        // el3.setAttribute('class', 'sidebar-text');

        // //calendar
        // const sidebarEl4 = document.createElement('div');
        // sidebar.append(sidebarEl4);

        // const el4Img = document.createElement('img');
        // el4Img.setAttribute('src', 'img/appointments.png');
        // sidebarEl4.append(el4Img);
        // const el4 = document.createElement('h6');
        // el4.innerText = "Calendar";
        // sidebarEl4.append(el4);
        // el4.setAttribute('class', 'sidebar-text');

        // //statistics
        // const sidebarEl5 = document.createElement('div');
        // sidebar.append(sidebarEl5);

        // const el5Img = document.createElement('img');
        // el5Img.setAttribute('src', 'img/3. ideas.png');
        // sidebarEl5.append(el5Img);
        // const el5 = document.createElement('h6');
        // el5.innerText = "Statistics";
        // sidebarEl5.append(el5);
        // el5.setAttribute('class', 'sidebar-text');

        // //settings
        // const sidebarEl8 = document.createElement('div');
        // sidebar.append(sidebarEl8);

        // const el8Img = document.createElement('img');
        // el8Img.setAttribute('src', 'img/a_1. settings.png');
        // sidebarEl8.append(el8Img);
        // const el8 = document.createElement('h6');
        // el8.innerText = "Settings";
        // sidebarEl8.append(el8);
        // el8.setAttribute('class', 'sidebar-text');

        //admin
        // const sidebarEl6 = document.createElement('div');
        // sidebar.append(sidebarEl6);

        // const el6Img = document.createElement('img');
        // el6Img.setAttribute('src', 'img/6. articles.png');
        // sidebarEl6.append(el6Img);
        // const el6 = document.createElement('h6');
        // el6.innerText = "Admin";
        // sidebarEl6.append(el6);
        // el6.setAttribute('class', 'sidebar-text');

        // //company settings
        // const sidebarEl7 = document.createElement('div');
        // sidebar.append(sidebarEl7);

        // const el7Img = document.createElement('img');
        // el7Img.setAttribute('src', 'img/a_1. settings.png');
        // sidebarEl7.append(el7Img);
        // const el7 = document.createElement('h6');
        // el7.innerText = "Company settings";
        // sidebarEl7.append(el7);
        // el7.setAttribute('class', 'sidebar-text');
    }
}
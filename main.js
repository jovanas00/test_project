import { Sidebar } from "./sidebar.js";
import { Folders } from "./folders.js";
import { Videos } from "./videos.js";
import { Profile } from "./profile.js";
import { Layout } from "./layout.js";

const sidebar = new Sidebar();

sidebar.sidebar(document.body);

const pageTitle = document.createElement('p');
pageTitle.innerText = "Sessions";
pageTitle.setAttribute('class', 'page-title');
document.body.append(pageTitle);

const folders = new Folders();
folders.folders(document.body);

const videos = new Videos();
videos.videos(document.body);

const profile = new Profile(document.body);

const layout = new Layout(document.body);
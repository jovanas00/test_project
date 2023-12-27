export class VideosCard{
    constructor(host, data) {
        if(!host)
            throw new error("Roditeljski element ne postoji!");

        const videosCard = document.createElement('div');
        videosCard.setAttribute('class', 'video-card');
        host.append(videosCard);

        const img = document.createElement('img');
        img.setAttribute('src', data.image);
        img.setAttribute('class', 'video-img');
        videosCard.append(img);

        const heart = document.createElement('img');
        heart.setAttribute('src', 'img/videos-card/heart.png');
        heart.setAttribute('class', 'heart');
        videosCard.append(heart);

        const play = document.createElement('img');
        play.setAttribute('src', 'img/videos-card/play-circle.png');
        play.setAttribute('class', 'video-play');
        videosCard.append(play);

        const videoTitle = document.createElement('div');
        videoTitle.setAttribute('class', 'video-title');
        videosCard.append(videoTitle);

        const title = document.createElement('p');
        title.innerText = data.name;
        title.setAttribute('class', 'video-p');
        videoTitle.append(title);

        const more = document.createElement('img');
        more.setAttribute('src', 'img/folders-card/more-vertical.png');
        more.setAttribute('class', 'more-dots');
        videoTitle.append(more);

        const videoTime = document.createElement('div');
        videoTime.setAttribute('class', 'video-time');
        videosCard.append(videoTime);

        const clock = document.createElement('img');
        clock.setAttribute('src', 'img/videos-card/clock.png');
        videoTime.append(clock);

        const time = document.createElement('p');
        time.innerText = data.time;
        time.setAttribute('class', 'video-p');
        videoTime.append(time);
    }
}
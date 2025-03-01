function changeSeason() {
    const seasons = [
        {name: "Spring", background: "https://source.unsplash.com/1600x900/?spring,flowers", desc: "Flowers bloom and love is in the air."},
        {name: "Summer", background: "https://source.unsplash.com/1600x900/?summer,beach", desc: "Warm sunshine and joyful vibes."},
        {name: "Autumn", background: "https://source.unsplash.com/1600x900/?autumn,leaves", desc: "Golden leaves and cozy moments."},
        {name: "Winter", background: "https://source.unsplash.com/1600x900/?winter,snow", desc: "Snowflakes and the warmth of togetherness."}
    ];
    
    let season = seasons[Math.floor(Math.random() * seasons.length)];
    document.querySelector(".overlay").style.backgroundImage = `url(${season.background})`;
    document.getElementById("season-title").innerText = season.name;
    document.getElementById("season-description").innerText = season.desc;
}
function changeSeason() {
    const seasons = [
        {name: "Spring", color: "#FF9999", desc: "Flowers bloom and love blossoms."},
        {name: "Summer", color: "#FFD700", desc: "Feel the warmth of the sun and happiness."},
        {name: "Autumn", color: "#FF8C00", desc: "Golden leaves and cozy moments."},
        {name: "Winter", color: "#99CCFF", desc: "Snowfall and warmth of togetherness."}
    ];
    let season = seasons[Math.floor(Math.random() * seasons.length)];
    document.body.style.backgroundColor = season.color;
    document.getElementById("season-title").innerText = season.name;
    document.getElementById("season-description").innerText = season.desc;
}
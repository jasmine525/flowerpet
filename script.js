function changeColor() {
    const colors = ['#FF9999', '#99CCFF', '#FFFF99', '#99FF99'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
const output = document.getElementById("container");

window.addEventListener("mousemove", (event) => {
    let xPos=event.clientX;
    let yPos=event.clientY
    output.innerHTML = `
        <div id="container">
            <div class="mouse-event">
                <h4>Mouse X Prosition(px)</h4>
                <div class="position">
                    ${xPos}
                </div>
            </div>
            <div class="mouse-event">
                <h4>Mouse Y Prosition(px)</h4>
                <div class="position">
                ${yPos}
                </div>
            </div>
        </div>
  `;
});
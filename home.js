const button = document.getElementById("unhidden");
const recentEvents = document.getElementById("recent-events");
let buttonCount = 0;


button.addEventListener('click', function() {
    const elementToHide = document.getElementById("recent-events");
    const header = document.getElementById("recent-events-header");
    const line = document.getElementById("recent-events-hr");
    
    buttonCount += 1; 
    
    if (buttonCount % 2 == 1) {
        button.innerHTML = "Unhide";
        recentEvents.style.display = "none";
        header.style.fontSize = "30px";
        line.style.width = "40%";
        
        
    } else if (buttonCount % 2 == 0) {
        button.innerHTML = "Hide";
        recentEvents.style.display = "block";
        header.style.fontSize = "40px";
        line.style.width = "60%";
        
    }
});


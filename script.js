// Function to apply theme
document.getElementById("applyBtn").addEventListener("click", function() {
    // Get values from customization panel
    let bgColor = document.getElementById("bgColor").value;
    let textColor = document.getElementById("textColor").value;
    let fontSize = document.getElementById("fontSize").value + "px";

    // Apply styles to the iframe's document (if possible)
    let iframe = document.getElementById("spotifyPlayer");
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Check if we can apply CSS to iframe
    if (iframeDoc) {
        iframeDoc.body.style.backgroundColor = bgColor;
        iframeDoc.body.style.color = textColor;
        iframeDoc.body.style.fontSize = fontSize;
    }
});

function takeEmail() {
    const emailBodyNode = document.querySelector(".a3s.aiL"); // Gmail uses this class for email content
    const emailText = emailBodyNode?.innerText;
    console.log("Email text:", emailText);
    
    // Send the email text back to the popup
    chrome.runtime.sendMessage({
        action: "emailText",
        text: emailText
    });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "takeEmail") {
        takeEmail();
    }
});

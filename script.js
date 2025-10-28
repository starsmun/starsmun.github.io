// Select the elements from the document
const progressBar = document.getElementById('file');
const downloadButton = document.getElementById('DownloadButton');

// This function simulates the download progress
function startDownload() {
    // Disable the button to prevent multiple clicks
    downloadButton.disabled = true;

    // Reset progress to 0 in case it's run again
    progressBar.value = 0;
    
    // Set up a repeating timer to increase the progress value
    const interval = setInterval(() => {
        // Increase the progress bar's value
        progressBar.value += 0.1;

        // Check if the progress has reached 100%
        if (progressBar.value >= 100) {
            // Stop the repeating timer
            clearInterval(interval);
            
            // Add the 'rainbow-effect' class to the body
            document.body.classList.add('rainbow-effect');
        }
    }, 10); // The update happens every 50 milliseconds
}

// Add the event listener
downloadButton.addEventListener('click', startDownload);

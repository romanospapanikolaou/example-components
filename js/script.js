document
  .getElementById("loadFileButton")
  .addEventListener("click", function () {
    // Create an input element of type "file"
    const input = document.createElement("input");
    input.type = "file";

    // Listen for the "change" event when the user selects a file
    input.addEventListener("change", function () {
      const file = input.files[0];
      if (file) {
        // Use FileReader to read the file content
        const reader = new FileReader();
        reader.onload = function (event) {
          const fileContent = event.target.result;
          // Display the file content in the div
          const fileContentDiv = document.getElementById("fileContent");
          fileContentDiv.innerHTML = fileContent;

          // Show the "Copy HTML File Content" button
          const copyButton = document.getElementById("copyButton");
          copyButton.style.display = "block";

          // Add click event listener to the "Copy HTML File Content" button
          copyButton.addEventListener("click", function () {
            // Create a temporary textarea element
            const textarea = document.createElement("textarea");
            textarea.value = fileContent;
            document.body.appendChild(textarea);

            // Select the text inside the textarea
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices

            // Copy the selected text
            document.execCommand("copy");

            // Remove the textarea
            document.body.removeChild(textarea);

            // Change button text to indicate successful copy
            copyButton.innerHTML = "Copied!";
            setTimeout(() => {
              copyButton.innerHTML = "Copy HTML File Content";
            }, 2000); // Reset button text after 2 seconds
          });
        };
        // Read the file as text
        reader.readAsText(file);
      }
    });

    // Click the input element programmatically to trigger file selection
    input.click();
  });

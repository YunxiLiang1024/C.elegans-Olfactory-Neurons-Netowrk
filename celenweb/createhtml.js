const fs = require('fs');
const path = require('path');

// TODO: read from the list of file names, copy them here


// Define the SVG files to include
const svgFiles = [
  'sigma0.1_acc99.8_24081916_25.svg',
  'sigma0.3_acc85.3_24081916_25.svg',
  // Add more SVG files to this array as needed
];

// Define the HTML template
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D3.js Tutorial</title>
  <style>
    /* Add some basic styling to our page */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
  </style>
</head>
<body>
  {{svgObjects}}
</body>
</html>
`;

// Function to generate the HTML file
function generateHtml(svgFiles) {
  const svgObjects = svgFiles.map((svgFile) => {
    return `<object data="${svgFile}" type="image/svg+xml"></object>`;
  }).join('\n');

  const htmlContent = htmlTemplate.replace('{{svgObjects}}', svgObjects);

  // Write the HTML file to disk
  fs.writeFileSync('output.html', htmlContent);
}

// Call the generateHtml function
generateHtml(svgFiles);
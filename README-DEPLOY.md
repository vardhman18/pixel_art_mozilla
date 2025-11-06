Deployment notes and tips

- If you want submissions to go to Google Sheets, deploy the `scripts/google-apps-script.txt` code in Apps Script, set the correct sheet id, and make sure web app access is set to "Anyone".
- For smaller-scale events, you can also manually collect downloaded uploads from participants if you don't want to use Apps Script.
- To change theme colors, edit `src/styles.css` variables or `tailwind.config.cjs` color extensions.

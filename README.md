# Chrome-React-Extension-Boilerplate
Chrome Extension Boilerplate to quickly start with React Js extensions bundled using Webpack

## Notes
- If you want to use `popup.html` then, browser actions will not be listened in `background.js`
  change manifest with 
  
  ```
  "browser_action": {
    ...
    "default_popup": "popup.html"
  },
  ```

# An introduction to React Auth Graphql with Djangi Graphql AUth

JSON Web Tokens are the most used authentication tokens around
Progressive web apps (PWAs) are the future of web.

Create React App (CRA) brings all the tools necessary to generate a first-class PWA, focusing on three benefits

- Cached static assets (http, css, js, images,...)
- Offline mode
- Allow "add to home screen" on mobile devices

Combining the two this App guide starts by taking you through the few steps to achieve this in your app, and builds on it to bring two additional benefits to a scalable app

NB: This is a boilerplate, not the standard or reecommended but covers most of what you will require

- Allow users to upgrade in one click when a new version is available
- Handle incoming push notifications

## Practical steps to a rich-featured PWA with CRA

1. Make your app "Install on home page ready"

   - create logo files with 192 and 512 resolution
   - update favicon to match logo files
   - update `manifest.json` to reference the logo files

2. Allow your users to upgrade from within the app

   - make service worker status available to components
     - create service worker "context" in react
     - fix service worker registration 'src/serviceWorker.js' to register even if called after the page has loaded
   - add notification for new content available, based on information from the service worker context
   - extend service worker to call `skipWaiting`, triggered from the browser

3. Get ready to receive push notifications

   - allow users to register to notifications
   - handle push notifications in the service worker extension
   - focus client or open window on notification click
   - send notification title and body to focused clients

4. Try it all out

   - run Lighthouse audit to see 100% compliance
   - update files (manually in build folder) and see the 'update available' notification
   - simulate a push notification from the developer tools. The notification must be a properly formatted json string.

     Sample notification :

     ```json
     {
       "notification": {
         "title": "A title for your push notification",
         "body": "A body for the push notification"
       }
     }
     ```

   - publish (e.g. on netlify) and browse on mobile

## References

### Google

- [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
- [The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
- [Progressive Web Apps with React.js](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12)

  Rich source of well presented information on progressive web apps with react, even if somewhat dated (end 2016).

### Facebook

- [Progressive web apps in Create react app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Mozilla

- [MDN Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

// eslint-disable-next-line no-restricted-globals
const serviceWorkerScope = self;

serviceWorkerScope.onnotificationclick = function handleNotificationClick(
  event
) {
  event.notification.close();

  const { title, body } = event.notification;
  const inAppNotification = { title, body };

  const origin = serviceWorkerScope.location.origin;
  event.waitUntil(
    serviceWorkerScope.clients
      .matchAll({ type: "window" })
      .then(windowClientList => {
        const focusClient = windowClientList.find(client =>
          client.url.includes(origin)
        );
        if (focusClient) {
          focusClient.focus();
          focusClient.postMessage(inAppNotification);
        } else {
          if (serviceWorkerScope.clients.openWindow) {
            serviceWorkerScope.clients
              .openWindow(serviceWorkerScope.location.origin)
              .then(windowClient => {
                windowClient.postMessage(inAppNotification);
              });
          }
        }
      })
  );
};

const notificationIllustration = `{
  "notification": {
    "title": "A title for your push notification",
    "body": "A body for the push notification"
  }
}`;

serviceWorkerScope.addEventListener("push", function showPushNotification(
  event
) {
  try {
    const { notification = {} } = event.data.json();
    const { title = "no title", body = "no body" } = notification;
    const options = { body, icon: "./logo192.png" };
    event.waitUntil(
      serviceWorkerScope.registration.showNotification(title, options)
    );
  } catch (err) {
    console.error(err);
    console.log(
      "expected something like: \n",
      notificationIllustration,
      "\nbut received: \n",
      event.data.text()
    );
  }
});

serviceWorkerScope.addEventListener("message", function skipWaiting(event) {
  if (event.data === "skipWaiting") serviceWorkerScope.skipWaiting();
});

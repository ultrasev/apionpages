"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("Service Worker is supported");
      navigator.serviceWorker
        .register("/sw.js")
        .then(function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope
          );
        })
        .catch(function (err) {
          console.error("Service Worker registration failed: ", err);
        });
    }
  }, []);

  return null;
}

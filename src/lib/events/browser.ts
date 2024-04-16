"use client";

// THESE FUNCTIONS ARE BROWSER ONLY
// DO NOT IMPORT THESE INTO SERVER COMPONENTS
// DOCUMENT OBJECT IS ONLY AVAILABLE IN BROWSER

export function isCustomEvent(event: Event): event is CustomEvent {
  return "detail" in event;
}

// Subscribe function remains the same
function subscribe(eventName: string, listener: EventListener) {
  // document.addEventListener(eventName, listener);
  window.addEventListener(eventName, listener);
}

// Unsubscribe function remains the same
function unsubscribe(
  eventName: string,
  listener: EventListenerOrEventListenerObject
) {
  document.removeEventListener(eventName, listener);
}

// Publish function remains the same
function publish(eventName: string, data?: any) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };

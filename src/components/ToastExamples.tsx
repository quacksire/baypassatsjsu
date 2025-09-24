import React from 'react';
import PersistentToast from './PersistentToast';

// Example usage of the PersistentToast component
export default function ToastExamples() {
  return (
    <div className="space-y-4">
      {/* Default variant */}
      <PersistentToast
        title="Take Action"
        message="Help us bring BayPass to SJSU! Sign our petition and show your support for affordable transit."
        actionText="Sign Petition"
        actionUrl="/yell"
        variant="default"
        storageKey="default-toast-dismissed1"
      />

      {/* Urgent variant */}
      <PersistentToast
        title="URGENT"
        message="Deadline approaching! We need 1000 more signatures by Friday to present to the administration."
        actionText="Sign Now"
        actionUrl="/yell"
        variant="urgent"
        storageKey="urgent-toast-dismissed2"
      />

      {/* Info variant */}
      <PersistentToast
        title="Info"
        message="Learn more about our upcoming meetings and how you can get involved in the BayPass campaign."
        actionText="View Meetings"
        actionUrl="/meetings"
        variant="info"
        storageKey="info-toast-dismissed3"
      />
    </div>
  );
}

// Usage in Astro files:
/*
<PersistentToast 
  client:load
  title="Your Title"
  message="Your message here"
  actionText="Button Text"
  actionUrl="/your-url"
  variant="default" // or "urgent" or "info"
  storageKey="unique-key" // optional, defaults to "toast-dismissed"
  isVisible={true} // optional, defaults to true
  onDismiss={() => console.log('Toast dismissed')} // optional
  className="custom-classes" // optional
/>
*/


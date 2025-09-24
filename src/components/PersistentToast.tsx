import React, { useState, useEffect } from 'react';
import { IconX, IconExternalLink } from '@tabler/icons-react';
import { cn } from '../lib/utils';

interface PersistentToastProps {
  title: string;
  message: string;
  actionText: string;
  actionUrl: string;
  isVisible?: boolean;
  onDismiss?: () => void;
  className?: string;
  variant?: 'default' | 'urgent' | 'info';
  storageKey?: string;
}

export default function PersistentToast({
  title,
  message,
  actionText,
  actionUrl,
  isVisible = true,
  onDismiss,
  className,
  variant = 'default',
  storageKey = 'toast-dismissed'
}: PersistentToastProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  // Check localStorage for dismissal state
  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(storageKey, 'true');
    onDismiss?.();
  };

  const handleActionClick = () => {
    handleDismiss()
    // should replace the current tab if actionUrl is internal
    // otherwise open in new tab
    window.open(actionUrl, actionUrl.startsWith('http') ? '_blank' : '_self');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  // Variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case 'urgent':
        return {
          container: "border-sjsublue shade-color-sjsublue",
          title: "text-sjsublue",
          message: "text-sjsublue",
          button: "bg-sjsublue hover:bg-sjsurolloverblue"
        };
      case 'info':
        return {
          container: "border-sjsugrey shade-color-sjsugrey",
          title: "text-sjsudarkgrey",
          message: "text-sjsudarkgrey",
          button: "bg-sjsugrey hover:bg-sjsuadadarkgrey text-white"
        };
      default:
        return {
          container: "border-sjsugold shade-color-sjsugold",
          title: "text-sjsublue",
          message: "text-sjsublue",
          button: "bg-sjsublue hover:bg-sjsurolloverblue"
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 w-full",
        "sm:bottom-4 sm:right-4 sm:left-auto sm:max-w-sm sm:w-auto",
        "bg-white border-2 rounded-t-xl sm:rounded-xl",
        "drop-4 shadow-lg transition-all duration-300 ease-in-out",
        "hover:drop-6 hover:scale-105",
        "persistent-toast",
        variantStyles.container,
        className
      )}
    >
      <div className="p-4">
        {/* Header with title and close button */}
        <div className="flex items-start justify-between mb-3">
          <h3 className={cn(
            "text-lg font-black uppercase leading-tight",
            variantStyles.title
          )}>
            {title}
          </h3>
          <button
            onClick={handleDismiss}
            className={cn(
              "ml-2 p-1 rounded-full transition-colors duration-200",
              "hover:bg-sjsugold/20"
            )}
            aria-label="Dismiss toast"
          >
            <IconX className={cn("w-4 h-4", variantStyles.title)} />
          </button>
        </div>

        {/* Message */}
        <p className={cn(
          "text-sm mb-4 leading-relaxed",
          variantStyles.message
        )}>
          {message}
        </p>

        {/* Action button */}
        <div className="flex justify-end sm:justify-end">
          <button
            onClick={handleActionClick}
            className={cn(
              "w-full sm:w-auto px-4 py-3 sm:py-2 text-sm font-semibold text-white",
              "flex items-center justify-center gap-2 rounded-lg",
              "shade-color-sjsugold drop-2 hover:drop-4",
              "active:drop-0 transition-all duration-200",
              variantStyles.button
            )}
          >
            {actionText}
            <IconExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useCallback } from 'react';

export function useClipboard(timeoutDuration: number = 2500) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText(text).then(
        () => {
          setCopied(true);
        },
        (err) => {
          console.error('Clipboard write failed', err);
        }
      );
    }

    setTimeout(() => {
      setCopied(false);
    }, timeoutDuration);
  }, [timeoutDuration]);

  return { copied, copy };
}


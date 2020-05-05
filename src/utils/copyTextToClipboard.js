function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  const successful = document.execCommand('copy');
  document.body.removeChild(textArea);
  return successful
}
export default async function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    return new Promise((resolve, reject) => {
      try {
        const success = fallbackCopyTextToClipboard(text);
        if (success) {
          resolve()
        } else {
          reject()
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  return navigator.clipboard.writeText(text)
}
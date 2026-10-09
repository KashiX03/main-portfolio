const form = document.querySelector(".contact-form");

if (form) {
  const button = form.querySelector(".contact-submit");
  const buttonText = form.querySelector(".contact-submit-text");
  const status = form.querySelector(".contact-status");
  const endpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT || "").trim();
  const isConfigured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);

  if (isConfigured) form.action = endpoint;
  button.disabled = false;

  function showStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    if (!isConfigured) {
      showStatus("This form isn’t available yet. Please try again later.", "error");
      return;
    }

    button.disabled = true;
    buttonText.textContent = "SENDING…";
    form.setAttribute("aria-busy", "true");
    showStatus("Sending your contact request…", "pending");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });

      if (!response.ok) {
        showStatus("Your request couldn’t be sent. Please try again.", "error");
        return;
      }

      form.reset();
      showStatus("Thanks! Your contact request was sent. I’ll reply to your email soon.", "success");
    } catch {
      showStatus("Your request couldn’t be sent. Check your connection and try again.", "error");
    } finally {
      window.clearTimeout(timeout);
      button.disabled = false;
      buttonText.textContent = "CONTACT ME";
      form.removeAttribute("aria-busy");
    }
  });
}

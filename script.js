/* ==========================================
   A LITTLE ABOUT ME... ♡
   Website interactions by Liz A.
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

  // Find the Spotify elements on the page.
  const drawer = document.getElementById("spotify-drawer");
  const toggleButton = document.getElementById("spotify-toggle");
  const closeButton = document.getElementById("spotify-close");
  const panel = document.getElementById("spotify-panel");

  // Stop safely if these elements aren't on this page.
  if (!drawer || !toggleButton || !closeButton || !panel) {
    return;
  }

  // Open the Spotify panel.
  function openSpotify() {
    drawer.classList.add("is-open");
    toggleButton.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
  }

  // Close the Spotify panel.
  function closeSpotify() {
    drawer.classList.remove("is-open");
    toggleButton.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  }

  // Toggle the panel when the tab is clicked.
  toggleButton.addEventListener("click", function () {

    if (drawer.classList.contains("is-open")) {
      closeSpotify();
    } else {
      openSpotify();
    }

  });

  // Close the panel using its close button.
  closeButton.addEventListener("click", function () {
    closeSpotify();
  });

  // Close the panel when Escape is pressed.
  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeSpotify();
    }

  });

  // Close the panel when someone clicks outside it.
  document.addEventListener("click", function (event) {

    if (
      drawer.classList.contains("is-open") &&
      !drawer.contains(event.target)
    ) {
      closeSpotify();
    }

  });

});

const appPreview = document.getElementById("app-preview"),
  previewIsLoaded = false,
  loadPreview = () => {
    if (window.innerWidth >= 500) {
      appPreview.setAttribute("srcset", appPreview.getAttribute("data-srcset"));
      appPreview.setAttribute("src", appPreview.getAttribute("data-src"));
      previewIsLoaded = true;
    }
  };
window.onload = loadPreview;
window.onresize = previewIsLoaded ? null : loadPreview;

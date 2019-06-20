// Load header image by screen width
const appPreview = document.getElementById("app-preview");
let previewIsLoaded = false;
const loadPreview = () => {
  if (window.innerWidth >= 500) {
    appPreview.setAttribute("srcset", appPreview.getAttribute("data-srcset"));
    appPreview.setAttribute("src", appPreview.getAttribute("data-src"));
    previewIsLoaded = true;
  }
};
window.onload = loadPreview;
window.onresize = previewIsLoaded ? null : loadPreview;

// Post newsletter form data to Mailchimp
const newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(newsletterForm);
  const searchParams = new URLSearchParams();

  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  }

  fetch("https://aouf.us3.list-manage.com/subscribe/post", {
    method: "post",
    body: searchParams
  })
    .then(resp => resp.text())
    .then(text => {
      console.log(text);
    })
    .catch(err => {
      console.error(err);
    });
});

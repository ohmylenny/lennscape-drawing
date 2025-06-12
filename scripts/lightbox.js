const artDescriptions = {
  'images/Fin.png': {
    title: 'This Is Fin',
    description: 'A sweet, chill moment under the purple sky—what could be sweeter than Fin?'
  },
  'images/Vanx.png': {
    title: 'VannnX',
    description: 'An Abstract fire and skull, perfectly matched.'
  },
  // Add more entries for your images here
};

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");

  const fileName = img.src.split('/').pop(); // Extract filename from src
  const info = artDescriptions[fileName] || { title: 'Untitled', description: 'No description available.' };

  lightboxImg.src = img.src;
  lightboxTitle.textContent = info.title;
  lightboxDescription.textContent = info.description;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

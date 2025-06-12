const artDescriptions = {
  'art1.jpg': {
    title: 'Celestia – Luna Morita',
    description: 'A dreamy illustration depicting a mystical night sky over a calm landscape.'
  },
  'art2.jpg': {
    title: 'Nova Bloom – Kei Haru',
    description: 'An abstract flower blooming under cosmic starlight, inspired by energy and rebirth.'
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

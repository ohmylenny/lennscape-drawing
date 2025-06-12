const artDescriptions = {
  'Fin.png': {
    title: 'This Is Fin',
    description: 'A sweet, chill moment under the purple sky—what could be sweeter than Fin?'
  },
  'Vanx.png': {
    title: 'VannnX',
    description: 'An abstract flame-skull fusion in cosmic firelight.'
  }
  // Add more entries as needed, matching the image filenames exactly
};

function openLightbox(img) {
  const filename = img.src.split('/').pop();
  const info = artDescriptions[filename] || {
    title: 'Untitled',
    description: 'No description available.'
  };
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-title').textContent = info.title;
  document.getElementById('lightbox-description').textContent = info.description;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

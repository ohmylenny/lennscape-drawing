const artDescriptions = {
  'Fin.png': {
  title: 'This Is Fin',
  description: 'A sweet, chill moment under the purple sky—what could be sweeter than Fin?'
},
'Vanx.png': {
  title: 'VannnX',
  description: 'An abstract flame-skull fusion in cosmic firelight.'
},
"Let's.png": {
  title: 'Leys BOBR',
  description: 'BOBR LEADER, you can learn Polish from Him.'
},
'Evmox.png': {
  title: 'Evm0X',
  description: 'Roaming everywhere, find him for a secret story.'
}

  // Add more entries as needed, matching the image filenames exactly
};

// Show lightbox
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

// Hide lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target.id === 'lightbox') {
    this.style.display = 'none';
  }
});
console.log('Image source:', img.src);

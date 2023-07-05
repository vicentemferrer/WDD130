const modal = document.getElementById("modal");

const img = document.getElementById("content-img");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

String.prototype.toTitleCase = function() {
  let i, j, str, lowers, uppers;
  str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
  'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
      function(txt) {
        return txt.toLowerCase();
      });

  uppers = ['Id', 'Tv'];
  for (i = 0, j = uppers.length; i < j; i++)
    str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), 
      uppers[i].toUpperCase());

  return str;
}

img.addEventListener('click', (event) => {
  modal.style.display = "block"
  modalImg.src = event.target.src
  captionText.innerHTML = event.target.alt.toTitleCase()
})

modal.onclick = () => {
  modal.style.display = "none";
}
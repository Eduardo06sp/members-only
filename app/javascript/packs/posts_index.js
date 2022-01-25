const stories = document.querySelectorAll('.post-content');

const generateSeeMoreButton = function() {
  let button = document.createElement('button');
  button.classList.add('see-more');
  button.textContent = 'See More';
  return button;
};

const generateTransparentOverlay = function() {
  let overlay = document.createElement('div');
  overlay.classList.add('transparent-overlay');
  return overlay;
};

const expandPost = function(e) {
  post = e.target.parentElement;
  post.classList.toggle('post-expanded');

  if (post.classList.length == 1) {
    e.target.textContent = 'See More';
  } else {
    e.target.textContent = 'See Less';
  }
};

stories.forEach((story) => {
  if (story.scrollHeight > story.offsetHeight) {
    const seeMoreButton = generateSeeMoreButton();

    seeMoreButton.textContent = 'See More';
    story.parentElement.append(seeMoreButton);
    seeMoreButton.addEventListener('click', expandPost);
  }
});

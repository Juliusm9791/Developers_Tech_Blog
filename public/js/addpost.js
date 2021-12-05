const addPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#postTitle').value.trim();
  const text = document.querySelector('#postText').value;
  if (title && text) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("ERROR: Can't Add Post.");
    }
  }
};
  
  document
    .querySelector('#savePostButton')
    .addEventListener('click', addPostFormHandler);
  

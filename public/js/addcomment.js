const addCommentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#commentText').value.trim();
  if (text) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add Comment.');
    }
  }
};
  
  document
    .querySelector('#saveCommentButton')
    .addEventListener('click', addCommentFormHandler);
  

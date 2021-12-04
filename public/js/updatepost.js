const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const title = document.querySelector('#updateTitle').value.trim();
  const text = document.querySelector('#updateText').value.trim();
  if (title && text) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, text }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};

const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(id)
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('ERROR: Cant Delete.');
    }
  
};

document
  .querySelector('#updatePostButton')
  .addEventListener('click', updatePostFormHandler);

document
  .querySelector('#deletePostButton')
  .addEventListener('click', deletePostFormHandler);


const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-desc').value.trim();
    const post_id = event.target.getAttribute('data-id');
  
    if (content && post_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Comment added!');
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
const commentDiv = document.getElementById("comment-div");
const commentLabel = document.getElementById("add-comment-label");
const commentTextbox = document.getElementById("add-comment-textbox")


function addCommentHandler() {
  commentDiv.classList.remove("hide");
  commentBtn.classList.add("hide");
}


const submitCommentHandler = async (event) => {
    event.preventDefault();
    const content = commentTextbox.value.trim();
    const blog_id = document.querySelector('input').dataset.blogid
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create blog post');
      }
    } else {
      alert("Something is missing, please try again.")
    }
  }

  const commentBtn = document.getElementById('comment');
if (commentBtn) {
  commentBtn.addEventListener('click', addCommentHandler);
}

const submitCommentBtn = document.getElementById('submit-comment');
if (submitCommentBtn) {
  submitCommentBtn.addEventListener('click', submitCommentHandler);
}


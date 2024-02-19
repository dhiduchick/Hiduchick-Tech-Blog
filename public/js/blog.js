const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-desc').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({title,content}),
            headers: {
                'Content-Type': 'applicaiton/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert ('Failed to create blog post');
        }
    }
};

const updatePostHandler = async (event) => {
event.preventDefault();
if (event.target.hasAttribute('data-update-id')) {
    const id = event.taget.getAttribute('data-update-id');

    const title = document.getElementById('updatedBlogTitle').value.trim();
    const content = document.getElementById('updateBlogContent').value.trim();

    const response = await fetch(`/api.blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: {
            'Content-Types': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert ('Failed to update');
    }
}
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

const createPostView = () => {
    const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.add('hide');
    const createPostDiv = document.getElementById('createPostDiv').classList.remove('hide');
  }

const cancelBtnHandler = (event) => {
    event.preventDefault();
    const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.remove('hide');
    const createPostDiv = document.getElementById('createPostDiv').classList.add('hide');
    const titleInput = document.getElementById('project-name').value = "";
    const descriptionInput = document.getElementById('project-desc').value = "";
  }

const editBtnHandler = () => {
    const editPostBtnDiv = document.getElementById('editPostBtnDiv').classList.add('hide');
    const updateDeleteDiv = document.getElementById('updateDeleteDiv').classList.remove('hide');
  }  

const updateViewHandler = () => {
    const updateForm = document.getElementById('updateForm');
    updateForm.classList.remove('hide');
    const currentPostDiv = document.getElementById('indivPost');
    currentPostDiv.classList.add('hide');
  }
  
const cancelUpdateHandler = (event) => {
    event.preventDefault();
    const updateForm = document.getElementById('updateForm');
    updateForm.classList.add('hide');
    const currentPostDiv = document.getElementById('indivPost');
    currentPostDiv.classList.remove('hide');
  }  
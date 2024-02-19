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

const updateBlogHandler = async (event) => {
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

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

const createBlogView = () => {
    const createBlogBtnDiv = document.getElementById('createBlogBtnDiv').classList.add('hide');
    const createBlogDiv = document.getElementById('createBlogDiv').classList.remove('hide');
  }

const cancelBtnHandler = (event) => {
    event.preventDefault();
    const createBlogBtnDiv = document.getElementById('createBlogBtnDiv').classList.remove('hide');
    const createBlogDiv = document.getElementById('createBlogDiv').classList.add('hide');
    const titleInput = document.getElementById('project-name').value = "";
    const descriptionInput = document.getElementById('project-desc').value = "";
  }

const editBtnHandler = () => {
    const editBlogBtnDiv = document.getElementById('editBlogBtnDiv').classList.add('hide');
    const updateDeleteDiv = document.getElementById('updateDeleteDiv').classList.remove('hide');
  }  

const updateViewHandler = () => {
    const updateForm = document.getElementById('updateForm');
    updateForm.classList.remove('hide');
    const currentBlogDiv = document.getElementById('indivBlog');
    currentBlogDiv.classList.add('hide');
  }
  
const cancelUpdateHandler = (event) => {
    event.preventDefault();
    const updateForm = document.getElementById('updateForm');
    updateForm.classList.add('hide');
    const currentBlogDiv = document.getElementById('indivBlog');
    currentBlogDiv.classList.remove('hide');
  }  

const cancelEditHandler = () => {
    const editBlogBtnDiv = document.getElementById('editBlogBtnDiv').classList.remove('hide');
    const updateDeleteDiv = document.getElementById('updateDeleteDiv').classList.add('hide');
  }

  const toggleCreateBtn = document.getElementById('createBlogBtn');
if (toggleCreateBtn) {
  toggleCreateBtn.addEventListener('click', createBlogView);
}

const cancelCreateBtn = document.getElementById('cancelCreateBtn');
if (cancelCreateBtn) {
  cancelCreateBtn.addEventListener('click', cancelBtnHandler)
}

const toggleEditBtn = document.querySelectorAll('.toggleEdit');
if (toggleEditBtn) {
  for (let i = 0; i < toggleEditBtn.length; i++) {
    toggleEditBtn[i].addEventListener('click', editBtnHandler)
  }
}

const toggleUpdateBtn = document.getElementById('updateBlogBtn');
if (toggleUpdateBtn) {
  toggleUpdateBtn.addEventListener('click', updateViewHandler)
}

const cancelEditBtn = document.getElementById('cancelEditBtn');
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', cancelEditHandler)
}

const updateBlog = document.getElementById('submitUpdateBtn');
if (updateBlog) {
  updateBlog.addEventListener('click', updateBlogHandler)
}

const submitBlog = document.querySelector('.new-project-form');
if (submitBlog) {
  submitBlog.addEventListener('submit', newFormHandler);
}

const deleteBlog = document.querySelector('.project-list');
if (deleteBlog) {
  deleteBlog.addEventListener('click', delButtonHandler);
}

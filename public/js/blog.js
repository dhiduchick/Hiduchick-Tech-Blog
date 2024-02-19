const newFormHandley = async (event) => {
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
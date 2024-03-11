document.getElementById('searchBtn').addEventListener('click', searchPost);

function searchPost() {
    const postIdInput = document.getElementById('postIdInput').value;

    // Check if postIdInput is a number between 1 and 100
    if (postIdInput < 1 || postIdInput > 100 || isNaN(postIdInput)) {
        alert('Please enter a valid post ID between 1 and 100');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postIdInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Post not found');
            }
            return response.json();
        })
        .then(post => {
            const postContainer = document.getElementById('postContainer');
            postContainer.innerHTML = `
                <h2>Post #${post.id}</h2>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="button" onclick="fetchComments(${post.id})">Load Comments</button>
            `;
        })
        .catch(error => {
            alert(error.message);
        });
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Comments not found');
            }
            return response.json();
        })
        .then(comments => {
            const postContainer = document.getElementById('postContainer');
            const commentsList = document.createElement('div');
            comments.forEach(comment => {
                const listItem = document.createElement('div');
                listItem.textContent = comment.body;
                commentsList.appendChild(listItem);
            });
            postContainer.appendChild(commentsList);
        })
        .catch(error => {
            alert(error.message);
        });
}

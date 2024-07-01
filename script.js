document.addEventListener('DOMContentLoaded', (event) => {
    function addLikeButtonFunctionality(buttonId) {
        document.getElementById(buttonId).addEventListener('click', function() {
            const button = this;
            button.disabled = true;
            button.innerHTML = 'Liked';
            setTimeout(function() {
                button.disabled = false;
                button.innerHTML = 'Like';
            }, 2000);
        });
    }

    addLikeButtonFunctionality('like-btn');
    addLikeButtonFunctionality('like-btn-2');

    const createPostBtn = document.getElementById('create-post-btn');
    const createPostOverlay = document.getElementById('create-post-overlay');
    const closeOverlayBtn = document.getElementById('close-overlay-btn');
    const newPostForm = document.getElementById('new-post-form');
    const feed = document.querySelector('.feed');

    createPostBtn.addEventListener('click', () => {
        createPostOverlay.style.display = 'flex';
    });

    closeOverlayBtn.addEventListener('click', () => {
        createPostOverlay.style.display = 'none';
    });

    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const postContent = document.getElementById('post-content').value;
        const postImage = document.getElementById('post-image').files[0];

        const newPost = document.createElement('div');
        newPost.className = 'post';
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            newPost.innerHTML = `
                <div class="post-header">
                    <div class="user-info">
                        <img src="pexels-lukaslafayete-819497.jpg" alt="User Avatar" class="post-avatar">
                        <span class="username">${username}</span>
                    </div>
                    <div class="tooltip-container">
                        <span class="tooltip">45k</span>
                        <span class="text">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 95 114" class="svgIcon">
                                <rect fill="black" rx="28.5" height="57" width="57" x="19"></rect>
                                <path fill="black" d="M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z"></path>
                            </svg>
                            Follow
                        </span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${postContent}</p>
                    <img src="${imageSrc}" alt="Post Image" class="post-image">
                    <button class="btn-primary">Like</button>
                </div>
            `;
            feed.appendChild(newPost);
            createPostOverlay.style.display = 'none';
        };

        if (postImage) {
            reader.readAsDataURL(postImage);
        } else {
            newPost.innerHTML = `
                <div class="post-header">
                    <div class="user-info">
                        <img src="pexels-lukaslafayete-819497.jpg" alt="User Avatar" class="post-avatar">
                        <span class="username">${username}</span>
                    </div>
                    <div class="tooltip-container">
                        <span class="tooltip">45k</span>
                        <span class="text">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 95 114" class="svgIcon">
                                <rect fill="black" rx="28.5" height="57" width="57" x="19"></rect>
                                <path fill="black" d="M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z"></path>
                            </svg>
                            Follow
                        </span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${postContent}</p>
                    <button class="btn-primary">Like</button>
                </div>
            `;
            feed.appendChild(newPost);
            createPostOverlay.style.display = 'none';
        }
    });

    // Adding search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const searchOverlay = document.getElementById('search-overlay');
    const searchResults = document.getElementById('search-results');
    const closeSearchOverlayBtn = document.getElementById('close-search-overlay-btn');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchBtn.value = 'Loading...'; // Show loading state
            setTimeout(() => {
                searchBtn.value = 'Search'; // Reset button text
                searchResults.innerHTML = ''; // Clear previous results
                
                // Simulate search results
                const searchResult = document.createElement('div');
                searchResult.className = 'post';
                searchResult.innerHTML = `
                    <div class="post-header">
                        <div class="user-info">
                            <img src="pexels-lukaslafayete-819497.jpg" alt="User Avatar" class="post-avatar">
                            <span class="username">${searchTerm}</span>
                        </div>
                        <div class="tooltip-container">
                            <span class="tooltip">45k</span>
                            <span class="text">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 95 114" class="svgIcon">
                                    <rect fill="black" rx="28.5" height="57" width="57" x="19"></rect>
                                    <path fill="black" d="M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z"></path>
                                </svg>
                                Follow
                            </span>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>Sample post content for ${searchTerm}</p>
                    </div>
                `;
                searchResults.appendChild(searchResult);
                searchOverlay.style.display = 'flex'; // Show search results overlay
            }, 2000); // Simulate a 2 second search delay
        }
    });

    closeSearchOverlayBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

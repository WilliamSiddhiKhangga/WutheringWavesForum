function addPost() {
    document.getElementById("post-form").style.display = "block";
}

function closePostForm() {
    document.getElementById("post-form").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form-inner');
    const postTitleInput = document.getElementById('post-title-input');
    const postDescInput = document.getElementById('post-desc-input');
    const showPosts = document.getElementById('show-posts');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const defProfile = '/Images/Forum-Images/default-profile.png';
        const defName = 'username';

        const showPostTitle = postTitleInput.value.trim();
        const showPostDesc = postDescInput.value.trim();

        if (showPostTitle !== '') {
            const showIndivPost = document.createElement('li');
            showIndivPost.classList.add('show-individual-post');

            const showProfileOnPost = document.createElement('div');
            showProfileOnPost.classList.add('show-profile-on-post');

            const profileImg = document.createElement('img');
            profileImg.src = defProfile;
            profileImg.alt = 'Profile Image';

            const username = document.createElement('h4');
            username.textContent = defName;

            const postTitleDiv = document.createElement('div');
            postTitleDiv.classList.add('show-post-title');
            postTitleDiv.innerHTML = `<h2>${showPostTitle}</h2>`;
            
            const postDescDiv = document.createElement('div');
            postDescDiv.classList.add('show-post-description');
            postDescDiv.innerHTML = `<h3>${showPostDesc}</h3>`;
            
            const likeDislikeDiv = document.createElement('div');
            likeDislikeDiv.classList.add('like-dislike');
            
            const likeCount = document.createElement('h3');
            likeCount.textContent = '0';
            
            const likeIcon = document.createElement('i');
            likeIcon.classList.add('fa-solid', 'fa-thumbs-up');
            
            const dislikeCount = document.createElement('h3');
            dislikeCount.textContent = '0';
            
            const dislikeIcon = document.createElement('i');
            dislikeIcon.classList.add('fa-solid', 'fa-thumbs-down');
            
            const commentCount = document.createElement('h3');
            commentCount.textContent = '0';
            
            const commentIcon = document.createElement('i');
            commentIcon.classList.add('fa-solid', 'fa-comment');
            
            showProfileOnPost.appendChild(profileImg);
            showProfileOnPost.appendChild(username);

            likeDislikeDiv.appendChild(likeCount);
            likeDislikeDiv.appendChild(likeIcon);
            likeDislikeDiv.appendChild(dislikeCount);
            likeDislikeDiv.appendChild(dislikeIcon);
            likeDislikeDiv.appendChild(commentCount);
            likeDislikeDiv.appendChild(commentIcon);

            showIndivPost.appendChild(showProfileOnPost);
            showIndivPost.appendChild(postTitleDiv);
            showIndivPost.appendChild(postDescDiv);
            showIndivPost.appendChild(likeDislikeDiv);

            showPosts.appendChild(showIndivPost);

            postTitleInput.value = '';
            postDescInput.value = '';
        }
    });
});


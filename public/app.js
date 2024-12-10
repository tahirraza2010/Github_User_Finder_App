const getUserData=async()=>{
    const username = document.getElementById("username").value;
    const result = document.getElementById("result");
    result.innerHTML = `<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    result.style.display = "block";
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("User not found");
        
        const data = await response.json();
        console.log(data);
        
        result.innerHTML=`
        <img class="avatar" src="${data.avatar_url}" alt="${data.name}">
        <h2>${data.name || 'No Name'}</h2>
        <p>${data.bio || 'no bio Avalible'}</p>
        <div class="stats">
          <div>
            <span>${data.public_repos}</span>
            Repos
          </div>
          <div>
            <span>${data.followers}</span>
            Followers
          </div>
          <div>
            <span>${data.following}</span>
            Following
          </div>
        </div>
        <p>
          <a href="${data.html_url}" target="_blank" style="color: #0079ff;">Visit Profile</a>
        </p>
        `
    } catch (error) {
        console.log(error);
        result.innerHTML=`<p class='error-message' >${error.message}</p>`
        
    }
}

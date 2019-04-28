// your code here
function getRepositories() {
  let repo = document.getElementById("username").value
  console.log("repo", repo)
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories)
  
  req.open('GET', 'https://api.github.com/users/' + repo + '/repos');
  req.send();

}

function displayCommits() {
  let commit = JSON.parse(this.responseText)
  console.log("commit", commit)
  
}

function displayBranches() {
  
}

function displayRepositories() {
  let resp = JSON.parse(this.responseText)
  console.log(resp)
  let list = `<ul>`
  for(var i =0; i< resp.length; i++) {
    list += `<li>${resp[i]['owner']['login']}<br /><a href="#" data-repo="${resp[i]['name']}" data-username="${resp[i]['owner']['login']}" onclick="getCommits(this)">Get Commits</a></li>`
    
  }
  list+= `</ul>`
  document.getElementById("repositories").innerHTML = list
}

function getBranches() {
  
}

function getCommits(e) {
  
  console.log("dataset", e.dataset)
  let commit_repo = e.dataset.repo
  let username = e.dataset.username
  
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits)
  req.open('GET',`https://api.github.com/repos/${username}/${commit_repo}/commits`)
  req.send();
}
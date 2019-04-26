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
  
}

function displayBranches() {
  
}

function displayRepositories() {
  let resp = JSON.parse(this.responseText)
  console.log(resp)
  let list = `<ul>`
  for(var i =0; i< resp.length; i++) {
    list += `<li>${resp[i]['owner']['login']}<br /><a href="/${resp[i]['html_url']}</li>`
    
  }
  list+= `</ul>`
  document.getElementById("repositories").innerHTML = list
}

function getBranches() {
  
}
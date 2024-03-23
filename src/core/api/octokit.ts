import {Octokit} from "@octokit/core";
const octokit = new Octokit({
    auth: "your tokken"
});
//use https://github.com/settings/tokens/new to get token
octokit.request("GET /users/{username}", {
    username: 'username'
})
.then(response => {console.log(response.data)})
.catch(error => {
    console.error(error)
})

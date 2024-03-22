import {Octokit} from "@octokit/core";
const octokit = new Octokit({
    auth: "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"
});

octokit.request("GET /users/{username}", {
    username: 'username'
})
.then(response => {console.log(response.data)})
.catch(error => {
    console.error(error)
})
//use https://github.com/settings/tokens/new to get token

import {Octokit} from "@octokit/core";
const octokit = new Octokit({
    auth: "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"
});
export const userRepositories = async (username:string) => {
    try {
        const response = await octokit.request("GET /users/{username}", {
            username: username
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        throw error; // Propagate the error back to the calling code
    }
}
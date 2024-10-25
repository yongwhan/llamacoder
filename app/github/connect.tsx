import dotenv from 'dotenv';

dotenv.config();

export async function uploadFileToGithub(
    githubToken: string,
    githubUser: string,
    repoName: string,
    githubFilePath: string,
    content: string
): Promise<void> {
    alert('Uploading a file to a github...! For now, just a question prompt is saved :)');

    try {
        const apiUrl = `https://api.github.com/repos/${githubUser}/${repoName}/contents/${githubFilePath}`;

        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'upload text file',
                content: btoa(content),
//                content: btoa('testing uploading data!!!'),
            })
        });

        if (response.ok) {
            const data = await response.json();
            alert('File uploaded successfully: ' + data.content.html_url);
        } else {
            const error = await response.json();
            alert('Error uploading file: ' + error.message);
        }
    } catch (error) {
        console.error('Error uploading file');
    }
}

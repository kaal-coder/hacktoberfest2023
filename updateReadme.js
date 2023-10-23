const axios = require("axios");
const fs = require("fs");
const os = require("os");

const owner = "varunrmantri23";
const repo = "workflows";
const filePath = "./README.md";

const fetchDataAndUpdateReadme = async () => {
    try {
        // Fetch contributors' data from varunrmantri23/workflows
        const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        const contributors = response.data;

        // Build a new list of contributors with images and names
        let contributorsList = "## Contributors to this Repository\n\n";
        contributors.forEach((contributor) => {
            contributorsList += `<a href="https://github.com/${contributor.login}" target="_blank"><img src="${contributor.avatar_url}" alt="${contributor.login}" style="border-radius: 50%; width: 50px; height: 50px;"></a>\n`;
        });

        // Read your existing README content with consistent line endings
        let readmeContent = fs
            .readFileSync(filePath, "utf8")
            .replace(/\r\n/g, "\n");

        // Check if the "Contributors to this Repository" section already exists
        const sectionExists = readmeContent.includes(
            "## Contributors to this Repository"
        );

        if (sectionExists) {
            // If the section exists, replace it with the new contributors
            const startIndex = readmeContent.indexOf(
                "## Contributors to this Repository"
            );
            const endIndex = readmeContent.indexOf("##", startIndex + 1);
            readmeContent =
                readmeContent.slice(0, startIndex) +
                contributorsList +
                readmeContent.slice(endIndex);
        } else {
            // If the section doesn't exist, simply add it with the new contributors
            readmeContent += contributorsList;
        }

        // Write the updated content with consistent line endings
        fs.writeFileSync(
            filePath,
            readmeContent.replace(/\n/g, os.EOL),
            "utf8"
        );
        console.log("Updated Readme.md with new contributors section");
    } catch (error) {
        console.error("Error:", error);
    }
};

fetchDataAndUpdateReadme();

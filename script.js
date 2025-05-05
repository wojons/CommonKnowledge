document.addEventListener('DOMContentLoaded', () => {
    const patternsListDiv = document.getElementById('patterns-list');
    const notebooklmKnowledgeListDiv = document.getElementById('notebooklm-knowledge-list');
    const mergeButton = document.getElementById('merge-button');
    const mergedContentTextarea = document.getElementById('merged-content');

    // Placeholder file lists - in a real scenario hosted on GitHub Pages,
    // we would need a way to dynamically get this list, perhaps from a
    // generated JSON file or by fetching directory listings if possible.
    // Note: These patterns are sourced from the Fabric project (https://github.com/danielmiessler/fabric)
    // under MIT license.
    const fileLists = {
        'patterns': [
            'patterns/extract_wisdom/README.md',
            'patterns/create_coding_feature/system.md',
            'patterns/create_coding_project/README.md',
            'patterns/extract_product_features/README.md',
            'patterns/extract_article_wisdom/README.md',
            'patterns/show_fabric_options_markmap/system.md'
        ],
        'notebooklm-knowledge': [
            'notebooklm-knowledge/rate-content-research.md',
            'notebooklm-knowledge/label-and-rate-research.md',
            'notebooklm-knowledge/extract-product-features-research.md',
            'notebooklm-knowledge/extract-questions-research.md',
            'notebooklm-knowledge/extract-recipe-research.md',
            'notebooklm-knowledge/extract-recommendations-research.md',
            'notebooklm-knowledge/extract-references-research.md',
            'notebooklm-knowledge/extract-skills-research.md',
            'notebooklm-knowledge/extract-song-meaning-research.md',
            'notebooklm-knowledge/extract-sponsors-research.md',
            'notebooklm-knowledge/extract-videoid-research.md',
            'notebooklm-knowledge/extract-wisdom-research.md',
            'notebooklm-knowledge/extract-wisdom-agents-research.md',
            'notebooklm-knowledge/extract-wisdom-dm-research.md',
            'notebooklm-knowledge/extract-wisdom-nometa-research.md',
            'notebooklm-knowledge/find-female-life-partner-research.md',
            'notebooklm-knowledge/find-hidden-message-research.md',
            'notebooklm-knowledge/find-logical-fallacies-research.md',
            'notebooklm-knowledge/get-wow-per-minute-research.md',
            'notebooklm-knowledge/get-youtube-rss-research.md',
            'notebooklm-knowledge/humanize-research.md',
            'notebooklm-knowledge/identify-dsrp-distinctions-research.md',
            'notebooklm-knowledge/identify-dsrp-perspectives-research.md',
            'notebooklm-knowledge/identify-dsrp-relationships-research.md',
            'notebooklm-knowledge/identify-dsrp-systems-research.md',
            'notebooklm-knowledge/identify-job-stories-research.md',
            'notebooklm-knowledge/improve-academic-writing-research.md',
            'notebooklm-knowledge/improve-prompt-research.md',
            'notebooklm-knowledge/improve-report-finding-research.md',
            'notebooklm-knowledge/improve-writing-research.md',
            'notebooklm-knowledge/judge-output-research.md',
            'notebooklm-knowledge/label-and-rate-research.md'
        ]
    };

    // Function to populate file lists in the HTML
    function populateFileList(listElement, files, directory) {
        listElement.innerHTML = ''; // Clear existing list
        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.classList.add('file-item');
            fileItem.innerHTML = `
                <input type="checkbox" id="${directory}-${file}" name="selected-files" value="${file}">
                <label for="${directory}-${file}">${file.split('/').pop()}</label>
            `;
            listElement.appendChild(fileItem);
        });
    }

    // Populate the lists on page load
    populateFileList(patternsListDiv, fileLists.patterns, 'patterns');
    populateFileList(notebooklmKnowledgeListDiv, fileLists['notebooklm-knowledge'], 'notebooklm-knowledge');

    // Event listener for the merge button
    mergeButton.addEventListener('click', async () => {
        const selectedFiles = Array.from(document.querySelectorAll('input[name="selected-files"]:checked'))
                                   .map(checkbox => checkbox.value);

        if (selectedFiles.length === 0) {
            mergedContentTextarea.value = 'Please select files to merge.';
            return;
        }

        mergedContentTextarea.value = 'Merging files...';

        let mergedContent = '';
        for (const filePath of selectedFiles) {
            try {
                // Fetch the content of each selected file
                // This assumes the files are accessible via HTTP relative to the HTML file
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const fileContent = await response.text();
                mergedContent += `## ${filePath}\n\n${fileContent}\n\n---\n\n`; // Add a separator
            } catch (error) {
                console.error(`Error fetching file: ${filePath}`, error);
                mergedContent += `## Error fetching ${filePath}\n\nCould not retrieve content.\n\n---\n\n`;
            }
        }

        mergedContentTextarea.value = mergedContent;
    });
});

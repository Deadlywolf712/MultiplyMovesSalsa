const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'docs');
const sidebarFile = path.join(docsDir, '_sidebar.md');

const excludedFiles = [
    '_sidebar.md',
    '_coverpage.md',
    '_footer.md',
    '_navbar.md',
    'index.html',
    'home.md',
    '.nojekyll',
    // Add any other specific files you want to exclude by name
];

const excludedDirs = [
    'assets',
    'images',
    // Add any other specific directories you want to exclude by name
];

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/-/g, ' ');
}

function getFileTitle(filePath) {
    const fileName = path.basename(filePath, '.md');
    return capitalizeWords(fileName);
}

function getDirTitle(dirPath) {
    const dirName = path.basename(dirPath);
    return capitalizeWords(dirName);
}

function generateMarkdownForDir(currentDir, relativePathPrefix = '') {
    let markdown = '';
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    items.sort((a, b) => {
        const aName = a.name;
        const bName = b.name;

        // Natural sort for numbers at the beginning of filenames/dirnames
        const regex = /^(\d+)/;
        const aNumMatch = aName.match(regex);
        const bNumMatch = bName.match(regex);

        if (aNumMatch && bNumMatch) {
            const aNum = parseInt(aNumMatch[1], 10);
            const bNum = parseInt(bNumMatch[1], 10);
            if (aNum !== bNum) {
                return aNum - bNum;
            }
            // If numbers are the same, compare the rest of the string
            const aRest = aName.substring(aNumMatch[1].length);
            const bRest = bName.substring(bNumMatch[1].length);
            return aRest.localeCompare(bRest);
        } else if (aNumMatch) {
            return -1; // a has number, b does not, a comes first
        } else if (bNumMatch) {
            return 1;  // b has number, a does not, b comes first
        }

        // Default to alphabetical sort if no numbers or mixed
        return aName.localeCompare(bName);
    });

    for (const item of items) {
        const itemName = item.name;
        const itemPath = path.join(currentDir, itemName);
        const relativeItemPath = path.join(relativePathPrefix, itemName).replace(/\\/g, '/');

        if (item.isDirectory()) {
            if (excludedDirs.includes(itemName)) {
                continue;
            }
            const dirTitle = getDirTitle(itemPath);
            markdown += `- ${dirTitle}\n`;
            markdown += generateMarkdownForDir(itemPath, relativeItemPath)
                .split('\n')
                .map(line => line.length > 0 ? `  ${line}` : '') // Indent subdirectory content
                .filter(line => line.trim().length > 0) // Remove empty lines that might result from indentation
                .join('\n') + '\n';
        } else if (item.isFile() && itemName.endsWith('.md')) {
            if (excludedFiles.includes(itemName)) {
                continue;
            }
            const fileTitle = getFileTitle(itemPath);
            markdown += `- [${fileTitle}](${relativeItemPath})\n`;
        }
    }
    // Remove trailing newline if it exists to prevent double newlines
    return markdown.replace(/\n\n$/, '\n');
}

try {
    console.log('Generating sidebar...');
    const generatedMarkdown = generateMarkdownForDir(docsDir).trim();
    console.log('Generated Markdown:\n', generatedMarkdown);

    let sidebarContent = fs.readFileSync(sidebarFile, 'utf8');
    const startMarker = '<!-- AUTO-GENERATED-SIDEBAR-START -->';
    const endMarker = '<!-- AUTO-GENERATED-SIDEBAR-END -->';

    const startIndex = sidebarContent.indexOf(startMarker);
    const endIndex = sidebarContent.indexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
        console.error('Error: Sidebar markers not found in', sidebarFile);
        process.exit(1);
    }

    const contentBefore = sidebarContent.substring(0, startIndex + startMarker.length);
    const contentAfter = sidebarContent.substring(endIndex);

    const newSidebarContent = `${contentBefore}\n${generatedMarkdown}\n${contentAfter}`;

    fs.writeFileSync(sidebarFile, newSidebarContent, 'utf8');
    console.log('Sidebar updated successfully:', sidebarFile);

} catch (error) {
    console.error('Error generating sidebar:', error);
    process.exit(1);
}

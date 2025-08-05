#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- Configuration ---
// !!! IMPORTANT !!!
// Replace this with the RAW GitHub URL to your chosen laugh track.
const SOUND_FILE_URL = "https://github.com/manasvihow/githooks/raw/master/.githooks/sounds/laugh-1.mp3";
const SOUND_FILENAME = "laugh-1.mp3"; // The name it will be saved as.

// The content of the hook script we will create.
const HOOK_SCRIPT_CONTENT = `#!/bin/bash
SOUND_FILE=$(git rev-parse --git-dir)/sound/${SOUND_FILENAME}
if [ ! -f "$SOUND_FILE" ]; then exit 0; fi
if [[ "$(uname)" == "Darwin" ]]; then afplay "$SOUND_FILE" &
elif [[ "$(uname)" == "Linux" ]]; then
  if command -v paplay >/dev/null; then paplay "$SOUND_FILE" &
  elif command -v aplay >/dev/null; then aplay "$SOUND_FILE" &
  fi
fi
exit 0`;

// --- Helper Functions ---
const log = (msg) => console.log(msg);
const logSuccess = (msg) => console.log(`\x1b[32m✅ ${msg}\x1b[0m`);
const logError = (msg) => console.error(`\x1b[31m❌ ${msg}\x1b[0m`);

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download sound file. Status: ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// --- Main Installation Logic ---
async function main() {
  log('Setting up the Sitcom Laughs Git Hook...');

  try {
    // 1. Check if we're in a Git repository
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });

    // 2. Define paths
    const gitDir = execSync('git rev-parse --git-dir').toString().trim();
    const soundDir = path.join(gitDir, 'sound');
    const postCommitScriptPath = path.join(gitDir, 'hooks', 'post-commit');

    // 3. Create directories
    fs.mkdirSync(soundDir, { recursive: true });

    // 4. Download the sound
    log(`Downloading laugh track from ${SOUND_FILE_URL}...`);
    await downloadFile(SOUND_FILE_URL, path.join(soundDir, SOUND_FILENAME));

    // 5. Write and configure the hook
    log('Creating the post-commit hook...');
    fs.writeFileSync(postCommitScriptPath, HOOK_SCRIPT_CONTENT);
    fs.chmodSync(postCommitScriptPath, '755'); // Make it executable

    logSuccess('Laugh track hook installed successfully!');
    log('Make a commit to test it out. You deserve a laugh.');
    process.exit(0);

  } catch (error) {
    if (error.message.includes('not a git repository')) {
      logError('This is not a Git repository. Please run this command from the root of a project.');
    } else {
      logError('An unexpected error occurred:');
      console.error(error.message);
    }
    process.exit(1);
  }
}

main();
# Sitcom Laugh Track Git Hook (`@yeetutils/sitcommit`)

[![npm version](https://badge.fury.io/js/%40yeetutils%2Fsitcommit.svg)](https://badge.fury.io/js/%40yeetutils%2Fsitcommit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tired of silent, boring commits? This command-line tool installs a Git hook that plays a classic sitcom laugh track every time you successfully make a commit! It's a fun, simple way to bring a little joy to your daily coding workflow.

## Quick Start (Recommended)

### Prerequisites
You must have [Node.js](https://nodejs.org/) (which includes `npx`) and [Git](https://git-scm.com/) installed on your machine.

### Installation
The fastest way to use this tool is with `npx`. Navigate your terminal into any Git project and run this single command:

```bash
npx @yeetutils/sitcommit
````

The installer will run once, set up the hook in that project, and you're done\!

## Advanced Installation (for the `git sitcommit` command)

If you love this tool and want it to feel like a native part of Git, you can install it globally.

1.  **Install the tool globally using npm:**

    ```bash
    npm install -g @yeetutils/sitcommit
    ```

2.  **Use the new `git` command:**
    The `git sitcommit` command will now be available on your system. Navigate into any repository and run it to install the hook for that project.

    ```bash
    git sitcommit
    ```

## Usage

Once installed via either method, just use Git as you normally would. After your next successful commit, you'll be rewarded with a laugh.

```bash
git add .
git commit -m "This commit deserves an audience"
# ... and you'll hear the laugh track!
```

## Customization

Want to use your own sound? Easy\!

The installer places the sound file at `.git/sounds/laugh-1.mp3` within your project. You can replace this file with your own audio by saving it to the same location with the same name.

-----

*A project by Manasvi.*

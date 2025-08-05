# Sitcom Laugh Track Git Hook (`@yeetutils/sitcommit`)

[![npm version](https://badge.fury.io/js/%40yeetutils%2Fsitcommit.svg)](https://badge.fury.io/js/%40yeetutils%2Fsitcommit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tired of silent, boring commits? This command-line tool installs a Git hook that plays a classic sitcom laugh track every time you successfully make a commit!

It's a fun, simple way to bring a little joy to your daily coding workflow.

## Quick Start

### Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes `npx`) and [Git](https://git-scm.com/) installed on your machine.

### Installation

There is no need to clone this repository. Just navigate your terminal into any Git project you're working on and run this single command:

```bash
npx @yeetutils/sitcommit
````

The installer will automatically download the sound file and set up the `post-commit` hook in your project's local `.git` directory.

## Usage

Once installed, just use Git as you normally would. After your next successful commit, you'll be rewarded with a laugh.

```bash
git add .
git commit -m "This commit deserves an audience"
# ... and you'll hear the laugh track!
```

## Customization

Want to use your own sound? Easy\!

The installer places the sound file at `.git/sound/laugh-1.mp3` within your project. You can replace this file with any `.mp3` or `.wav` file of your choosing. Just make sure to name your custom file `laugh-track.mp3`.

-----

*A project by Manasvi.*

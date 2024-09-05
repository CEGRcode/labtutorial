---
id: command-line-basics
title: Command Line Basics
sidebar_label: Command Line Basics
sidebar_position: 3
---

import Link from '@docusaurus/Link';

You don't need to be a command line expert to perform bioinformatic analyses but there are some basic navigation commands you should know.

## Navigating Filesystems

When working from the terminal, you "move" around the filesystem in and out of folders/directories. Every file or folder/directory has an address. You can navigate and find things using these addresses/directions using what are called "file paths".

| File Path String | Description |
|:--:| -- |
| `/` | The root directory, absolute "highest" level |
| `./` | The current directory |
| `../` | The directory one level higher than the current one |
| `~/` | The home directory |

<Link
  className="button button--primary"
  href="fhttps://medium.com/@rldsn/bash-for-beginners-the-file-path-part-8-b2a590d33a9c">
  Tutorial on Filepaths
</Link>


You should know the difference between absolute vs relative file paths and file path syntax well enough that you can understand the differences between the following paths:

```
/path/to/dir
path/to/dir
~/path/to/dir
../path/to/dir
./path/to/dir
```


## Editing files

Sometimes when working on remote servers, we need to be able to do some basic file editing. Since not all GUI-based text editors can do this, it is useful to know how to do this through the command line. Check out one of the popular editors (e.g. [vim](https://www.vim.org/), [emacs](https://www.gnu.org/software/emacs/), [nano](https://www.nano-editor.org/))

- [A fun game for learning Vim](https://vim-adventures.com/)

## Useful Shell/GNU commands for biochemists to know

### Level 1 - Finder/File navigation

<Link
  className="button button--primary"
  href="https://datacarpentry.org/shell-genomics/01-introduction/">
  Level 1 shell tutorial
</Link>

Everything you can do in Mac's Finder, you should be able to do in the command line.

| Command | Description | useful flags |
|:--:| -- | -- |
| `pwd` | “**P**rint **w**orking **d**irectory” (where am i?) | |
| `cd` | “**c**hange **d**irectory” (move between directories) | |
| `ls` | List directory contents | `-alSt` |
| `mv` | Move item/s | |
| `rm` | Remove item/s | `-r` |
| `cp` | Copy item/s
| `less` | view contents of file on the command line | `-S` |
| `wc` | “word count" | `-l`|
| `echo` | print a string/variable | |

:::tip

If you get stuck, run `man <Command>` to view usage and help options

:::


### Level 2-Basic File manipulation (Excel-like stuff)

| Command | Description | useful flags |
|:--:| -- | -- |
| `cat` | | |
| `head` |  | `-n` |
| `tail` |  | `-n` |
| `cut` |  | `-df` |
| `paste` |  | |
| `sort` |  | `-nrk` |
| `uniq` |  | `-c` |


### Level 3-Search & more elaborate File manipulation (Excel-like stuff)


| Command | Description | useful flags |
|:--:| -- | -- |
| `sed` | powerful and flexible file manipulation: global search and replace, stripping headers, etc | `-i` |
| `grep` | search a file for strings or regex patterns [Read More][grep-tutorial] | `-nfo` |
| `awk` | file manipulation - good for reordering columns or filtering on values | `-F` |
| (Shift-`\`, "pipe") | | |
| `>` |  | |
| `>>` |  | |

[grep-tutorial]:https://qpeng.org/computer/grep.htm

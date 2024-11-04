---
title: "Exploring .git folder"
description: "Git was my valentine this year. I finally went deep inside .git and got to know it a lot better."
publishDate: 14 Feb 2021
tags: ["programming", "git"]
draft: false
---
<!-- coverImage: -->
<!--   src: "@/assets/exploring_git/git_cover.png" -->
<!--   alt: "Git logo in rough sketch style" -->
If you are like me, you find it easier to learn new things if you already know its fundamentals. With this article, we will have a deeper understanding of how git works under the hood.

---

## The .git folder
When we initialize a git repository, a .git folder gets created. Git uses this folder to perform its version control. Git takes snapshots of the state of all the files and stores them as binary in the .git/objects folder.

<!-- ![Git storing snapshots of all files in the project](@/assets/exploring_git/git_snapshot.png) -->
<!-- Fig: Git storing snapshots of all files in the project (instead of storing delta changes between each files which other VCS do.) -->

## Objects
### Files and their objects
If a file has been committed at least once, it is considered a tracked file. 

Every time we stage changes of these tracked files, a new object gets created. These objects created for files are said to be of type blob.

The blob objects get stored as a SHA1 hash of the contents of the file. We can use the command git hash-object <<path_to_file>> on a file to generate its hash. It is stored in the .git/objects folder as shown in the image below.

![Generating hash for a file and searching for the location of its object in the .git folder](@/assets/exploring_git/git_hashobject.png)
Fig: Generating hash for a file and searching for the location of its object in the .git folder.

We can also use git cat-file -p <<object_hash>> to print contents of the object and git cat-file -t <<object_hash>> to get the type of the object.

![git cat-file on a git object](@/assets/exploring_git/git_catfile.png)

### Folders and their objects
Similar to files, objects are created for folders of the project. These types of objects are said to be of type tree.

As staged files are committed, git creates new tree objects for all the parent folders of these files. A tree object has info on its child files and folders. If we run the cat-file command for tree objects, we get the following output.


![git cat-file on a git tree object](@/assets/exploring_git/git_catfile_one.png)

The first column has a six-digit number. Its first three digits are flags representing the object and the last three digits are file permissions.

The other columns are object type, hash, and name respectively. This is much like a simplified version of standard UNIX directory entries.
### Commits and their objects
We store a snapshot of the state of files with the help of commits. Making these commits generate objects of type commit.

The commit object has a root folder's tree hash. Every commit has a unique tree hash. All the project files objects can be navigated from this one tree hash.

The commit object also has the parent; the object hash of the previous commit. The initial commit does not have a parent hash at all as there is no previous commit. Whereas the merge commits, which are created by merging two branches, have two parents. One from each branch.

With the help of the parent, commits form a linked list-like structure.

![Parent and tree visualization of commit objects](@/assets/exploring_git/git_commit_tree.png)
Fig: Parent and tree visualization of commit objects

Besides these, the commit object also has information about an author, a committer, and a commit message.

We can use the cat-file command to get detailed info of what's inside a commit object as shown in the image below.

![git cat-file on a git commit object](@/assets/exploring_git/git_catfile_commit.png)

### Annotated tags and their objects
Annotated tags are like branches but they always point to a specific commit. Objects of type "tag" are created for annotated tags in the objects folder.

The tag object has an object hash of the commit it is pointing to, its name, tagger info, and a tagging message. Its content can be seen by using cat-file command.
![git cat-file on a git tag object](@/assets/exploring_git/git_catfile_tag.png)

Annotated tags are stored in file .git/refs/tags/<<tag_name>>. The file has hash of the corresponding tag object.

![Annotated tags and their relation with commit objects](@/assets/exploring_git/git_tags.png)
![Visualization of git obejcts and their relation](@/assets/exploring_git/git_commit_tree_timeline.png)
Fig: Visualization of git obejcts and their relation.
### Git is like a file system
We know that one of the jobs of a filesystem is finding which memory blocks in the storage device belong to which file. Similarly, git determines which object belongs to which version. Git is like a file system implementation for version control.
## Branches
A branch is simply a reference to a commit. For all the branches, a commit hash is stored in .git/refs/heads/<<branch_name>> file. As new commits are made, the current branch's file is updated with the new commit's hash.

![content of the HEAD and main objects](@/assets/exploring_git/git_branch_commit.png)

A path to currently active branch is stored in the file .git/HEAD. If we checkout to another branch, the HEAD file is updated with the path of that branch.

:::note
Similarly, if we checkout any commits, the HEAD file is updated with the hash of the commit. The repo is said to be in a 'detached HEAD' state.
:::

When a new branch is made, a new.git/refs/heads/<<new_branch_name>>file is created. Its commit will be the same as the commit it branched out from.
## The index file
The .git/index is a binary file that has all the information of the current branch.

As discussed earlier, staging a file makes a new blob object for that file. The hash of these blob objects and their metadata are stored in the index file. The stored metadata includes size, created and modified date-time, various flag bits, etc.

The index file is used to generate tree objects and the commit object.
## Merge
Merging branch B in branch A creates a new commit object C in branch A. Object C has two parent hashes. One from each branch.

Now, if we merge branch A in branch B and there are no new commits in branch B, no new commit objects are made. This type of merge where no new commit object is created is called "fast forward merge."

![Merging branch B in branch A to make commit C](@/assets/exploring_git/git_branch_graph.png)
Fig: Merging branch B in branch A to make commit C

---

## Final thoughts
Congratulations on getting this far in the article. This covers core concepts regarding local version control of git. Understanding the more advanced topics of git should be easier now.

Further topics include remote version control and access management, configs, hooks, etc. But I will leave that to next year's valentine.

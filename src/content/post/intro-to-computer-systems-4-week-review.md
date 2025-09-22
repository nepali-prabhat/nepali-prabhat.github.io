---
title: "Intro to Computer Systems: 4 Week Review"
description: "Review of the CMU's course 14513, Introduction to Computer Systems, after taking it for 4 weeks. Talks about datalab and bomblab."
publishDate: 21 Sep 2025
tags: ["CMU", "Carnegie Mellon University" ,"literature"]
ignore: false
draft: false
---

[14513](https://www.cs.cmu.edu/~213/schedule.html) covers extensive aspects involved with systems programming. The course started with teaching how integers are represented in computer systems. It shows the limits where mathematical abstraction starts breaking. After that, it moves to machine level representations of program. The two labs, datalab and bomblab are fun

[14513](https://www.cs.cmu.edu/~213/schedule.html) covers extensive aspects of systems programming. The course starts by teaching how integers are represented in computer systems, showing the limits where mathematical abstraction breaks down. After that, it moves to machine-level representations of programs. The two labs, **datalab** and **bomblab**, are especially fun.

## Datalab
Datalab gives us 12 programming puzzles and constrains us to only use certain bitwise operators (no loops, conditionals, etc).

Starting early helped complete the lab on time. Some memorable of the 12 were:
1. isPalindrome
	  - Took the longest to code
    - Ended up being 47 total operators
2. addOK (check if x+y overflows)
    - Explored optimization techniques
    - Limited to use maximum of 20 bitwise operators
    - Initially solved with 42 operators. Optimized down to 20.
3. absVal (find absolute value of x)
    - Was marked highest difficulty
    - Ended up one-shotting the solution

In the topic of negative number representation, I also noticed many beautiful ironies and themes of duality. I'll leave for you to find them.

![unsigned and signed representation of 3 bit integers](@/assets/cmu_4_week_recap.png)


## Bomblab
Bomblab is a binary executable that asks us for secret codes to diffuse a bomb. If we enter the wrong ones, it explodes and lowers our course grade.

The bomb has 6 phases, and we use a debugger (gdb) to step through disassembled assembly instructions. We read instructions, trace data and control flow, study procedures, examine the stack, and so on, to uncover the codes and diffuse the bomb.

As I examined the assembly, the binary became clearer and clearer. By the end, I understood every function clearly without seeing the source code.

### Hidden Phase
Bomblab alluded to a hidden phase after I completed the 6th phase. This phase wouldn't add anything to our course grade. In fact, it just increased probablity of accidently exploding the bomb.

I avoided the phase but my curiosity got the best of me. I found phase 7, triggered it successfully and diffused the bomb. This phase turned out to be the most difficult one but the high I got from diffusing it was worth it.

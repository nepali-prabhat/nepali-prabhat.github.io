---
title: "Intro to Computer Systems: 4 Week Review"
description: "Review of the CMU's course 14513, Introduction to Computer Systems, after taking it for 4 weeks. Talks about datalab and bomblab."
publishDate: 21 Sep 2025
tags: ["CMU", "Carnegie Mellon University" ,"literature"]
ignore: false
draft: false
---

[14513](https://www.cs.cmu.edu/~213/schedule.html) covers extensive aspects involved with systems programming. The course started with teaching how integers are represented in computer systems. It shows the limits where mathematical abstraction starts breaking. After that, it moves to machine level representations of program. The two labs, datalab and bomblab are fun

## Datalab
Datalab gives us 12 programming puzzles and constrains us to only use certain bitwise operators (no loops, conditionals, etc).

Starting early helped complete the lab on time. Some memorable of the 12 were:
1. isPalindrome
	  1. Took the longest to code
    2. Ended up being 47 total operators
2. addOK (check if x+y overflows)
    1. Explored optimization techniques
    2. Limited to use maximum of 20 bitwise operators
    3. Initially solved with 42 operators. Optimized down to 20.
3. absVal (find absolute value of x)
    1. Was marked highest difficulty
    2. Ended up one-shotting the solution

In the topic of negative number representation, I also noticed many beautiful ironies and themes of duality. I'll leave for you to find them.

![unsigned and signed representation of 3 bit integers](@/assets/cmu_4_week_recap.png)


## Bomblab
Bomblab is a binary executable that asks us for secret codes to diffuse the bomb and if we give wrong ones, it explodes and reduces our course grade.

The bomb has 6 phases and we use debugger(gdb) to go through disassembled assembly instructions. We read assembly instructions, understand data flow, control flows, procedures, stack, and so on to find the codes and diffuse the bomb.

As I examined the assembly more, the program became clearer and clearer. At the end, I understood every function clearly although I didn't have access to the source code.

### Hidden Phase
Bomblab alluded to a hidden phase after I completed the 6th phase. This phase wouldn't add anything to our course grade. In fact, it just increased probablity of accidently exploding the bomb. So I avoided the phase but my curiosity got the best of me.

I found phase 7, triggered it successfully and diffused the bomb. This phase turned out to be the most difficult one for me but the high I got from diffusing it was worth it!

## Conclusion
The course has been really fun so far. It hasn't been as difficult as I had imagined it to be -- but then I haven't faced malloc lab yet, which apparently needs at least 40 hours.

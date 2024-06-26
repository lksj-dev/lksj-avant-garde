# Why did you do this?

Back in 2016 when I started typing out first word of *Harbinger* modding tutorial, my initial thought was 
to bring the latest changes in Forge to a wilder audience, the then-choice to go at that time. “Enough of 
misinformation, I have to stand out and do something for this!” I thought.

Turns out there were too many things to document. The progress was slow, and my time are limited. The target 
version of *Harbinger* had to move along with Minecraft updates, from the initial 1.10, to 1.11, and then 
1.12.2. For short period of time, I also tried maintaining documentation for all 3 versions, but ultimately 
I dropped everything but 1.12.2.

*Harbinger* was officially released at March 8th, 2019. It was a success, but it also met with critism. 
One major critism is that it was too hostile to newcomers; sometimes it reads as if it was a mere collection 
of *my own* personal notes on Minecraft modding. 

Whilst I did have put a warning in the beginning that *Harbinger* is NOT for newcomers without sufficient 
understanding of Java programming language, I have to admit that these critisms have their own value. 

How to respond to those critism is an entirely different story. I did not have the time to do a total overhaul 
on *Harbinger*, and Minecraft version number is still increasing relentlessly. Fortunately, there are many new 
tutorials spourting up as time goes by, quickly filling up the void of modding tutorials. 

It looks like my mission has finished.

... or so I thought. After we have enough tutorials, I started to observe a new pattern: many new modders are 
looking for answers to some very specific use cases. These use cases are too specific to fit into a general-
purpose modding tutorial, but they do frequently appear in popular mods. 

Behind these never-ending questions is the lack of hands-on experiences. With the shortage of in-depth documentation 
for Minecraft itself, new modders can only gain experiecnes by either asking in the right places, or read the 
decompiled code on their own, hopefully one day they will get to their "Eureka!" moment. The former option requires 
that people know where to ask, or even know how to ask *in English* if it is not their native langugae. The latter 
option is prone to error because sometimes you should avoid what vanilla does in code. Either way, we need a better 
approach.

“Can we have a collection of example mods to tell these hands-on experiences?” 

I recall that I reserved two chapters while I was arranging the table of contents for *Harbinger*. 
Those two chapters were to hold exercise questions to readers; questions were all based on features from popular mods 
in the past. Specifically, one chapter (Ch. 39) would lean towards original questions and would provide reference 
answer; while another chapter (Ch. 40) would be entirely re-implementation of features in old mods in modern Minecraft 
versions, and no sample answer would be available. 

Convienantly, I also have couple of mods for older Minecraft versions. They are either created for comission or for 
fun. After a quick look over all of them, I believe I have already found a good starting point. With the recent rise 
of multi-loader templates, I can also tackle down the cross-loader issue, or even further, the long-standing issue 
of cross-version.

I have hardly ever seen similar attempts in this community before.

... and I have a feeling that there aren't much time left for me *in this community*. With the help of my own 
multi-loader template [*Paramita*][1], I ported these old mods to newer versions, such as 1.19.2, 1.20.1 and 1.21. 

And that is the beginning of the story.



3TUSK

June 25th, 2024


[1]: https://github.com/3TUSK/Paramita

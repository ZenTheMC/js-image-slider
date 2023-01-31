# js-image-slider
Mini project under TOP Dynamic User Interface lesson

No help from TOP specific videos for this assignment.
No starting point of reference.
Pseudo-coded, first drafted, then google searched, then second draft, then looking up other people's projects that are similar, then third draft.
All to be done in 2-3 hours within 1 nightly study session 1/29 8:30pm-11:30pm.
Most of the time spent was brainstorming and thinking of how to go about it, rather than actual coding... lol

Mini-project, so not supposed to spend much time on it since theres much bigger projects upcoming.

General Pseudocode here, to not overly clog up the actual HTML and JS files :

Outcome :
Image carousel
Arrows each side advancing image forward or back
Auto move forward every 5 secs
Nav circles bottom show slide on
Clickable to advance to that slide

Process :
Wide div to contain each slide of each img
Container div that will hold that first div^
Manipulate which slide is visible at any given time through this base
Once the divs of HTML base is hard-coded properly
Build functions for next and previous
They will advance to next or previous slide
Smoothen the transitions through CSS - *OPTIONAL*
Make arrow buttons and link them to those functions to make them cycle through images
Add navigation dots at bottom of slides
Horizontal series of empty circles with CSS right below slideshow
The corresponding circle gets filled to show which slide you're on
Link each circle to its slide so you can jump to the slide by clicking on the circle
Add a timeout which advances slides every 5 seconds
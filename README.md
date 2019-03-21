# YouTube Run Timer

A tool for convient retiming of speedruns, or other YouTube videos.

## Use

1. Enter the YouTube url
2. Enter the video framerate (found by right clicking the player -> Stats for nerds -> after the @ on 3rd line)
3. Get the `Start` and `End` time of the section you want to time. You can use the controls to pause and frame advance.

The time will then be calculated.

## Possible Causes of Inaccuracy

- Source video framerate incompatible with YouTube (and has been converted by YouTube)
- Dropped frames in source video
- Rounding error from YouTube player (e.g. 1.0166667 @60 will display as frame 60, but be calculated as 61)
- Embedded player inaccuracy in seeking (ensure video fully loaded at highest framerate; take multiple measurements if in doubt)

# YouTube Run Timer

A tool for convenient retiming of speedruns, or other YouTube videos.

## Use

1. Enter the **YouTube video URL**
2. Enter the **video framerate** (found by right clicking the player -> Stats for nerds -> on 3rd line after the @)
3. Get the **Start** and **End** time of the section you want to time. You can use the controls to pause and frame advance.

The time will then be calculated to the nearest frame.

## Possible Causes of Inaccuracy

- Source video
    - Source video framerate incompatible with YouTube (YouTube will convert framerates such as 59.94 to compatible ones, losing accuracy)
    - Dropped frames in source video
    - Source video framerate different to that of game
- YouTube player error (avoid these by seeking to the start/end frame once)
    - Time of 1.0166667 @60 will display as frame 60, but be calculated as 61
    - Player error in seeking (will display a different frame to what it should)

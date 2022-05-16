Some boilerplate for a HTML5 canvas-based game, using classes to define "Actors".

## Getting started
Set up TypeScript:
```
> npm install typescript
> npx tsc --init
```
To compile all TypeScript files:
```
> npx tsc
```
Open `index.html` in your browser, preferably using LiveServer or other local server.

## How does this template work?

Although there are many languages and frameworks, many use very similar patterns. The main functionality of this template rests on two classic patterns: the "Actor" and the game loop.

An Actor is a kind of object that represents any entity in the game.
A global actorList of Actors is maintained at all times (an ActorList object).
The game loop cycles repeatedly, doing 2 things every "frame" (about 1/30th of a second):
1. Draws all Actors in the actorList to the screen.
2. Updates the state of all Actors in the actorList.

How each "Actor" is drawn or updated is defined in the "Actor" class.

Typically, because there are multiple types of entities, it is helpful to make several **subclasses** of Actor. 

Events, like user inputs or timed events, are managed by event handlers, which run in between game loop cycles.

## What's here?

4 TS files are included as a starting place for code organization:
1. `game_loop.ts` : defines the standard game loop and a few global variables.
    - *At first, leave this file alone*; refer to it for its global variables (canvas, ctx, actorList)
    - Later, you could define more global variables or functions here.

2. `actor_list.ts` : defines the ActorList class.
    - *At first, leave this file alone*; refer to it for its handy methods (addActor(), removeAllActors(), removeActor(), removeAllActors()) for working with the actorList.
    - Later, you could add additional methods to the ActorList class, if helpful/appropriate.

3. `actors.ts` : defines the Actor class, and any additional sub-classes.
    - **Start here, defining the properties/behaviors of Actor.**
    - You will likely wish to define additional sub-classes for Actor here, or in additional files.

4. `event_handlers.ts` : defines event handlers.
    - Provided are a few (empty) event handlers mostly for common user-input events (click, keydown, keyup), and for when the page is first loaded. 
    - **Update these event handlers, especially "load" to set-up the game.**
    - You may wish to define more handlers for other kinds of events here, or in additional files.

Again - you can certainly create more files, or re-organize the contents of these files into multiple files. Simply add `<script>` elements to the `index.html` for each new file.

## Notes:

The "Actor" pattern and game loop structure is loosely based on the Java Greenfoot environment.

The game loop structure also bears some loose resemblance to p5.js 

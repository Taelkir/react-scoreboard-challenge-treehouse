# Challenge instructions

- When the app loads and all player scores are 0, there is no highest score, so all icons should be light grey.
- The change should happen only when a player takes the highest score, or when they are tied for the highest score.
- If the player with the highest score is removed from the scoreboard, then the player (or players) with the next highest score gets the gold crown.
- All the information you need to determine the highest score is in the players state.
- You'll need to figure out how to get and update the highest score with each score change, then pass that information to a player, and eventually the SVG.

## SVG crown icon
```
<svg viewBox="0 0 44 35">
  <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
  <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
</svg>
```

## Solution
https://teamtreehouse.com/library/react-components/react-component-patterns/the-react-challenge-solution

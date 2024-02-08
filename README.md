## About the Project
This repository features a curated collection of CSS Grid usages commonly encountered in front-end interviews. While many interviewers are willing to compromise on CSS layout perfection due to time constraints, practicing these simple and frequently used CSS Grid layouts can contribute to earning extra points.

## Demo

https://stackblitz.com/edit/web-platform-lwexl8?file=index.html

## TIL

### Game board (Tic tac toe, memory game, Chess)

- Creating a 3x3 , nxn or m by n board is very easy with grid layout
```
  .wrapper{
   width: 150px; // Set a width for the width, this should be the sum of the n num of columns
   display: grid; // define the layout type
   // Because the html containers are generally placed in rows, we need to explicitly define the number of columns for the our layout. 3 here refers to number of columns and 1fr is the flexible unit that divides the available space by the number columns defined earlier.

   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr); // Not necessary to achieve the layout
  }

  .box{
  width: 50px; // wrapper width/ 3Should match the individual column width or divided by wrapper width
  height: 50px;
  border: 1px solid #aaa;
} 
```

For the number of col and width of the parent we can use calc and var css properties

```
.square{
width: calc(var(--parent-width)/var(--col));
height: 50px;
border: 1px solid #aaa;
}

.tttBoard{
--parent-width: 150px;
--col: 3;
display: grid;
border: 1px solid #aaa;
grid-template-columns: repeat(var(--col), 50px);
width: var(--parent-width);
}
```
### Calculator Layout

1. First figure out the layout of the calculator you are implementing, to determine number of rows and cols. To begin with I started 5 rows and 4 cols and later on realized i missed the input display so added it.
2. The grid layout basics are same like we used in tic tac toe, grid container and grid item. Give parent container width and height in order for flexible children.
3. I learnt two new concepts with this layout,
   -- 1. Centering the content in the grid item (Vertical and horizontal). For that treat the individual grid as flex container and use justify content and align items
   -- 2. Spanning the individual grid items to increase width or height. Use `grid-column` and `grid-row` with span keyword and provide the number of cols or rows to position it.

### Bugs Discovered

#### Solved Bugs

1. Navbar link alignment
  * The navbar links would automatically align on the left of the screen next to the logo. 
  * To solve this I applied justify-content: flex-end, allowing the links to hug the right side of the screen
  * Code from [W3Schools.com](https://www.w3schools.com/cssref/css3_pr_justify-content.asp)

#### Remaining Bugs

1. Video link Layout
  * The youtube videos leave a large space underneith before the footer. This is particularly evident on larger screens. 

### Manual Testing

1. Internal link (Logo)
  * Click the Gen5 logo 
  * Returns the user to the homepage
  * Result: pass


  

### Validator Tests

#### index.html
  * W3C HTML Validator - Document checking completed. No errors or warnings to show.
  * Chrome Lighthouse - 100, 100, 100, 89.
  * ![Lighthouse assessment](assets/images/indexhtml.png)

#### style.css
  * W3C CSS Validator - Congratulations! No error found.

### User Story Tests

#### Experienced with console gaming:
1. As an experienced gamer, I want to know which console has the best internal specifications e.g. best frame rate, internal storage and reverse compatibility.
  * To address this I created a features table that directly compares the specifications of each console.
  * ![User Story 1](assets/userstory/us1.png)
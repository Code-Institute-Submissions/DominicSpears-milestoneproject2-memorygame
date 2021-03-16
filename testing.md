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

#### index2.js
  * JSHint Code Tester - One unused variable(ticker)  
### User Story Tests

#### Experienced with console gaming:
Experienced with PC Gaming
1. As an experianced gamer, I want in-depth instructions to explain game mechanics.
  * To address this I added extra sections to the instruction modal with difficulty and reset explained.
  * ![User Story 1](assets/userstory/us1.png)

2. As an experianced gamer, I want gameplay that is easy to learn but difficult to master.
  * To address this I added similar pictures on the card faces to make matching more difficult.
  * ![User Story 2](assets/userstory/us3.png)

3. As an experianced gamer, I want increases difficult levels to test progression.
  * To address this I wanted to add multiple difficulties to test experianced players.
  * ![User Story 3](assets/userstory/us2.png)

4. As an experianced gamer, I want replay value via a scoring system...
  * To address this I wanted to add a scoring system on the final victory modal.
  * ![User Story 4](assets/userstory/us4.png)

5. As an experianced gamer, I want a score breakdown so they can understand how to get a higher score.
  * To address this I wanted to add details of the scoring system on the final victory modal. 
  * ![User Story 1](assets/userstory/us4.png)

New to PC gaming / casual
1. As a new gamer, I want Basic / fundamental instructions. 
  * To address this I added basic gameplay instructions that are easily understood.
  * ![User Story 5](assets/userstory/us5.png)

2. As a new gamer, I want the site to be visually striking and memorable
  * To address this I added a bold color scheme and clean, modern aesthetics.
  * ![User Story 1](assets/userstory/us6.png)

3. As a new gamer, I want an easy level to help get players started.
  * To address this I wanted to add varying difficulty levels including an easy level for beginners. 
  * ![User Story 1](assets/userstory/us2.png)

4. As a new gamer, I want an ending screen/modal to congratulate the player upon completion.
  * To address this I added a victory modal with a focus on congratulating the player.
  * ![User Story 1](assets/userstory/us4.png)
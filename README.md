# _Crypto Square_

#### _ 09.21.17_

#### By _**Daniel Cheng, Victor Puentes,**_

## Description

_This project will allow a user to input any sentence they want and the webpage will return an encrypted message._

| Behavior  | Input  | Output  |
|---|---|---|
|1. User enters a sentence of text in input box and the webpage page returns the sentence | Hello, how are you? | Hello, how are you?  |
|2. webpage turns everything to lowercase| Hello, how are you? | hello, how are you?  |
|3. webpage takes all punctuation away. | Hello, how are you?  | hello how are you |
|4. webpage takes spaces away| Hello, how are you? | hellohowareyou  |
|4. webpage splits each letter| Hello, how are you? | h e l l o h o w a r e y o u  |
|5. webpage counts the length of the user input array| Hello, how are you?  | 16  |
|6. Webpage determines the size of the table according to the number of characters of the inputted text by using Math.floor(sqrt of the number of characters); and passing the number of characters as an argument.   |  Math.floor(sqrt(16))   | 4
|7. Webpage will now use that value as the number of columns and increment that number by 1 if it is not an even square root, in order to get correct number of rows. |  17 character total   |  4x5 square
|8. webpage will use indexOf to get the first and every fifth character into a new array.  |  Hello, how are you?   | horoe ewula lwolr leoeh orhhe |
|9.     |     |
|10.    |     |

# passwordGen
Welcome to my random password generator.

Firstly I would like to acknowledge that I had to do a thorough amount of research in order to make this possible. I collaborated with classmates and referenced plenty of online resources. I grappled with various javascript commands to better understand their functionality and to expose myself to the practicality of javascript.

First, the password generator will prompt the user asking how long they would like their password to be. The password must be between 8 and 128 characters-- the while loop on line 17 ensures the user stays within the prompted guidelines. If the user chooses a number outside of the requested range, line 19 reiterates the function requesting a proper password length.

After the user has selected an eligible password length, lines 27-30 prompt the user upon which the user will decide whether they want numbers, special characters, lower case and/or upper case letters in their password. Lines 35-38 ensure the user is sticking to the guidelines. Lines 46-48 in which we declare the fushion function concatinates the various arrays we declared earlier on lines 5-8 according to the user's preferences. Lines 63-65 is where the program randomly selects certain characters to generate into the password.

Enjoy creating rng passwords to your heart's content!
# One World
# Project Proposal 
## Overview
17.6 Million US Citizens were subject to identity theft in 2014. Passport issuance is prone to inconsistencies and have lead to trillions of dollars being misused. Given state of digitalisation and our dependencies on fraud-prone technologies, it's more important than ever before to implement this. 

This would not only prevent identity theft, but also make travelling less cumbersome - preventing people from forging and duplicating identities.

## Motive
- Blockchain offers an infrastructure of transparency, event tracking, cryptography and the chance to improve security sensor and data sharing -- which some security solutions and implementations on enterprise networks lack.

- Directly applicable to everybody - even our ex-President was accused of faking his own identity!  

## Functionality
- Two contracts are implemented. Registry.sol and Exchange.sol. 

- Registry.sol holds the encrypted passport information for every citizen. The registry supports adding new passports into the system as well as verifying the validity and existence of a passport.

- Exchange.sol serves as the intermediary between the client and the embassy. Each citizen and embassy hold accounts on this contract that allow a citizen to add funds to their account when they need to obtain a passport. After an embassy has determined that the individual is qualified for citizenship, the embassy can create a passport for the individual through the registry, and will be paid the passport transaction fee from the individual. The identity of the individual is now stored on on the blockchain through a unique passport, and can be easily verifiable through the registry.

- In order to maximise security and protection of identity: we will be using SHA-256 encryption based on user passport information such as: place of birth, date of issuance, first name, last name

## Diagram
![alt text](https://github.com/jiayue-li/final-project/blob/master/diagram.jpg "Proof-of-Travel")

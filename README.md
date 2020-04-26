# HackDSC - DonAid

[![License](https://img.shields.io/github/license/williamleiby/portfolio)](https://github.com/williamleiby/hackdsc/blob/master/LICENSE)

![Drawing](./client/src/assets/svgs/main.svg)

## Product Description 🔬

DonAid is a donation brokerage platform where there are two types of user; givers and receivers. Receivers are individuals suffering from short-term financial harship and are looking for funds to help them get through uncertain times. Givers are individuals looking to send funds to those most in need.

DonAid matches givers with receivers in a one-way mirror approach; Givers know who the receivers are, while receivers do not know who the givers are.

Receivers sign up and provide a small amount of information to DonAid (profile picture, first name, last name, date of birth, phone number, and description) which is then shown to potential givers on the platform. Receivers then authenticate with their bank accounts via Plaid, an end-to-end encrypted financial services product. DonAid does not store any of its users personal banking information, but rather leverages Plaid to broker the receiving of funds if a giver so wishes to donate their money to a receiver. The only interaction Plaid will have with receiver's bank accounts is if a giver decies to send money to a receiver, where the funds will be transferred from one account to another.

If a giver decides to send a receiver money, the receiver will get 100% of all funds transferred (if this is a non-profit product. For-profit, we will take 5-10 basis points (bps) per transaction to reinvest into building out the product further); DonAid does not take any commission for brokering the relationship between a giver and a receiver (for the non-profit revision of the product).

All receivers have to do if they wish to potentially receive funds from givers is sign up via their phone numbers and connect to their bank accounts via Plaid. Yup, that's it.

If givers wish to send money to receivers, they are required to do a bit more. Due to the preservation of anonymity for every giver, we don't ask for their first or last name. Rather, we only ask for a unique username and phone number. After account creation, they are then presented with a single profile of a receiver. The giver has full control over whether or not they wish to fund this receiver. If they decide not to lend to a particular receiver, that receiver will be placed in the back of a queue where other receivers will be show to givers before they are potentially shown to the same giver again.

If a giver does, however, decide to send funds to a receiver, they will then be directed to input their desired amount (maximum of \$500) and their payments are processed via Stripe.

Receivers then receive a notification via their phone that they have been gifted funds, along with an optional message the giver can choose to send with the funds.

## Prerequisites 🎟

- [Git](https://git-scm.com) - Version Control
- [Node.js](https://nodejs.org) - JavaScript Run-Time Environment (v12.16.2)
- [Yarn](https://yarnpkg.com) - Node.js Package Manager (v1.22.4)
- Text Editor/IDE
- Terminal

## Installation 👷‍♂️

Option 1:

```bash
$ git clone https://github.com/williamleiby/hackdsc.git
```

Option 2:

[Download the Repository as a ZIP File](https://github.com/williamleiby/hackdsc/archive/master.zip).

## Getting Started 🐣

Change directories into the cloned repository:

```bash
$ cd hackdsc/
```

Install all dependencies and dev-dependencies on the front-end and back-end of the application:

```bash
$ yarn install:fullstack
```

Run the application:

```bash
$ yarn dev
```

Navigate to either your [Local Port](http://localhost:3000) or [Network Port](http://10.0.0.7:3000) to see the application running.

## Routing 🚕

Due to the unfortunate ability to get Firebase authentication working properly via phone numbers, you will have to manually overwrite code to see the two major states of the application:

- Authenticated
- Unauthenticated

In [App.js](./client/src/App.js) in the client/ folder, changing the boolean value of the 'isAuthenticated' constant from true to false will alternate between the two major states of application.

## Built With 🛠

- [Google Cloud Platform](https://cloud.google.com/) - Cloud Computing Platform
  - [AppEngine](https://cloud.google.com/appengine/) - Web Application Hosting
  - [Firebase](https://firebase.google.com/) - JavaScript Run-Time Environment
- [React.js](https://reactjs.org/) - UI Library
- [Express.js](https://expressjs.com/) - Web Framework for Node.js
- [Plaid](https://nodejs.org/) - Technology Layer for Financial Services Institutions
- [Stripe](https://stripe.com/) - Payments Processing Service

All of the libraries and packages used in this project can be found in the following files:

- [Front-End](./client/package.json)
- [Back-End](package.json)

## Creators 🧠

- [William Leiby](https://github.com/williamleiby)
- [Ebtesam Haque](https://github.com/ebtesam25)
- [Edmund Lui](https://github.com/Edmund-Lui98)
- [Adams Anaglo](https://github.com/AdamsAnaglo)

## Acknowledgements 👏

- [Google Developers HackDSC Team & Organizers](https://hackdsc.com/#team)
- [Google Developers HackDSC Sponsors](https://hackdsc.com/#sponsors)

## Licensure 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

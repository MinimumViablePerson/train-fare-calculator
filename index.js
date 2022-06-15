// Instructions
// - Ask the user for their age and how far they are travelling (in km)
//    -- The price per travelled km will be £0.21
//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

console.log(
  `%cWelcome to the train fare calculator!`,
  'font-size: 1.5em; font-weight: bold;'
)

let kmsTravelled = Number(prompt('How many kms do you want to travel?'))
let age = Number(prompt('What is your age?'))
let pricePerKm = 0.21

let juniorDiscountRate = 0.2
let seniorDiscountRate = 0.4

let fare = kmsTravelled * pricePerKm
let juniorFare = fare - fare * juniorDiscountRate
let seniorFare = fare - fare * seniorDiscountRate

if (age < 18) {
  console.log(
    `%c
KMs Travelled: ${kmsTravelled}
Age: ${age}
You get the Junior Discount!
You need to pay: £${juniorFare.toFixed(2)}
  `,
    'color: royalblue; font-size: 1rem;'
  )
} else if (age > 65) {
  console.log(
    `%c
KMs Travelled: ${kmsTravelled}
Age: ${age}
You get the Senior Discount!
You need to pay: £${seniorFare.toFixed(2)}
  `,
    'color: royalblue; font-size: 1rem;'
  )
} else {
  console.log(
    `%c
KMs Travelled: ${kmsTravelled}
Age: ${age}
You need to pay: £${fare.toFixed(2)}
  `,
    'color: royalblue; font-size: 1rem;'
  )
}

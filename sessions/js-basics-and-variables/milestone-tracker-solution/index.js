console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = process.argv[2]; // This takes the `<years>` entered in the command `node index.js <years>`.

console.log("You've been practicing for: " + yearsPracticing + " years");

// Constants
const hoursPerDay = 24;
const practiceHoursPerDay = 1;
const milestoneYears = 10;
const daysInAYear = 365;

const daysPracticing = yearsPracticing * daysInAYear;
console.log("That's about " + daysPracticing + " days of practice.");

const remainingDays = (milestoneYears - yearsPracticing) * daysInAYear;
console.log("Days left to reach " + milestoneYears + " years: " + remainingDays);

const percentage = (daysPracticing / (milestoneYears * daysInAYear)) * 100;
console.log(
  "You've completed approximately " + percentage + "% of your milestone."
);

const practiceDaysTotal = (daysPracticing * practiceHoursPerDay) / hoursPerDay;
console.log(
  "At " +
    practiceHoursPerDay +
    " hour/day, that's about " +
    practiceDaysTotal +
    " full days of total practice time."
);

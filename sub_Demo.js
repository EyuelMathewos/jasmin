const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");
const schedule = require("node-schedule");
async function subscriptionFilter() {
  const subList = [
    {
      id: "1",
      name: "test",
      SubsciptionDate: new Date("2022-09-06"),
    },
    {
      id: "2",
      name: "Hello world",
      SubsciptionDate: new Date("2022-10-09"),
    },
    {
      id: "3",
      name: "test3",
      SubsciptionDate: new Date("2022-11-09"),
    },
    {
      id: "4",
      name: "test4",
      SubsciptionDate: new Date("2022-12-09"),
    },
  ];
  for (const key in subList) {
    const element = subList[key];
    // console.log(element);
    let subDay = moment(element.SubsciptionDate).format("D");
    let subMonth = moment(element.SubsciptionDate).format("M");
    let subYear = moment(element.SubsciptionDate).format("yyyy");
    let currentDay = moment(Date.now()).format("D");

    let currentYear = parseInt(moment(Date.now()).format("yyyy"));
    let currentMonth = parseInt(moment(Date.now()).format("M"));
    let uptoMonth = currentMonth + 1;
    let uptoYear = currentYear;
    if (currentMonth == 12) {
      uptoMonth = 1;
      uptoYear = currentYear + 1;
    }

    if (
      subDay == currentDay &&
      currentYear == subYear &&
      subMonth < currentMonth
    ) {
      calculateMothlyMO(subDay, currentYear, currentMonth, uptoYear, uptoMonth);
    }
    if (subDay == currentDay && currentYear > subYear) {
      calculateMothlyMO(subDay, currentYear, currentMonth, uptoYear, uptoMonth);
    }
    // Testing Purpose !!! -> Calculating Billing Before the end of the month
    if (currentYear == subYear && subMonth == currentMonth) {
      console.log(
        "Testing Purpose !!! -> Calculating Billing Before the end of the month"
      );
      calculateMothlyMO(subDay, currentYear, currentMonth, uptoYear, uptoMonth);
    }
  }
}
async function calculateMothlyMO(
  subDay,
  currentYear,
  currentMonth,
  uptoYear,
  uptoMonth
) {
  console.log(
    `${currentYear}-${currentMonth}-${subDay} upto ${uptoYear}-${uptoMonth}-${subDay}`
  );
  const MOCount = await prisma.message.count({
    where: {
      createdAt: {
        gte: new Date(`${currentYear}-${currentMonth}-${subDay}`),
        lt: new Date(`${uptoYear}-${uptoMonth}-${subDay}`),
      },
    },
  });
  console.log(MOCount);
  console.log(
    `you received ${MOCount} incomming message your monthly Estimated payment ${
      MOCount * 0.5
    } Birr`
  );
}
const ONE_SECOND = 60000;
const ONE_MILI_SECOND = 1000;

// 24 HOUR REP  0- 23
// (SEC MIN HOUR DAYOFMONTH MONTH)
const SCHEDULE_HOUR = 22;
const SCHEDULE = "* * 22 * *";
// setInterval(subscriptionFilter, ONE_SECOND);

const job = schedule.scheduleJob("22 * * * *", function () {
  console.log("Schedule is executed...");
  subscriptionFilter();
  console.log(job.nextInvocation());
});
// console.log(job.nextInvocation());
subscriptionFilter();

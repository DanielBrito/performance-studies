const { performance, PerformanceObserver } = require("perf_hooks");

// ✅ PRINTING

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});

obs.observe({ entryTypes: ["measure"] });

// SETUP 🏁

let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

while (iterations--) {
  add(a, b);
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Special Benchmark", "start", "end");

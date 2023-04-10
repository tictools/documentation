# WEB CORE VITALS :: [Chrome developers](https://developer.chrome.com)

## Core Web Vitals

- **LCP**: Largest Contenful Paint :: is loading?
- **FID**: First Input Delay :: is interactive?
- **CLS**: Cumulative Layout Shift :: is layout stable?

## Tools

- **PageSpeed Insights** :: field/real data (Google)
- **Lighthouse** :: lab data (client)
- **Lighthouse - scorecalc** :: https://googlechrome.github.io/lighthouse/scorecalc/
- **webpagetest** :: film strips...

## Metrics

### TTFB: Time To First Bit

- time from first client request to first bit loaded
- ✅ <0.6 seconds
- 🧪 :: 🙋‍♂️

### FCP: First Contenful Paint

- time until first resource is loaded
- ✅ <1.8 seconds
- 🧪 :: 🙋‍♂️

### LCP: Largest Contenful Paint

- time until first biggest resource is loaded in viewport
- ✅ <2.5 seconds
- 🧪 :: 🙋‍♂️
- 💥 WEB VITAL

### SI: Speed Index

- visual content loading velocity (how much progressive is any web)
- ✅ <3.4 seconds
- 🧪
- take a look to [speedline Node module](https://github.com/paulirish/speedline)

### FID: First Input Delay

- time until first user action can be executed (interface time response )
- ✅ first interaction executed is <100 milliseconds
- 🙋‍♂️
- 💥 WEB VITAL (interactivity)

### mPID: Max Potential First Input Delay

- time until first user action can be executed taking in account main thread block time
- ✅ first interaction executed <130 milliseconds
- 🙋‍♂️

### TBT: Total Blocking Time

- amount of all JS long tasks blocking mian thread
- Long Tasks (LT) are JS scripts which take >50ms to be executed (related to CPU velocity )
- ✅ total amount of LT <200 milliseconds
- 🧪

### CLS: Cumulative Layout Shift

- number of shifts reported in page while loading (visual stability)
- ✅ first interaction executed <100ms
- 🧪
- 💥 WEB VITAL (interactivity)

## Devtools

### Performance tab

- timings (below timeline): hover LCP tag to highlight element computed as first LCP

### Network

- hover resource with MAY :: shows origin in green and donwloaded in red

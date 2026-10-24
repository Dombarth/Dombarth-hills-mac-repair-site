// Shop "products": one priced page per repair, at /product/<slug>/.
// Prices are "from" prices (Dom, 24 Oct 2026). Keep every claim true.
// Text is written for a grade 6 reading level: short sentences, plain words.

const CASES = {
  "macbook-air-2019-swollen-battery-trackpad-failure": "MacBook Air 2019: a swollen battery stopped the trackpad clicking",
  "macbook-air-m1-2020-water-damage-data-recovery": "MacBook Air M1: dead after rain, files saved in 2 days for $450",
  "macbook-air-m2-2022-screen-crack-replacement": "MacBook Air M2: cracked screen replaced for $590",
  "macbook-pro-13-2019-t2-chip-bridgeos-failure": "MacBook Pro 13\" 2019: stuck after an update, fixed for $350, files saved",
  "macbook-pro-13-2020-intel-thermal-throttling-repair": "MacBook Pro 13\" 2020: slow from heat, fixed with paste and a fan service",
  "macbook-pro-14-2021-display-cable-flexgate": "MacBook Pro 14\" 2021: dark screen fixed on the board for $350",
  "macbook-pro-15-2019-kernel-panic-gpu-repair": "MacBook Pro 15\" 2019: random restarts fixed at chip level for $550",
  "macbook-pro-16-2019-liquid-damage-usb-c-repair": "MacBook Pro 16\" 2019: water killed the USB-C ports, fixed for $580",
  "macbook-pro-16-2021-m1-max-no-charge-thunderbolt-repair": "MacBook Pro 16\" M1 Max: would not charge on any port, fixed for $550",
  "macbook-pro-m1-2020-no-power-pmic-repair": "MacBook Pro 13\" M1: completely dead, power chip replaced for $490, data kept",
  "imac-21-2013-hdd-to-ssd-upgrade": "iMac 21.5\" 2013: slow hard drive swapped for an SSD, files kept",
  "imac-27-2019-fusion-drive-failure-ssd-upgrade": "iMac 27\" 2019: failed Fusion Drive, data recovered, SSD fitted",
  "imac-27-2020-ram-upgrade-thermal-issues": "iMac 27\" 2020: 8GB to 64GB RAM and heat problems fixed",
  "imac-27-2015-backlight-failure-repair": "iMac 27\" 2015: black screen fixed without a new panel",
  "imac-21-2017-gpu-failure-logic-board-repair": "iMac 21.5\" 2017: graphics fault fixed on the board for $450",
  "imac-24-m1-2021-power-supply-failure": "iMac 24\" M1: power cuts traced to the power supply, not the board"
};
const caseList = (slugs) => slugs.map((s) => ({ slug: s, label: CASES[s] }));

const ICONS = {
  battery: '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><path d="M6 10v4"/>',
  screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="m8 8 3 4 2-2 3 4"/><path d="M8 20h8"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>',
  ssd: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  data: '<path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z"/><path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  board: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  water: '<path d="M12 2.7s-6 6.6-6 11.3a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 3 2 1 4l-3 3"/><path d="M14 12c4 0 7 1 7 4 0 2-2 3-4 1l-3-3"/><path d="M12 14c0 4-1 7-4 7-2 0-3-2-1-4l3-3"/><path d="M10 12c-4 0-7-1-7-4 0-2 2-3 4-1l3 3"/>',
  port: '<rect x="6" y="9" width="12" height="6" rx="3"/><path d="M12 2v4M12 18v4"/>',
  macos: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
  imac: '<rect x="2" y="3" width="20" height="13" rx="2"/><path d="M8 21h8M12 16v5"/>'
};

const products = [
  // ───────────────────────── 1. Battery
  {
    slug: "macbook-battery-replacement",
    oldUrl: "/services/battery-replacement/",
    name: "Battery Replacement",
    short: "Battery",
    category: "MacBook",
    icon: ICONS.battery,
    price: 129,
    title: "MacBook Battery Replacement Hills District: $129+, Same Day",
    description: "MacBook battery replacement from $129 at our Hills District workshop, much lower than Apple's out-of-warranty price. Often same day. 12-month warranty on new parts.",
    h1: "MacBook Battery Replacement in the Hills District",
    card: "Battery dies fast, says Service Recommended, or the case is bulging.",
    tldr: [
      "<strong>From $129</strong> for most MacBook Air and MacBook Pro models.",
      "Often done <strong>the same day</strong>, or within 48 hours.",
      "<strong>Much lower than Apple's</strong> out-of-warranty battery price.",
      "New batteries come with a <strong>12-month warranty</strong>.",
      "Bulging case or trackpad that won't click? <strong>Stop using it and call us.</strong> A swollen battery is a fire risk."
    ],
    turnaround: "Same day to 48 hours",
    signs: [
      "The battery runs flat much faster than it used to.",
      "Battery settings say <strong>Service Recommended</strong>.",
      "The Mac shuts down even though it shows charge left.",
      "It only works when the charger is plugged in.",
      "The trackpad is hard to click, or the bottom case is lifting. This is a swollen battery."
    ],
    includes: [
      "A health check of the battery and the charging circuit",
      "A new battery fitted and tested",
      "A full charge test before you collect it",
      "We tell you if anything else is wrong before we start"
    ],
    priceRows: [
      ["MacBook battery replacement, our workshop", "From $129"],
      ["Hands-on check if we need to open it first", "$150, free if you go ahead"]
    ],
    priceNote: "Your final price depends on your model. We confirm it before any work starts.",
    asset: {
      title: "Check your battery in one minute",
      html: `<ol class="steps-list">
<li><strong>See the health.</strong> Apple menu &gt; System Settings &gt; Battery. Click the <strong>i</strong> next to Battery Health. It says <em>Normal</em> or <em>Service Recommended</em>.</li>
<li><strong>See the cycle count.</strong> Hold the Option key and click the Apple menu. Choose System Information &gt; Power. Look for <em>Cycle Count</em>.</li>
<li><strong>Compare it.</strong> Apple rates most MacBooks for <strong>1,000 cycles</strong>. One cycle is using 100% of the charge, even if it is spread over a few days.</li>
</ol>
<table class="data-table"><thead><tr><th>What you see</th><th>What it means</th><th>What to do</th></tr></thead><tbody>
<tr><td>Normal, under 1,000 cycles</td><td>The battery is fine.</td><td>Nothing yet.</td></tr>
<tr><td>Service Recommended</td><td>It holds a lot less charge than new.</td><td>Replace it soon.</td></tr>
<tr><td>Near or over 1,000 cycles</td><td>It is near the end of its rated life.</td><td>Plan a replacement.</td></tr>
<tr><td>Case bulging, trackpad stiff</td><td>The battery has swollen.</td><td><strong>Stop using it. Call us today.</strong></td></tr>
</tbody></table>
<p class="source">Source: <a href="https://support.apple.com/en-au/102888" rel="nofollow noopener" target="_blank">Apple: battery cycle count for Mac laptops</a>.</p>`
    },
    models: ["MacBook Air 13\" and 15\", all years", "MacBook Pro 13\", all years", "MacBook Pro 14\" and 16\"", "MacBook Pro 15\" (2012 to 2019)", "MacBook 12\""],
    faqs: [
      ["How much does it cost to replace a MacBook battery?", "From $129 at our workshop, much lower than Apple's out-of-warranty price. We confirm your exact price before we start."],
      ["Is it worth replacing the battery on a MacBook?", "Usually yes, if the rest of the Mac works. A battery costs far less than a new Mac. If we find another fault that makes it not worth it, we tell you before you pay for anything."],
      ["Is it worth repairing a 7-year-old MacBook?", "It depends on what you use it for. If it still runs the apps you need, a new battery can give it years more. If it can no longer get macOS security updates, we will tell you, so you can decide."],
      ["How long does a MacBook battery last?", "Apple rates most MacBooks for 1,000 charge cycles. For most people that is about 3 to 5 years."],
      ["Can I replace a MacBook battery myself?", "Most MacBook batteries are glued in. Prying them out can puncture a cell, which can catch fire. We have the tools and solvent to remove them safely."]
    ],
    cases: caseList(["macbook-air-2019-swollen-battery-trackpad-failure"]),
    related: ["macbook-charging-port-repair", "macbook-logic-board-repair", "macbook-fan-cleaning"]
  },

  // ───────────────────────── 2. Screen
  {
    slug: "macbook-screen-repair",
    oldUrl: "/services/screen-display-repair/",
    name: "Screen Repair",
    short: "Screen",
    category: "MacBook",
    icon: ICONS.screen,
    price: 149,
    title: "MacBook Screen Repair Hills District: From $149, Air & Pro",
    description: "MacBook screen repair from $149 in the Hills District. Cracked, lines, dark or flickering screens on MacBook Air and Pro. Check the cause with our fault finder.",
    h1: "MacBook Screen Repair in the Hills District",
    card: "Cracked, lines, dark, flickering or no picture.",
    tldr: [
      "<strong>From $149.</strong> The price depends on your model and the fault.",
      "We fix cracked, dark, flickering and lined screens on MacBook Air and MacBook Pro.",
      "A dark screen is not always a broken screen. Use the <a href=\"#fault-finder\">fault finder</a> below.",
      "Most screens are done in <strong>24 to 72 hours</strong> once the part is here.",
      "New parts come with a <strong>12-month warranty</strong>."
    ],
    turnaround: "24 to 72 hours once the part is here",
    signs: [
      "Cracked glass, or black ink-like blots.",
      "Lines, or the wrong colours.",
      "A very dark screen, with the picture faint under a torch.",
      "Flickering, or the picture goes when you move the lid.",
      "A black screen, even though the Mac seems to be on."
    ],
    includes: [
      "A test with an external display to find the real cause",
      "The right part for your exact model",
      "Fitting, then a test of brightness, colour, camera and lid sensor",
      "We check the hinge cable, so the new screen does not fail the same way"
    ],
    priceRows: [
      ["MacBook screen repair, our workshop", "From $149"],
      ["Real job: MacBook Air M2, cracked screen", "$590"],
      ["Hands-on check if the cause is unclear", "$150, free if you go ahead"]
    ],
    priceNote: "Real job prices are what those customers paid at our workshop. We confirm your exact price before any work starts.",
    asset: {
      id: "fault-finder",
      title: "Screen fault finder",
      html: `<p>Plug your Mac into a TV or monitor first. If the picture shows there, the Mac itself is working.</p>
<table class="data-table"><thead><tr><th>What you see</th><th>Likely cause</th><th>Usual fix</th></tr></thead><tbody>
<tr><td>Cracked glass or black blots</td><td>Broken panel</td><td>New display</td></tr>
<tr><td>Lines or wrong colours</td><td>Panel or display cable</td><td>New display or cable, after testing</td></tr>
<tr><td>Very dark, but a faint picture under a torch</td><td>Backlight fault: a fuse, chip or cable</td><td>Often a board or cable fix, cheaper than a new screen</td></tr>
<tr><td>Uneven light at the bottom edge (MacBook Pro 2016 to 2017)</td><td>Worn display cable, known as <a href="/macbook-glossary/flexgate/">flexgate</a></td><td>Cable or display</td></tr>
<tr><td>Picture cuts out when you move the lid</td><td>Cable in the hinge</td><td>Cable or display</td></tr>
<tr><td>Black screen, external monitor works</td><td>Screen or its cable</td><td>New display or cable</td></tr>
<tr><td>Black screen, external monitor is black too</td><td>Main board or power fault</td><td><a href="/product/macbook-logic-board-repair/">Logic board repair</a></td></tr>
<tr><td>Stains or lines after a spill</td><td>Liquid inside the display or on its cable</td><td><a href="/product/macbook-water-damage-repair/">Water damage repair</a></td></tr>
</tbody></table>`
    },
    models: ["MacBook Air 13\" and 15\"", "MacBook Pro 13\", 14\", 15\" and 16\"", "MacBook 12\"", "iMac 21.5\", 24\" and 27\""],
    faqs: [
      ["How much does it cost to repair a MacBook screen?", "From $149 at our workshop. The final price depends on the model and whether the fault is the panel, the cable or the backlight."],
      ["Is it worth fixing a broken Mac screen?", "If the rest of the Mac works, usually yes. A screen costs far less than a new MacBook. We check the Mac first, so you are not paying for a screen on a Mac with another fault."],
      ["Can you fix just the glass?", "On most MacBooks, no. The glass, panel and backlight are one sealed part, so we replace the whole display. On some faults, like a dark screen, we can fix the backlight instead."],
      ["My screen is dark but I can see a faint picture. Is it broken?", "Probably not the panel. A faint picture under a torch means the backlight has failed. That is often a fuse, a chip or a cable, and it can cost less than a new screen."],
      ["How long does a MacBook screen repair take?", "Usually 24 to 72 hours once the part is here. We tell you the timing when you call."]
    ],
    cases: caseList(["macbook-air-m2-2022-screen-crack-replacement", "macbook-pro-14-2021-display-cable-flexgate", "imac-27-2015-backlight-failure-repair"]),
    related: ["macbook-logic-board-repair", "macbook-water-damage-repair", "macbook-keyboard-trackpad-repair"]
  },

  // ───────────────────────── 3. Keyboard & trackpad
  {
    slug: "macbook-keyboard-trackpad-repair",
    oldUrl: "/services/keyboard-trackpad-repair/",
    name: "Keyboard & Trackpad Repair",
    short: "Keyboard",
    category: "MacBook",
    icon: ICONS.keyboard,
    price: 129,
    title: "MacBook Keyboard & Trackpad Repair Hills District: From $129",
    description: "MacBook keyboard and trackpad repair from $129 in the Hills District. Sticky, dead or double-typing keys, butterfly keyboards, trackpads that won't click.",
    h1: "MacBook Keyboard and Trackpad Repair in the Hills District",
    card: "Sticky, dead or double keys. Trackpad won't click.",
    tldr: [
      "<strong>From $129.</strong> One key costs less than a full keyboard.",
      "We fix sticky, dead and double-typing keys, and trackpads that won't click.",
      "Trackpad stiff and the case lifting? That is a <strong>swollen battery</strong>. Stop using it and call us.",
      "Butterfly keyboards (2015 to 2019) are a common fix. See the table below.",
      "Most jobs take <strong>24 to 72 hours</strong>. New parts have a 12-month warranty."
    ],
    turnaround: "24 to 72 hours",
    signs: [
      "Keys stick, or need a hard press.",
      "Keys type twice, or not at all.",
      "Many keys stopped working after a spill.",
      "The trackpad won't click, or the cursor jumps.",
      "The keyboard light has stopped working."
    ],
    includes: [
      "A test of every key and the trackpad",
      "Cleaning, a new key, or a new keyboard, depending on the fault",
      "A check of the battery under the trackpad",
      "A full test before you collect it"
    ],
    priceRows: [
      ["Keyboard or trackpad repair, our workshop", "From $129"],
      ["Full keyboard on models where it is riveted in", "Quoted after inspection"],
      ["Hands-on check if the cause is unclear", "$150, free if you go ahead"]
    ],
    priceNote: "We confirm your exact price before any work starts.",
    asset: {
      title: "Is it the keys, the trackpad, or something else?",
      html: `<table class="data-table"><thead><tr><th>What you see</th><th>Likely cause</th><th>Usual fix</th></tr></thead><tbody>
<tr><td>One or two keys stick</td><td>Crumbs, dust or a worn key</td><td>Clean or replace the key</td></tr>
<tr><td>Keys type twice or miss (butterfly models)</td><td>Worn butterfly switches</td><td>New keyboard</td></tr>
<tr><td>Lots of keys dead after a spill</td><td>Liquid in the keyboard or on the board</td><td><a href="/product/macbook-water-damage-repair/">Water damage repair</a></td></tr>
<tr><td>Trackpad stiff, case lifting</td><td>Swollen battery pushing up</td><td><a href="/product/macbook-battery-replacement/">Battery replacement</a>, urgent</td></tr>
<tr><td>Cursor jumps or drifts</td><td>Trackpad, cable or swollen battery</td><td>Test, then fix the cause</td></tr>
<tr><td>Keys work on an external keyboard only</td><td>The built-in keyboard or its cable</td><td>Keyboard or cable</td></tr>
</tbody></table>
<h3>Which MacBooks have butterfly keyboards?</h3>
<ul>
<li>MacBook 12" (2015 to 2017)</li>
<li>MacBook Air (2018 and 2019)</li>
<li>MacBook Pro 13" and 15" (2016 to 2019). The 16" from 2019 has the newer keyboard.</li>
</ul>
<p>On most MacBooks since 2016 the keyboard is riveted into the top case. That is why a full keyboard costs more than a key.</p>`
    },
    models: ["MacBook Air, all years", "MacBook Pro 13\", 14\", 15\" and 16\"", "MacBook 12\""],
    faqs: [
      ["How much does it cost to repair a MacBook keyboard?", "From $129. One key or a clean costs less. A full keyboard on a model where it is riveted in costs more, and we quote it after we look."],
      ["Why is a full MacBook keyboard replacement expensive?", "On most MacBooks since 2016 the keyboard is riveted into the top case with the battery and trackpad. Swapping it means taking the whole Mac apart."],
      ["Can you fix a keyboard after a spill?", "Often, yes. But liquid can also reach the main board. We check the board too, so the fault does not come back. See our <a href=\"/product/macbook-water-damage-repair/\">water damage repair</a>."],
      ["Do you fix butterfly keyboards?", "Yes. We fix butterfly keyboards on the MacBook 12\", MacBook Air 2018 to 2019 and MacBook Pro 2016 to 2019."],
      ["My trackpad won't click. Is it broken?", "Check the bottom case first. If it is lifting, the battery may be swollen and pushing the trackpad up. Stop using the Mac and bring it in."]
    ],
    cases: caseList(["macbook-air-2019-swollen-battery-trackpad-failure"]),
    related: ["macbook-battery-replacement", "macbook-water-damage-repair", "macbook-screen-repair"]
  },

  // ───────────────────────── 4. SSD
  {
    slug: "macbook-ssd-upgrade",
    oldUrl: "/services/ssd-upgrade-replacement/",
    name: "SSD Upgrade",
    short: "SSD Upgrade",
    category: "MacBook",
    icon: ICONS.ssd,
    price: 129,
    title: "MacBook SSD Upgrade Hills District: From $129, Files Moved",
    description: "MacBook SSD upgrade from $129 in the Hills District, with your files copied across. Check if your model can be upgraded. Often same day.",
    h1: "MacBook SSD Upgrade in the Hills District",
    card: "More space and a faster Mac. Your files copied across.",
    tldr: [
      "<strong>From $129</strong> for MacBooks with a removable SSD.",
      "We <strong>copy your files</strong> to the new drive, so your Mac looks the same, just with more space.",
      "Often done <strong>the same day</strong>.",
      "<strong>Most MacBooks from 2016, and all M1 and newer, can't be upgraded inside.</strong> Check your model in the table below.",
      "Can't upgrade? We can set up a fast external SSD instead."
    ],
    turnaround: "Often the same day",
    signs: [
      "\"Your disk is almost full\" warnings.",
      "Slow start-up and a spinning beach ball.",
      "Apps freeze, or files go missing or corrupt.",
      "You need room for photos, video or work files."
    ],
    includes: [
      "A health check of the old drive",
      "A new SSD that suits your model",
      "Your files, apps and settings copied across, when the old drive can be read",
      "macOS checked and updated, and a full test"
    ],
    priceRows: [
      ["MacBook SSD upgrade, our workshop", "From $129"],
      ["iMac SSD upgrades", "From $149, see <a href=\"/imac-upgrades/\">iMac upgrades</a>"],
      ["Hands-on check if the drive is failing", "$150, free if you go ahead"]
    ],
    priceNote: "The final price depends on the size of drive you choose. We confirm it before any work starts.",
    asset: {
      title: "Can my MacBook's SSD be upgraded?",
      html: `<p>Find your model: Apple menu &gt; About This Mac.</p>
<table class="data-table"><thead><tr><th>Model</th><th>Upgrade inside?</th><th>Why</th></tr></thead><tbody>
<tr><td>MacBook Air 2013 to 2017</td><td class="yes">Yes</td><td>The SSD is a removable card.</td></tr>
<tr><td>MacBook Pro Retina 2013 to 2015</td><td class="yes">Yes</td><td>The SSD is a removable card.</td></tr>
<tr><td>MacBook Pro 13" 2016 to 2017, two ports, no Touch Bar</td><td class="yes">Yes</td><td>The SSD is a removable card.</td></tr>
<tr><td>MacBook Pro 2016 to 2017 with Touch Bar</td><td class="no">No</td><td>Storage is soldered to the board.</td></tr>
<tr><td>MacBook Air 2018 to 2020 and MacBook Pro 2018 to 2020 (Intel)</td><td class="no">No</td><td>Storage is soldered and locked to the T2 chip.</td></tr>
<tr><td>Any MacBook with M1 or newer</td><td class="no">No</td><td>Storage is soldered and locked to the chip.</td></tr>
</tbody></table>
<p>If yours says No, we can set up an external SSD that stays plugged in, and move big files like photos to it.</p>`
    },
    models: ["MacBook Air 2013 to 2017", "MacBook Pro Retina 2013 to 2015", "MacBook Pro 13\" 2016 to 2017 (two ports)", "iMac: see iMac upgrades"],
    faqs: [
      ["Can I increase the SSD in my MacBook?", "Only on some models. MacBook Air 2013 to 2017, MacBook Pro 2013 to 2015, and the 2016 to 2017 MacBook Pro 13\" with two ports have a removable SSD. Newer ones have soldered storage."],
      ["How much does a MacBook SSD upgrade cost?", "From $129 at our workshop. The price depends on the size of drive you choose."],
      ["Is the MacBook Pro SSD upgradeable?", "MacBook Pro 2013 to 2015, and the two-port 13\" from 2016 to 2017, yes. Models with a Touch Bar, Intel models from 2018, and all M1 and newer, no."],
      ["Will I lose my data?", "No, if the old drive still works. We copy your files, apps and settings to the new drive. If the old drive is failing, we try to <a href=\"/product/macbook-data-recovery/\">recover the files</a> first."],
      ["Can you upgrade an M1, M2 or M3 MacBook?", "Not inside. The storage is soldered to the board. We can set up a fast external SSD for you."]
    ],
    cases: caseList(["imac-21-2013-hdd-to-ssd-upgrade", "imac-27-2019-fusion-drive-failure-ssd-upgrade"]),
    related: ["macbook-data-recovery", "macos-reinstall", "macbook-fan-cleaning"]
  },

  // ───────────────────────── 5. Data recovery
  {
    slug: "macbook-data-recovery",
    oldUrl: "/services/data-recovery/",
    name: "Data Recovery",
    short: "Data Recovery",
    category: "Data",
    icon: ICONS.data,
    price: 199,
    title: "MacBook Data Recovery Sydney: Hills District, From $199",
    description: "MacBook and iMac data recovery from $199 at our Hills District workshop. Dead, wet or won't-boot Macs. Why 2018+ and M-series Macs need the board working first.",
    h1: "MacBook Data Recovery in Sydney's Hills District",
    card: "Mac dead, wet or won't start, and you need your files.",
    tldr: [
      "<strong>From $199.</strong> For Macs that are dead, wet, dropped or won't start.",
      "<strong>On 2018+ and M1-and-newer Macs, your files are locked to the main board.</strong> The board has to work again to get them out.",
      "So <strong>don't let anyone swap the board first.</strong> A new board means your files are gone for good.",
      "Stop using the Mac now. Don't run recovery apps on a failing drive.",
      "Most jobs take <strong>1 to 3 days</strong>."
    ],
    turnaround: "1 to 3 days for most jobs",
    signs: [
      "The Mac won't start, or starts to a folder with a question mark.",
      "It was dropped, wet or has died.",
      "Files have gone missing, or the drive was erased by mistake.",
      "An iMac Fusion Drive has failed."
    ],
    includes: [
      "A check of the drive, or of the board on newer Macs",
      "A safe copy of the drive first, so we work on the copy",
      "Board repair if that is what it takes to reach the files",
      "Your files copied to an external drive"
    ],
    priceRows: [
      ["Data recovery, our workshop", "From $199"],
      ["Board repair needed to reach the files", "<a href=\"/product/macbook-logic-board-repair/\">From $249</a>"],
      ["Hands-on check", "$150, free if you go ahead"]
    ],
    priceNote: "We tell you what is possible and what it costs before we start.",
    asset: {
      title: "Where your files live, and how we get them out",
      html: `<table class="data-table"><thead><tr><th>Your Mac</th><th>Where the files are</th><th>How we recover them</th></tr></thead><tbody>
<tr><td>MacBook Air 2013 to 2017, MacBook Pro 2013 to 2015, most iMacs to 2019</td><td>A removable drive</td><td>We take the drive out and read it in another machine.</td></tr>
<tr><td>MacBook Air and Pro with a T2 chip (2018 to 2020)</td><td>Chips soldered to the board, encrypted by the T2 chip</td><td>The board must work. We fix it enough to start, then copy the files.</td></tr>
<tr><td>Any Mac with M1 or newer</td><td>Chips soldered to the board, encrypted by the M chip</td><td>Same: we repair the board enough to start, then copy the files.</td></tr>
<tr><td>iMac with a Fusion Drive</td><td>A hard drive and a small SSD that work as one</td><td>We need both parts to read the files.</td></tr>
</tbody></table>
<p>Why the board matters: on Macs with Apple silicon or a T2 chip, the storage is always encrypted, and the key is held by the chip on that board. Swap the board and the old files can't be read. <a class="source" href="https://support.apple.com/en-au/guide/security/sec4c6dc1b6e/web" rel="nofollow noopener" target="_blank">Source: Apple Platform Security</a>.</p>
<h3>What to do now</h3>
<ul>
<li>Stop using the Mac. Every start-up of a failing drive can make it worse.</li>
<li>Don't install recovery apps on the same drive.</li>
<li>Know your Mac login password. With FileVault on, we need it to unlock the files.</li>
<li>Don't agree to a new main board until you have your files.</li>
</ul>`
    },
    models: ["MacBook Air and MacBook Pro, all years", "iMac, including Fusion Drive models", "Mac mini"],
    faqs: [
      ["Can files be recovered from a dead Mac?", "Often, yes. On older Macs we read the removable drive. On 2018+ and M1-and-newer Macs we repair the board enough for it to start, then copy the files."],
      ["I erased my Mac's drive by mistake. Can you get the files back?", "Sometimes, but SSDs clear deleted data quickly, so the chances are lower than with old hard drives. Stop using the Mac straight away and call us."],
      ["How do I get files off a Mac with a broken screen?", "If the Mac still runs, we can use an external display or connect it to another Mac and copy the files. A broken screen does not mean lost files."],
      ["Does Apple recover data?", "Apple fixes hardware. It may replace the board or storage, and that erases your files on newer Macs. Get your files out first."],
      ["How much does data recovery cost?", "From $199. If the board needs repair to reach your files, board repair starts from $249. We give you the price before we start."]
    ],
    cases: caseList(["macbook-air-m1-2020-water-damage-data-recovery", "macbook-pro-13-2019-t2-chip-bridgeos-failure", "imac-27-2019-fusion-drive-failure-ssd-upgrade"]),
    related: ["macbook-water-damage-repair", "macbook-logic-board-repair", "macbook-ssd-upgrade"]
  },

  // ───────────────────────── 6. Logic board
  {
    slug: "macbook-logic-board-repair",
    oldUrl: "/services/logic-board-repair/",
    name: "Logic Board Repair",
    short: "Logic Board",
    category: "MacBook",
    icon: ICONS.board,
    price: 249,
    title: "MacBook Logic Board Repair Sydney: Chip-Level Fix From $249",
    description: "MacBook logic board repair from $249 in Sydney's Hills District. We fix the failed chip, not swap the board, so your files stay. Won't turn on, won't charge, no picture.",
    h1: "MacBook Logic Board Repair in Sydney's Hills District",
    card: "Won't turn on, won't charge, no picture. Fixed at chip level.",
    tldr: [
      "<strong>From $249.</strong> We fix the failed part on the board. We don't swap the whole board.",
      "Real jobs: a dead MacBook Pro 13\" M1 fixed for <strong>$490</strong>, and dead USB-C ports on a MacBook Pro 16\" fixed for <strong>$580</strong>. Much lower than a new board from Apple.",
      "On 2018+ and M1-and-newer Macs, <strong>a new board erases your files. A repair keeps them.</strong>",
      "We fix Macs that won't turn on, won't charge, have dead ports or no picture.",
      "Most jobs take <strong>2 to 7 days</strong>."
    ],
    turnaround: "2 to 7 days",
    signs: [
      "No power at all, or no charging.",
      "USB-C ports dead or cutting out.",
      "No picture, or no backlight.",
      "Random restarts or crashes.",
      "It died after a spill."
    ],
    includes: [
      "Inspection under a microscope",
      "Power readings to find the shorted or dead part",
      "Circuit diagrams and board maps to trace the fault",
      "The failed chip or part replaced, then a full test"
    ],
    priceRows: [
      ["Logic board repair, our workshop", "From $249"],
      ["Real job: MacBook Pro 13\" M1, completely dead", "$490"],
      ["Real job: MacBook Pro 16\" M1 Max, won't charge", "$550"],
      ["Real job: MacBook Pro 16\" 2019, dead USB-C ports", "$580"],
      ["Hands-on check", "$150, free if you go ahead"]
    ],
    priceNote: "Real job prices are what those customers paid at our workshop. Your price depends on the fault. We confirm it before any work starts.",
    asset: {
      title: "Common board faults we fix",
      html: `<table class="data-table"><thead><tr><th>What the Mac does</th><th>Usual cause on the board</th><th>Real job</th></tr></thead><tbody>
<tr><td>Won't charge, ports dead (Intel 2016 to 2020)</td><td>USB-C controller chips, or the charging chip</td><td><a href="/repair-case-studies/macbook-pro-16-2019-liquid-damage-usb-c-repair/">MacBook Pro 16" 2019</a></td></tr>
<tr><td>Won't charge on any port (M-series)</td><td>Thunderbolt or power parts</td><td><a href="/repair-case-studies/macbook-pro-16-2021-m1-max-no-charge-thunderbolt-repair/">MacBook Pro 16" M1 Max</a></td></tr>
<tr><td>Completely dead</td><td>Power management chip</td><td><a href="/repair-case-studies/macbook-pro-m1-2020-no-power-pmic-repair/">MacBook Pro 13" M1</a></td></tr>
<tr><td>Dead after a spill</td><td>Corroded power parts</td><td><a href="/repair-case-studies/macbook-air-m1-2020-water-damage-data-recovery/">MacBook Air M1</a></td></tr>
<tr><td>Random restarts and crashes</td><td>Graphics power fault</td><td><a href="/repair-case-studies/macbook-pro-15-2019-kernel-panic-gpu-repair/">MacBook Pro 15" 2019</a></td></tr>
<tr><td>Stuck after an update</td><td>T2 chip firmware</td><td><a href="/repair-case-studies/macbook-pro-13-2019-t2-chip-bridgeos-failure/">MacBook Pro 13" 2019</a></td></tr>
<tr><td>Dark screen, faint picture</td><td>Backlight fuse or chip</td><td><a href="/repair-case-studies/macbook-pro-14-2021-display-cable-flexgate/">MacBook Pro 14" 2021</a></td></tr>
</tbody></table>`
    },
    models: ["MacBook Air, all years", "MacBook Pro, all years", "iMac", "Mac mini"],
    faqs: [
      ["How much does it cost to repair a MacBook logic board?", "From $249 at our workshop. Real jobs: $490 for a dead MacBook Pro 13\" M1 and $580 for dead USB-C ports on a MacBook Pro 16\" 2019. That is much lower than a new board from Apple."],
      ["Can a MacBook logic board be repaired?", "Often, yes. Most dead boards have one or a few failed parts, like a power chip or a port controller. We find the failed part and replace it."],
      ["Will I lose my files?", "Not with a repair. With a new board, yes, on 2018+ and M1-and-newer Macs, because the storage is locked to the original board."],
      ["Is it worth repairing an old MacBook's board?", "We tell you after we test it. If the repair costs more than the Mac is worth, we say so, and we can still try to save your files."],
      ["How long does a logic board repair take?", "Usually 2 to 7 days, depending on the fault and parts."]
    ],
    cases: caseList(["macbook-pro-m1-2020-no-power-pmic-repair", "macbook-pro-16-2019-liquid-damage-usb-c-repair", "macbook-pro-15-2019-kernel-panic-gpu-repair", "imac-21-2017-gpu-failure-logic-board-repair"]),
    related: ["macbook-water-damage-repair", "macbook-charging-port-repair", "macbook-data-recovery"]
  },

  // ───────────────────────── 7. Water damage (custom page: product-water-damage.njk)
  {
    slug: "macbook-water-damage-repair",
    oldUrl: "/macbook-liquid-damage/",
    custom: true,
    name: "Water Damage Repair",
    short: "Water Damage",
    category: "MacBook",
    icon: ICONS.water,
    price: 150,
    title: "MacBook Water Damage Repair Sydney: Spill Clean From $150",
    description: "Spilled on your MacBook? Turn it off and call 02 4509 9248. Water damage repair from $150 at our Hills District workshop. Ultrasonic clean, chip-level repair, files saved.",
    h1: "MacBook Water Damage Repair in Sydney's Hills District",
    card: "Spilled water, coffee or wine? Turn it off and call now.",
    turnaround: "2 to 7 days for most jobs",
    tldr: [
      "<strong>Spilled just now?</strong> Hold the power button for 10 seconds. Unplug it. Don't turn it back on, and don't charge it.",
      "<strong>Call 02 4509 9248</strong> and bring it in as soon as you can. Liquid keeps eating the board until it is cleaned out.",
      "<strong>Spill clean from $150.</strong> Chip-level repair from $249. The $150 inspection comes off the repair if you go ahead.",
      "We <strong>repair the board, not swap it</strong>, so your files stay. A new board wipes the files on 2018+ and M1-and-newer Macs.",
      "Apple's warranty doesn't cover liquid. Need an <strong>insurance report</strong>? $149."
    ],
    priceRows: [
      ["Inspection: we open it, check it and quote", "$150, comes off the repair if you go ahead"],
      ["Ultrasonic clean and dry, no parts needed", "From $150"],
      ["Chip-level board repair after a spill", "From $249"],
      ["Keyboard or trackpad after a spill", "From $129"],
      ["Screen after a spill", "From $149"],
      ["Files only, from a dead or wet Mac", "From $199"],
      ["Insurance report for your claim", "$149"],
      ["Real job: MacBook Air M1, dead after rain, files saved", "$450"],
      ["Real job: MacBook Pro 16\" 2019, dead USB-C ports", "$580"]
    ],
    faqs: [
      ["Can a MacBook be repaired after water damage?", "Often, yes. The best chances come when it was turned off fast and brought in within a day or two, before corrosion spreads. After the inspection we tell you if it can be fixed and what it will cost."],
      ["How much does it cost to fix MacBook water damage?", "A spill clean starts from $150 and chip-level board repair from $249. The $150 inspection comes off the repair if you go ahead. Real jobs: $450 to save a student's files from a dead MacBook Air M1, and $580 to fix dead USB-C ports on a MacBook Pro 16\". Much lower than a new board from Apple."],
      ["Can a MacBook survive water damage?", "Yes, if the power is cut quickly and the board is cleaned before corrosion takes hold. A Mac that still works after a spill can still fail weeks later, so have it cleaned."],
      ["What do I do if my Mac has water damage?", "Hold the power button for 10 seconds to turn it off. Unplug the charger and everything else. Wipe the outside. Stand it upside down like a tent, keyboard facing down. Don't turn it on or charge it. Then call 02 4509 9248."],
      ["How long does MacBook water damage repair take?", "Most jobs take 2 to 7 days. A clean with no parts can be quicker. On one real job we had a student's files back in 2 days."],
      ["I spilled water on my MacBook but it still works. What now?", "Back up your files today, then bring it in for a clean. Liquid left inside keeps corroding the board. On one real job the owner waited three weeks, and the corrosion spread from the ports on one side to the other side."],
      ["Does putting a MacBook in rice work?", "No. Rice can't reach inside the Mac, it does not stop corrosion, and its dust can get in. Apple says not to put a wet iPhone in rice for the same reason."],
      ["Does AppleCare+ cover water damage?", "Yes. AppleCare+ covers liquid as accidental damage, for a service fee, so check with Apple if you have it. If you have no backup, talk to us first. Apple usually fits a new board, and on 2018+ and M1-and-newer Macs that wipes your files. We can get the files out before it goes to Apple."],
      ["Does home insurance cover a spilled drink on a laptop?", "Only if your policy includes accidental damage cover, which is often an optional extra. Outside the home you usually need portable items cover. Check your policy. Your insurer will want a written report from a repairer. Ours costs $149."],
      ["Will I lose my files after water damage?", "Not if the board is repaired. On 2018+ and M1-and-newer Macs, the files are locked to the original board, so a new board means the old files can't be read. Don't agree to a board swap until your files are safe."],
      ["How does Apple know it was liquid damage?", "Mac laptops have liquid contact indicators inside that change colour when they get wet. Corrosion is also easy to see under a microscope."],
      ["How long should I wait before I turn my MacBook back on?", "Don't wait and try. Drying the outside does not dry the board, and liquid stays trapped under the chips. Turning it on can short the parts that are still fine."],
      ["Is it worth repairing an old MacBook after a spill?", "It depends on what failed and what the Mac is worth. We tell you after the inspection. If it is not worth it, we can still try to save your files and move them to your new Mac."],
      ["Can water damage on a MacBook screen be fixed?", "If liquid got inside the screen, you may see stains or lines, and the display usually needs replacing (from $149). Often the real fault is the backlight circuit on the board, which costs less to fix."]
    ],
    cases: caseList(["macbook-air-m1-2020-water-damage-data-recovery", "macbook-pro-16-2019-liquid-damage-usb-c-repair"]),
    related: ["macbook-data-recovery", "macbook-logic-board-repair", "macbook-keyboard-trackpad-repair"]
  },

  // ───────────────────────── 8. Fans / overheating
  {
    slug: "macbook-fan-cleaning",
    oldUrl: "/services/fan-thermal-service/",
    name: "Overheating & Fan Clean",
    short: "Overheating",
    category: "MacBook",
    icon: ICONS.fan,
    price: 119,
    title: "MacBook Overheating Fix Hills District: Fan Clean From $119",
    description: "MacBook running hot or loud? Fan clean and new thermal paste from $119 in the Hills District. Often same day. Find the cause with our heat check table.",
    h1: "MacBook Overheating and Fan Noise Fix in the Hills District",
    card: "Hot, loud or slowing down from heat.",
    tldr: [
      "<strong>From $119:</strong> dust clean, new thermal paste and a fan check.",
      "Fixes loud fans, a hot case and slow-downs caused by heat.",
      "Often done <strong>the same day</strong>.",
      "<strong>MacBook Air M1 and newer has no fan.</strong> If it runs hot, the cause is something else. We check it.",
      "A loud fan during video or games can be normal. See the table below."
    ],
    turnaround: "Often the same day",
    signs: [
      "The fan is loud even with light use.",
      "The case or keyboard gets very hot.",
      "The Mac slows down when it warms up.",
      "Grinding or rattling noise from inside.",
      "It shuts down by itself when hot."
    ],
    includes: [
      "Dust cleaned from the fan and heat sink",
      "Old thermal paste removed and new paste applied",
      "Fan speed and temperature sensors tested",
      "A load test before you collect it"
    ],
    priceRows: [
      ["Fan clean and thermal paste, our workshop", "From $119"],
      ["New fan if the old one is worn", "Quoted after we test it"],
      ["Hands-on check if the cause is unclear", "$150, free if you go ahead"]
    ],
    priceNote: "We confirm your exact price before any work starts.",
    asset: {
      title: "Why is my Mac hot or loud?",
      html: `<p>Quick check first: open Activity Monitor and click the CPU tab. If one app is near the top using a lot of CPU, that app is making the heat.</p>
<table class="data-table"><thead><tr><th>What you notice</th><th>Likely cause</th><th>Fix</th></tr></thead><tbody>
<tr><td>Loud fan all the time, Mac feels slow</td><td>Dust, or dried thermal paste</td><td>Clean and new paste</td></tr>
<tr><td>Loud only during video, games or exports</td><td>Normal under heavy work</td><td>Nothing to fix</td></tr>
<tr><td>Grinding or rattling</td><td>Worn fan bearing</td><td>New fan</td></tr>
<tr><td>Hot, but the fan never spins</td><td>Dead fan or sensor</td><td>Test, then a new fan or sensor</td></tr>
<tr><td>MacBook Air M1 or newer is hot</td><td>No fan. Usually an app, charging or a board fault</td><td>We check it</td></tr>
<tr><td>Hot after a spill</td><td>Liquid on the board</td><td><a href="/product/macbook-water-damage-repair/">Water damage repair</a></td></tr>
</tbody></table>`
    },
    models: ["MacBook Pro, all years", "MacBook Air (Intel, to 2020)", "iMac", "Mac mini"],
    faqs: [
      ["Why is my MacBook fan so loud?", "Most often dust has packed onto the heat sink, so the fan works harder. Old thermal paste does the same. Heavy apps can also make it loud for a short time, which is normal."],
      ["Can I clean the fans without opening the Mac?", "Not properly. Blowing into the vents moves a little dust, but the dust packed on the heat sink needs the bottom case off."],
      ["How often should thermal paste be replaced?", "There is no set time. If an older Mac runs hot or slows down under load, new paste usually helps."],
      ["Can overheating damage my Mac?", "Yes. Running hot for a long time is hard on the battery and the board. Fix the cause early."],
      ["My MacBook Air gets hot but has no fan. What now?", "MacBook Air M1 and newer cools without a fan, so a clean does not apply. We check for a busy app, a charging fault or a board fault."]
    ],
    cases: caseList(["macbook-pro-13-2020-intel-thermal-throttling-repair", "imac-27-2020-ram-upgrade-thermal-issues"]),
    related: ["macbook-battery-replacement", "macbook-ssd-upgrade", "macos-reinstall"]
  },

  // ───────────────────────── 9. Charging port
  {
    slug: "macbook-charging-port-repair",
    oldUrl: "/services/usb-c-port-repair/",
    name: "Charging Port Repair",
    short: "Charging Port",
    category: "MacBook",
    icon: ICONS.port,
    price: 129,
    title: "MacBook Charging Port Repair Hills District: USB-C From $129",
    description: "MacBook not charging? USB-C and MagSafe charging port repair from $129 in the Hills District. Try our 5-step check first. Most jobs 24 to 48 hours.",
    h1: "MacBook Charging Port Repair in the Hills District",
    card: "Not charging, loose plug, or ports that cut out.",
    tldr: [
      "<strong>From $129.</strong> USB-C and MagSafe ports.",
      "For a MacBook that won't charge, a loose plug, or ports that drop out.",
      "Often the fault is <strong>the chip behind the port</strong>, not the port. We test before we replace anything.",
      "Try the <a href=\"#not-charging\">5-step check</a> below first. It might save you a trip.",
      "Most jobs take <strong>24 to 48 hours</strong>."
    ],
    turnaround: "24 to 48 hours",
    signs: [
      "No charging on one port, or on all of them.",
      "The plug feels loose or falls out.",
      "Devices disconnect when you move the cable.",
      "A burnt smell or a dark mark in the port."
    ],
    includes: [
      "A test of every port with a known good charger",
      "A look inside the port under a microscope",
      "Power readings to find the failed part",
      "Port, chip or board repair, then a charge test"
    ],
    priceRows: [
      ["Charging port repair, our workshop", "From $129"],
      ["Chip on the board behind the port", "<a href=\"/product/macbook-logic-board-repair/\">From $249</a>"],
      ["Hands-on check", "$150, free if you go ahead"]
    ],
    priceNote: "We confirm your exact price before any work starts.",
    asset: {
      id: "not-charging",
      title: "Not charging? Try these 5 steps first",
      html: `<ol class="steps-list">
<li><strong>Try another charger and cable.</strong> Cables fail more often than ports.</li>
<li><strong>Try every port.</strong> If one works, the Mac can still charge.</li>
<li><strong>Look in the port with a torch.</strong> Lint can stop the plug going in all the way. Don't use metal to clean it.</li>
<li><strong>Restart it properly.</strong> Apple silicon: shut down, wait 30 seconds, turn it on. Intel: <a href="https://support.apple.com/en-au/102605" rel="nofollow noopener" target="_blank">reset the SMC</a>.</li>
<li><strong>Check the battery menu.</strong> If it says charging is on hold at 80%, that is Optimised Battery Charging. It is normal.</li>
</ol>
<table class="data-table"><thead><tr><th>What we find</th><th>Fix</th></tr></thead><tbody>
<tr><td>Lint packed in the port</td><td>Clean</td></tr>
<tr><td>Worn or loose port</td><td>New port</td></tr>
<tr><td>Burnt pin</td><td>New port, and we check the board</td></tr>
<tr><td>Dead USB-C controller chip (Intel 2016 to 2020)</td><td>Chip replaced on the board</td></tr>
<tr><td>Corrosion from a spill</td><td><a href="/product/macbook-water-damage-repair/">Water damage repair</a></td></tr>
</tbody></table>`
    },
    models: ["MacBook Air USB-C (2018 and newer)", "MacBook Pro USB-C (2016 and newer)", "MacBook Air and Pro with MagSafe 3"],
    faqs: [
      ["How much does it cost to fix a MacBook charging port?", "From $129 at our workshop. If the fault is a chip on the board behind the port, board repair starts from $249."],
      ["Is it worth fixing a charging port?", "Yes, if the rest of the Mac works. It costs far less than a new Mac."],
      ["How do I know if my charging port is damaged?", "The plug is loose, it only charges at certain angles, or one port works and another does not. A burnt smell or dark mark is a sign to stop using it."],
      ["Can you fix just one port?", "Often, yes. We fix the faulty port or chip and leave the working ones alone."],
      ["My MacBook stops charging at 80%. Is the port broken?", "No. That is Optimised Battery Charging. macOS holds the charge at 80% to protect the battery."]
    ],
    cases: caseList(["macbook-pro-16-2021-m1-max-no-charge-thunderbolt-repair", "macbook-pro-16-2019-liquid-damage-usb-c-repair"]),
    related: ["macbook-logic-board-repair", "macbook-battery-replacement", "macbook-water-damage-repair"]
  },

  // ───────────────────────── 10. macOS reinstall
  {
    slug: "macos-reinstall",
    oldUrl: "/services/macos-reinstall-setup/",
    name: "macOS Reinstall & Setup",
    short: "macOS Reinstall",
    category: "Software",
    icon: ICONS.macos,
    price: 150,
    title: "macOS Reinstall & Setup Hills District: From $150, Files Kept",
    description: "macOS reinstall and setup from $150 in the Hills District. For slow, crashing or stuck Macs. We back up your files, clean install macOS, then put them back.",
    h1: "macOS Reinstall and Setup in the Hills District",
    card: "Slow, crashing, stuck on start-up or a failed update.",
    tldr: [
      "<strong>From $150.</strong> For Macs that are slow, crash, loop on start-up or failed an update.",
      "We <strong>back up your files</strong>, do a clean install, then put your files back.",
      "Often done <strong>the same day</strong>.",
      "Bring your <strong>Mac login password</strong> and your <strong>Apple Account password</strong>.",
      "If a part is failing, we tell you. A reinstall won't fix hardware."
    ],
    turnaround: "Often the same day",
    signs: [
      "The Mac is very slow, even after a restart.",
      "It crashes, or apps quit on their own.",
      "It loops or stops on the Apple logo.",
      "An update failed part way.",
      "Pop-ups or adware you can't remove."
    ],
    includes: [
      "A backup of your files first",
      "A check that the drive and battery are healthy",
      "A clean install of the newest macOS your Mac can run",
      "Your files put back, and your accounts set up with you"
    ],
    priceRows: [
      ["macOS reinstall and setup, our workshop", "From $150"],
      ["Failing drive found during the check", "<a href=\"/product/macbook-ssd-upgrade/\">SSD from $129</a>"]
    ],
    priceNote: "We confirm your exact price before any work starts.",
    asset: {
      title: "Reinstall or erase: what happens to your files",
      html: `<table class="data-table"><thead><tr><th>Option</th><th>Your files</th><th>Good for</th></tr></thead><tbody>
<tr><td>Reinstall macOS from Recovery</td><td>Kept</td><td>Broken system files. It often won't fix a slow, cluttered Mac.</td></tr>
<tr><td>Erase and reinstall</td><td>Deleted</td><td>A fresh start, or selling the Mac. Back up first.</td></tr>
<tr><td>Our clean install</td><td>Backed up, then put back</td><td>A fresh system with your files, without the old clutter.</td></tr>
</tbody></table>
<h3>How to open macOS Recovery yourself</h3>
<ul>
<li><strong>Apple silicon (M1 and newer):</strong> shut down, then press and hold the power button until you see the start-up options.</li>
<li><strong>Intel:</strong> turn it on and hold Command and R until you see the Apple logo.</li>
</ul>
<p class="source">Source: <a href="https://support.apple.com/en-au/102518" rel="nofollow noopener" target="_blank">Apple: how to reinstall macOS</a>. We can't remove Activation Lock for an Apple Account that isn't yours.</p>`
    },
    models: ["MacBook Air and Pro", "iMac", "Mac mini"],
    faqs: [
      ["Can macOS be reinstalled without losing files?", "Yes. A reinstall from Recovery keeps your files. Our clean install backs your files up first and puts them back after, so nothing is lost."],
      ["How long does a macOS reinstall take?", "Often the same day. A big backup can add time."],
      ["Will my apps still work?", "Apps from the App Store reinstall from your Apple Account. For others, like Microsoft Office or Adobe, you sign in again. We help you with that."],
      ["Is my Mac too old to update?", "Every Mac has a newest macOS it can run. We install that version and tell you if your Mac no longer gets security updates."],
      ["Will a reinstall make my Mac faster?", "If the slowness is software, yes. If the drive or battery is failing, no. We test the hardware first and tell you."]
    ],
    cases: caseList(["macbook-pro-13-2019-t2-chip-bridgeos-failure"]),
    related: ["macbook-ssd-upgrade", "macbook-data-recovery", "macbook-fan-cleaning"]
  }
];

// iMac upgrades is its own page (it ranks at /imac-upgrades/), shown in the shop as a card.
export const extraCards = [
  { slug: "imac-upgrades", url: "/imac-upgrades/", name: "iMac RAM & SSD Upgrades", category: "iMac", icon: ICONS.imac, price: 89, card: "Faster, roomier iMac. RAM from $89, SSD from $149." }
];

export default products;

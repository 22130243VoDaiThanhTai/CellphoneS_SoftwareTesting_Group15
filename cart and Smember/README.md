# CellphoneS Cart & Smember Playwright suite

A JavaScript Playwright project translated from the supplied Ghost Inspector export. The workbook expected outputs are retained on each test as report annotations and summarized below. This project contains all 60 cases in the two supplied files: 30 `TC_CART` and 30 `TC_SMEMBER` cases.

## Source alignment and known gaps

The uploaded workbook and Ghost Inspector ZIP are not the same test suite in content, despite sharing 60 IDs and the Cart/Smember labels:

- The workbook defines **Cart & quantity (30)** and **Discount code & Smember benefits (30)**. It contains no Filter module.
- The ZIP defines **Cart (30)** and **Smember account (30)**. `TC_SMEMBER_20` and `TC_SMEMBER_21` are order-history filters, not a product Filter module.
- Many same-ID cases have different titles, procedures, and expectations. In particular, `TC_CART_01–30` in the workbook describe cart operations through checkout; the ZIP’s `TC_CART_01–30` include login, cart, coupon, checkout and payment flows. Workbook `TC_SMEMBER_01–30` describe membership tiers, points and vouchers; ZIP `TC_SMEMBER_01–30` describe account access, profile, orders, wishlist, and other account flows.
- The implementation follows the ZIP’s actual steps and selectors. For each ID, the workbook’s expected output and procedure are attached as Playwright report annotations so the source is preserved. Because of the content conflicts, those workbook expectations cannot be treated as verified pass criteria for the ZIP scenario. Review the same-ID conflicts and reconcile the source cases before using a passing run as evidence of workbook coverage.
- Filter cases are not present in these two uploaded sources. No product-filter tests were invented.
- The export mostly asserts that a selector exists. Those checks are carried out as visible-element assertions. The workbook often gives richer requirements (price arithmetic, exact messages, selected products, cart persistence, and membership benefit values) than the ZIP steps verify. Such requirements remain gaps until source steps/selectors and reliable test data are agreed.
- Several ZIP selectors look like illustrative or legacy selectors and the cases assume seeded cart contents, valid vouchers, member data, delivery options, and checkout state. They may need maintenance against the live site. Selector availability is not evidence that the whole business rule passed.
- `TC_CART_01` and `TC_CART_11`, and `TC_CART_21–22`, include sign-in or customer information in the export. Values are parameterized. Checkout cases stop at the provided steps; `TC_CART_30` explicitly does not submit an order. The password-change scenario likewise stops before submission.
- Duplicate handling: the 60 IDs are unique within this export, and there are no byte-identical test definitions. All 60 are kept; none was silently removed.

## Requirements

- Node.js 18 or newer
- npm

## Setup (Windows PowerShell)

```powershell
cd CellphoneS_Cart_Smember_Playwright
npm install
npx playwright install chromium
Copy-Item .env.example .env
```

Fill the needed values in `.env` using your own authorized test account. Do not commit `.env`.

```dotenv
BASE_URL=https://cellphones.com.vn
SMEMBER_PHONE=
SMEMBER_PASSWORD=
SMEMBER_NEW_PASSWORD=
SMEMBER_EMAIL=
```

Only the variables referenced by a selected test need values. Do not reuse a real account password in `SMEMBER_NEW_PASSWORD`; the password-change test only fills the form and does not submit it.

## Run

```powershell
npm test                 # all 60 cases
npm run test:cart        # 30 Cart cases from Ghost Inspector
npm run test:smember     # 30 Smember account cases from Ghost Inspector
npm run test:headed      # visible browser
npm run test:ui          # Playwright UI mode
```

Reports are written to `playwright-report/`; traces and screenshots on failure go to `test-results/`.

## Project layout

- `tests/cart.spec.js`, `tests/smember.spec.js`: grouped cases
- `tests/cases.json`: all translated steps plus the original workbook procedure and expected output per case
- `support/ghost-runner.js`: small runner for Ghost Inspector commands and environment placeholders
- `playwright.config.js`, `package.json`, `.env.example`, `.gitignore`

## Validation status

The JavaScript files are syntax-checked before delivery. The live CellphoneS site is not run as part of packaging, so no live-site test results are claimed. Test results depend on current site behavior, account state, selectors, and the data prerequisites noted above.

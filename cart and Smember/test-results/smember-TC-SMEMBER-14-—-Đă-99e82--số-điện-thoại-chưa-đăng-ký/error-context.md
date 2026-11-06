# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smember.spec.js >> TC_SMEMBER_14 — Đăng nhập thất bại với số điện thoại chưa đăng ký
- Location: tests\smember.spec.js:6:3

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button[type="button"].border-none').first()
    - locator resolved to <button type="button" translate="yes" data-slot="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" aria-controls="radix-_R_2q2cnl6jb_" class="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-7…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```
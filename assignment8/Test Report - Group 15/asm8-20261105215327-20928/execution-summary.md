# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)

Run ID: asm8-20261105215327-20928. Bắt đầu: 2026-11-05T14:53:28.614Z. Thời gian: 29.20 giây.

**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.

Test runner nhận diện: 54; có kết quả: 2. Passed: 1; Failed: 0; Skipped: 0; Interrupted: 1.

Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.

| Module | Test | Trạng thái | Thời gian (s) |
|---|---|---|---:|
| cp | PRODUCT_COMPARE_PAGE_Open_01 - mở bảng một sản phẩm | passed | 4.58 |
| cp | PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP | interrupted | 20.45 |

## Các lỗi quan sát được

### cp: PRODUCT_COMPARE_LIST_Add_01 - thêm từ PDP

```text
Error: locator.click: Test ended.
Browser logs:

<launching> /Applications/Google Chrome.app/Contents/MacOS/Google Chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,BlockOriginHeaderModificationOnRedirect,AvoidCorsURLLoaderRestartOnRedirect,Translate,AutoDeElevate,OptimizationHints,NetworkTimeServiceQuerying,AimEnabled,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=/var/folders/h4/3qhhx50s75vd0hfpfxp6zs780000gn/T/playwright_chromiumdev_profile-GSLLdu --remote-debugging-pipe --no-startup-window
<launched> pid=21162
[pid=21162][err] [21162:7723316:1105/215329.738070:ERROR:chrome/browser/ui/views/user_education/impl/browser_user_education_interface_impl.cc:186] Attempting to show IPH IPH_BatterySaverMode before browser initialization; IPH will not be shown.
[pid=21162][err] Trying to load the allocator multiple times. This is *not* supported.
[pid=21162][err] 2026-11-05 21:53:34.125 Google Chrome[21162:7723316] error messaging the mach port for IMKCFRunLoopWakeUpReliable
[pid=21162][err] [21162:7723316:1105/215334.509154:ERROR:chrome/browser/ui/views/user_education/impl/browser_user_education_interface_impl.cc:186] Attempting to show IPH IPH_BatterySaverMode before browser initialization; IPH will not be shown.
[pid=21162][err] [21219:7724620:1105/215341.855074:ERROR:sandbox/mac/system_services.cc:31] SetApplicationIsDaemon: Error Domain=NSOSStatusErrorDomain Code=-50 "paramErr: error in user parameter list" (-50)
[pid=21162] <gracefully close start>
[pid=21162][err] [21162:7723412:1105/215354.727195:ERROR:base/process/process_mac.cc:90] task_policy_set TASK_SUPPRESSION_POLICY: (os/kern) invalid argument (4)
Call log:
[2m  - waiting for locator('.compare-products').locator('.compare-product.has-product').first().locator('.remove-compare-product')[22m
[2m    - locator resolved to <div data-v-0c8104f5="" class="remove-compare-product">…</div>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    23 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <a rel="nofollow" target="_blank" class="link-policy" href="/tos?part=privacy-policy">↵      Chính sách thu thập và xử lý dữ liệu cá nh…</a> from <div id="modal-root">…</div> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m

```

Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.

HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.

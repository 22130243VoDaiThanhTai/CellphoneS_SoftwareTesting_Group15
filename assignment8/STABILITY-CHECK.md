# Kiểm tra tính ổn định

Có 1 test đổi trạng thái giữa các lượt cùng hash source/cấu hình. Ghi nhận nghi flaky, cần đối chiếu popup, dữ liệu và thời điểm tải. Không kết luận chỉ từ một lần chạy lại.

| Run | Phạm vi | Kết quả |
|---|---|---|
| asm8-20261106174424-25176 | 23 test HN | 21 Pass / 2 Fail / 0 Skip |
| asm8-20261106181042-31102 | 2 test HN | 1 Pass / 1 Fail / 0 Skip |

Các lượt trước sửa có hash khác, không dùng việc Fail rồi Pass sau sửa để gọi là flaky. Không cộng số test qua các lần chạy.

Hash so sánh:
```json
{
  "pages/hongnhan/build-pc.mjs": "6d5d5dc9e5275f8a4d70e005ff8aa5ee51870e533799821639a4b98e8b2b5efa",
  "playwright.config.cjs": "26c0ef9cd88c1aa99b65b38321514cc59e7daf09c53f57e3566f61d893b28c0a",
  "scripts/run-suite.cjs": "953299fea6a32e8b824bd314bfaebba2e8fc5d7e18f7de1337379a81b453a078",
  "support/fixtures.cjs": "632bb99bc9afdad0f4fe0c3518b3d0f2fda77ce7749bb5b9beaf20dcd507cb01",
  "support/summary-reporter.cjs": "58ddf13d537b7dd3eb4b2e163eda7bc80ab38a77c2a31db2604a2afd29006990",
  "tests/hongnhan/build-pc.spec.mjs": "cbbf2183b2e6ae0e5f54ff00abc89e03a038ba971409753d418f1cbd132b80d6",
  "tests/hongnhan/sforum.spec.cjs": "b163a4d065a5def2403b7349781d5ea164c8afde35f53a158d032b5a56367ac7",
  "tests/hongnhan/store.spec.cjs": "ba68960e1e983f6ec8dae41f82c645ebacf75987306c4afb91f9b01551138d54"
}
```

## Test thay đổi trạng thái

- Bổ sung: tăng/giảm số lượng và hủy xóa tại 1: failed, passed

const fs = require('node:fs');
const path = require('node:path');
const esc = text => String(text).replaceAll('|', '\\|').replaceAll('\n', ' ');
class SummaryReporter {
  constructor(options) { this.options = options; this.records = []; }
  onBegin(config, suite) { this.discovered = suite.allTests().length; this.started = new Date(); }
  onTestEnd(test, result) {
    this.records.push({
      module: test.parent.project().name,
      title: test.title,
      status: result.status,
      retry: result.retry,
      durationMs: result.duration,
      errors: result.errors.map(e => e.message || String(e)),
      annotations: test.annotations,
      screenshots: result.attachments.filter(a => a.contentType === 'image/png').map(a => a.path),
    });
  }
  onEnd(result) {
    const { reportDir, runId } = this.options;
    fs.mkdirSync(reportDir, { recursive: true });
    const counts = { passed: 0, failed: 0, skipped: 0, timedOut: 0, interrupted: 0 };
    for (const record of this.records) counts[record.status] = (counts[record.status] || 0) + 1;
    const summary = { runId, startedAt: this.started.toISOString(), finishedAt: new Date().toISOString(), status: result.status, durationMs: result.duration, discovered: this.discovered, counts, records: this.records, scope: 'Personal scope: PD/CP/RV — 22130275 Trịnh Quang Thông. Only modules selected in this run; not a full group suite.' };
    fs.writeFileSync(path.join(reportDir, 'execution-summary.json'), JSON.stringify(summary, null, 2));
    const lines = [
      '# Kết quả thực thi ASM8 — Group15 (phạm vi tích hợp hiện tại)', '',
      `Run ID: ${runId}. Bắt đầu: ${summary.startedAt}. Thời gian: ${(result.duration / 1000).toFixed(2)} giây.`, '',
      '**Phạm vi:** Các project PD/CP/RV của Trịnh Quang Thông được chọn trong lượt này. Không phải kết quả toàn nhóm. Không dùng kết quả ASM7 thay cho lượt chạy này.', '',
      `Test runner nhận diện: ${this.discovered}; có kết quả: ${this.records.length}. Passed: ${counts.passed}; Failed: ${counts.failed + counts.timedOut}; Skipped: ${counts.skipped}; Interrupted: ${counts.interrupted}.`, '',
      'Suite cá nhân khai báo 28 PD, 25 CP, 29 RV; xem discovered và module thực sự chạy, không cộng kết quả lịch sử. Các test skip phải ghi rõ lý do.', '',
      '| Module | Test | Trạng thái | Thời gian (s) |', '|---|---|---|---:|',
      ...this.records.map(r => `| ${r.module} | ${esc(r.title)} | ${r.status} | ${(r.durationMs / 1000).toFixed(2)} |`), '',
      '## Các lỗi quan sát được', '',
      ...this.records.filter(r => r.errors.length).map(r => `### ${r.module}: ${r.title}\n\n\`\`\`text\n${r.errors.join('\n')}\n\`\`\`\n`),
      'Các thông báo trên là lỗi runner/assertion, chưa tự kết luận là lỗi sản phẩm hoặc flaky. Cần phân tích riêng và giữ kết quả baseline khi chạy lại.', '',
      'HTML: index.html. Chi tiết máy đọc: results.json, execution-summary.json. Ảnh/log: thư mục Envidence - Group15 tương ứng run ID.',
    ];
    fs.writeFileSync(path.join(reportDir, 'execution-summary.md'), lines.join('\n') + '\n');
  }
}
module.exports = SummaryReporter;

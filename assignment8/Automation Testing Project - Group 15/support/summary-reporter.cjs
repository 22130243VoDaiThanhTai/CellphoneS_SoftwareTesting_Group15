const fs=require('node:fs');
const path=require('node:path');
const esc=s=>String(s).replaceAll('|','\\|').replaceAll('\n',' ');
class SummaryReporter{
 constructor(options){this.options=options;this.records=[];this.errors=[];}
 onBegin(config,suite){this.started=new Date();this.discovered=suite.allTests().length;this.modules=[...new Set(suite.allTests().map(t=>t.parent.project().name))];}
 onError(error){this.errors.push(error.message||String(error));}
 onTestEnd(test,result){this.records.push({id:test.id,module:test.parent.project().name,title:test.title,status:result.status,expectedStatus:test.expectedStatus,retry:result.retry,durationMs:result.duration,errors:result.errors.map(e=>e.message||String(e)),annotations:test.annotations,screenshots:result.attachments.filter(a=>a.contentType==='image/png').map(a=>a.path)});}
 onEnd(result){
  const {reportDir,runId}=this.options;fs.mkdirSync(reportDir,{recursive:true});
  const attempts=this.records,final=new Map();for(const r of attempts)final.set(r.id,r);
  const records=[...final.values()],counts={passed:0,failed:0,skipped:0,timedOut:0,interrupted:0};
  for(const r of records)counts[r.status]=(counts[r.status]||0)+1;
  const flaky=records.filter(r=>r.status==='passed'&&attempts.some(a=>a.id===r.id&&a.status!=='passed'&&a.status!=='skipped')).map(r=>r.title);
  const scope='Các module có trong project và được chọn ở lượt này. QuangHuy/TienVinh dùng chung source trùng blob, tích hợp một lần. QuangHuy có case thiếu assertion/tài khoản được ghi rõ. Không đại diện toàn bộ chức năng của mọi thành viên.';
  const summary={runId,startedAt:this.started?.toISOString(),finishedAt:new Date().toISOString(),status:result.status,durationMs:result.duration,discovered:this.discovered,executed:counts.passed+counts.failed+counts.timedOut,counts,notRun:Math.max(0,this.discovered-records.length),modules:this.modules,flaky,records,attempts,runnerErrors:this.errors,scope};
  fs.writeFileSync(path.join(reportDir,'execution-summary.json'),JSON.stringify(summary,null,2));
  const lines=['# Test Report - Group 15','',`Run: ${runId}. Bắt đầu: ${summary.startedAt}. Thời gian: ${(result.duration/1000).toFixed(2)} giây.`,'',scope,'',`Khai báo ${summary.discovered}; đã thực thi ${summary.executed}; Pass ${counts.passed}; Fail ${counts.failed+counts.timedOut}; Skipped ${counts.skipped}; Interrupted ${counts.interrupted}; Not run ${summary.notRun}.`,'','Đếm test runner theo test.id, không đếm số mã workbook trong tên test. Retry được giữ trong attempts.','', '| Module | Test | Trạng thái | Giây |','|---|---|---|---:|',...records.map(r=>`| ${r.module} | ${esc(r.title)} | ${r.status} | ${(r.durationMs/1000).toFixed(2)} |`),'','## Failures',...records.filter(r=>r.errors.length).map(r=>`### ${r.title}\n\n${r.errors.join('\n')}\n`),'','## Skipped',...records.filter(r=>r.status==='skipped').map(r=>`- ${r.title}: ${r.annotations.filter(a=>a.type==='skip'||a.type==='fixme').map(a=>a.description).join('; ')||'Xem annotation nguồn.'}`),'','Lỗi runner/assertion chưa tự chứng minh lỗi website. Xem phân tích và kết quả chạy lại.'];
  fs.writeFileSync(path.join(reportDir,'execution-summary.md'),lines.join('\n')+'\n');
 }
}
module.exports=SummaryReporter;

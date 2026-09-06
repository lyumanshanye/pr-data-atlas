const examples = [
  {
    id: "pygmt-shapefile",
    batch: "Full3",
    repo: "GenericMappingTools/pygmt",
    repoId: 85352251,
    pr: 1695,
    title: "Fix UnicodeDecodeError with shapefiles for plot and plot3d",
    group: "bug",
    category: "Bug 修复",
    language: "Python · C",
    color: "#9cc8ff",
    why: "这是最清楚的“真实问题 → 根因定位 → 小范围修复 → 回归测试”样例，训练信号完整而且没有无关噪声。",
    summary: "二进制 shapefile 被误走文本读取路径，触发 UnicodeDecodeError。修复将 marker 检测限制到 .gmt 文本文件，并补上 shapefile 回归测试和测试缓存。",
    issue: "pygmt v0.5.0 UnicodeDecodeError with shapefiles · 7 条评论",
    commits: 8,
    diffs: 10,
    tests: 1,
    relevant: 4,
    patchChars: 6575,
    task6Chars: 60948,
    tokens: 15237,
    files: ["pygmt/tests/test_plot.py"],
    tags: ["regression test", "binary input", "root cause"]
  },
  {
    id: "irrlicht-relay",
    batch: "Full",
    repo: "ingo-eichhorst/Irrlicht",
    repoId: 1051366973,
    pr: 544,
    title: "feat(relay) v1·B: hardening — read-limit cap + per-IP/connection caps (#536)",
    group: "security",
    category: "安全加固",
    language: "Go",
    color: "#ff927e",
    why: "把威胁模型直接落实到可检查的资源上限、协议关闭码与并发测试，是安全与可靠性联合训练的高信号例子。",
    summary: "为 WebSocket 客户端和 daemon 设置 1 MiB / 32 MiB 读取上限，并增加 256 总连接、32 每 IP 的连接帽；超限分别返回 1009/1013，同时记录反向代理场景的限制。",
    issue: "关联 issue #536",
    commits: 1,
    diffs: 5,
    tests: 2,
    relevant: 4,
    patchChars: 17428,
    task6Chars: 74590,
    tokens: 18648,
    files: [
      "core/adapters/outbound/relay/forwarder.go",
      "core/cmd/irrlichtrelay/hub.go",
      "core/cmd/irrlichtrelay/hub_test.go",
      "core/cmd/irrlichtrelay/main.go"
    ],
    tags: ["WebSocket", "rate limit", "threat model"]
  },
  {
    id: "camel-nitrite",
    batch: "Full2",
    repo: "apache/camel-quarkus",
    repoId: 193065376,
    pr: 2254,
    title: "Nitrite native support #1298",
    group: "systems",
    category: "平台兼容",
    language: "Java · Quarkus",
    color: "#f3cc62",
    why: "同时包含 GraalVM 原生编译约束、运行时注册、文档和集成测试，能呈现平台兼容问题的完整解决链。",
    summary: "为 Nitrite 扩展补充 GraalVM native 支持，包括反射与运行时初始化注册，并用 Serializable / Mappable 场景的集成测试验证 JVM 与 native 模式。",
    issue: "关联 issue #1298 · 7 条评论",
    commits: 1,
    diffs: 12,
    tests: 3,
    relevant: 2,
    patchChars: 26324,
    task6Chars: 35180,
    tokens: 8795,
    files: [],
    tags: ["GraalVM", "native image", "integration test"]
  },
  {
    id: "flutter-tabs",
    batch: "Full3",
    repo: "flutter/flutter",
    repoId: 31792824,
    pr: 30884,
    title: "[Material] Update TabController to support dynamic Tabs",
    group: "feature",
    category: "框架功能",
    language: "Dart",
    color: "#9be3c9",
    why: "一个成熟 UI 框架里的动态状态变更，既有 API 设计，也有生命周期处理、历史 commit 演进与回归测试。",
    summary: "让 TabController 在 tab 数动态变化时正确重建，并通过 _copyWith 复用 AnimationController；新增覆盖 didUpdateWidget 行为的回归测试。",
    issue: "有关联 issue · 2 条评论",
    commits: 12,
    diffs: 20,
    tests: 1,
    relevant: 3,
    patchChars: 23051,
    task6Chars: 169077,
    tokens: 42269,
    files: [
      "packages/flutter/lib/src/material/tabs.dart",
      "packages/flutter/test/material/tabs_test.dart"
    ],
    tags: ["state lifecycle", "API design", "regression test"]
  },
  {
    id: "tapioca-trackers",
    batch: "Full4",
    repo: "Shopify/tapioca",
    repoId: 188880371,
    pr: 654,
    title: "Rename and group tracker classes",
    group: "systems",
    category: "结构重构",
    language: "Ruby",
    color: "#c7b8f8",
    why: "展示了没有关联 issue 时，模型如何仅凭代码上下文、commit 轨迹和测试理解一次跨文件命名与模块边界重构。",
    summary: "将 tracker 类统一收拢到 Tapioca::Trackers 命名空间，并同步重命名相关类、调用点和规格测试，整理 mixin tracking 的组织方式。",
    issue: "无关联 issue",
    commits: 8,
    diffs: 20,
    tests: 1,
    relevant: 8,
    patchChars: 14780,
    task6Chars: 137104,
    tokens: 34276,
    files: ["lib/tapioca/trackers/…", "spec/tapioca/trackers/…"],
    tags: ["namespace", "cross-file rename", "refactor"]
  },
  {
    id: "sentinel-token-pool",
    batch: "Full4",
    repo: "alibaba/sentinel-golang",
    repoId: 180593078,
    pr: 142,
    title: "Add result token pool (#137)",
    group: "security",
    category: "性能优化",
    language: "Go",
    color: "#ff927e",
    why: "改动短但信号很密：对象池优化有明确基准测试，后续 commit 还修复 nil 处理，是性能任务的优质小样本。",
    summary: "使用 sync.Pool 复用 TokenResult、减少热点路径分配，并加入 benchmark 对比；随后修正对象池取值时的 nil 边界问题。",
    issue: "关联 issue #137",
    commits: 3,
    diffs: 11,
    tests: 1,
    relevant: 5,
    patchChars: 6648,
    task6Chars: 22714,
    tokens: 5678,
    files: ["core/base/result.go", "core/base/result_test.go"],
    tags: ["sync.Pool", "benchmark", "allocation"]
  },
  {
    id: "colin-defer",
    batch: "Full",
    repo: "PrefectHQ/colin",
    repoId: 1124151418,
    pr: 86,
    title: "Add defer blocks for self-referential documents",
    group: "feature",
    category: "语言功能",
    language: "Python · Jinja",
    color: "#9be3c9",
    why: "自引用模板需要改变渲染模型而非只加分支；两阶段渲染设计配合大规模测试，非常适合理解非局部语义变更。",
    summary: "引入 {% defer %} block，让文档可以引用当前渲染结果；通过 rendered / previous_rendered 建立两遍渲染语义，并补充覆盖递归与边界条件的测试。",
    issue: "有关联 issue",
    commits: 7,
    diffs: 23,
    tests: 1,
    relevant: 6,
    patchChars: 73285,
    task6Chars: 131155,
    tokens: 32789,
    files: [],
    tags: ["two-pass render", "template engine", "self reference"]
  },
  {
    id: "cuttle-homeview",
    batch: "Full2",
    repo: "cuttle-cards/cuttle",
    repoId: 474205312,
    pr: 569,
    title: "Feat/redesign homeview",
    group: "experience",
    category: "前端体验",
    language: "Vue · TypeScript",
    color: "#e8b6d8",
    why: "把 UI 设计、组件状态、响应式布局和端到端测试放在同一条变更链里，补足纯后端样例看不到的交互信号。",
    summary: "重新设计 HomeView，加入 Game Finder 与对话框，按页面状态动态切换 header/footer 色彩，并用两组 e2e 用例覆盖核心用户流。",
    issue: "有关联 issue",
    commits: 19,
    diffs: 57,
    tests: 2,
    relevant: 10,
    patchChars: 76963,
    task6Chars: 179112,
    tokens: 44778,
    files: ["Vue view / component files", "2 end-to-end test files"],
    tags: ["responsive UI", "dialog", "end-to-end"]
  },
  {
    id: "internet-identity-passkey",
    batch: "Full2",
    repo: "dfinity/internet-identity",
    repoId: 356347737,
    pr: 2680,
    title: "Show a ‘Last used’ timestamp in the passkey selector",
    group: "experience",
    category: "认证体验",
    language: "TypeScript · Svelte",
    color: "#e8b6d8",
    why: "安全产品中的小型 UX 功能：领域类型、相对时间格式化、组件呈现和单元测试缺一不可，范围适中且边界清楚。",
    summary: "为设备模型增加使用时间信息，在 passkey 选择器显示 Last used 相对时间，并补齐格式化逻辑、单元测试与样式。",
    issue: "无关联 issue",
    commits: 10,
    diffs: 17,
    tests: 1,
    relevant: 4,
    patchChars: 18117,
    task6Chars: 120098,
    tokens: 30024,
    files: [],
    tags: ["passkey", "relative time", "unit test"]
  },
  {
    id: "sqlpage-params",
    batch: "Full2",
    repo: "sqlpage/SQLPage",
    repoId: 519912039,
    pr: 1109,
    title: "Make URL and POST parameters immutable",
    group: "feature",
    category: "API 语义",
    language: "Rust · SQL",
    color: "#9be3c9",
    why: "这是最长样例之一：一次参数语义调整跨过解析、变量命名空间、兼容性与 151 项测试，适合检验长上下文一致性。",
    summary: "把 URL、POST 与 set 变量拆成独立且不可变的命名空间，并加入 sqlpage.variables 过滤能力；更新兼容行为和覆盖广泛的 SQL 测试。",
    issue: "无关联 issue",
    commits: 10,
    diffs: 17,
    tests: 151,
    relevant: 8,
    patchChars: 32855,
    task6Chars: 282043,
    tokens: 70511,
    files: ["SQLPage runtime variable handling", "SQL behavior test suite"],
    tags: ["immutability", "namespace", "backward compatibility"]
  },
  {
    id: "kics-exclusion",
    batch: "Full3",
    repo: "Checkmarx/kics",
    repoId: 278200746,
    pr: 2122,
    title: "Exclude results by similarity ID",
    group: "security",
    category: "安全工具",
    language: "Go",
    color: "#ff927e",
    why: "安全扫描器功能横跨 CLI、配置文件、核心 Inspector、文档和四组测试，能训练端到端功能落地而非单点代码补丁。",
    summary: "新增 --exclude-results / -x 参数与配置项，用 similarity ID 建立排除映射并在 Inspector 中过滤结果，同时更新使用文档和测试。",
    issue: "有关联 issue",
    commits: 4,
    diffs: 13,
    tests: 4,
    relevant: 8,
    patchChars: 18956,
    task6Chars: 81733,
    tokens: 20433,
    files: ["CLI / config handling", "Inspector exclusion map", "4 test files"],
    tags: ["CLI", "configuration", "security scanner"]
  },
  {
    id: "fable-multitarget",
    batch: "Full3",
    repo: "fable-compiler/Fable.Package.SDK",
    repoId: 791824180,
    pr: 12,
    title: "Fix packaging with multiple target frameworks",
    group: "systems",
    category: "构建打包",
    language: "F# · MSBuild",
    color: "#f3cc62",
    why: "补进了稀缺的 .NET/F#/MSBuild 生态，且是典型“单目标正常、多目标失败”的构建系统边界问题。",
    summary: "修正多 TargetFramework 项目的打包流程，让生成资产在不同框架下进入正确位置，并用三个测试项目验证单目标与多目标组合。",
    issue: "有关联 issue · 1 条评论",
    commits: 7,
    diffs: 11,
    tests: 3,
    relevant: 2,
    patchChars: 13824,
    task6Chars: 27674,
    tokens: 6918,
    files: ["MSBuild targets", "3 packaging test projects"],
    tags: ["multi-target", "NuGet", "build system"]
  },
  {
    id: "sentry-replay-docs",
    batch: "Full3",
    repo: "getsentry/sentry-docs",
    repoId: 33837371,
    pr: 7451,
    title: "Add Replay performance overhead numbers",
    group: "experience",
    category: "技术文档",
    language: "MDX · Web perf",
    color: "#e8b6d8",
    why: "文档 PR 也可以很有工程含量：它给出性能指标、实验方法和使用边界，展示语料不应只保留源代码变更。",
    summary: "为 Session Replay 文档补充 LCP、CLS、FID、TBT、内存和网络开销的实测范围，并解释测量环境与解读方式。",
    issue: "有关联 issue · 7 条评论",
    commits: 10,
    diffs: 10,
    tests: 0,
    relevant: 1,
    patchChars: 19552,
    task6Chars: 34449,
    tokens: 8612,
    files: ["Session Replay performance documentation"],
    tags: ["LCP / CLS / FID", "measurement", "documentation"]
  },
  {
    id: "vineyard-object-stream",
    batch: "Full3",
    repo: "v6d-io/v6d",
    repoId: 306631211,
    pr: 357,
    title: "Object stream transferring object IDs",
    group: "systems",
    category: "分布式系统",
    language: "C++ · Python",
    color: "#f3cc62",
    why: "覆盖客户端/服务端协议、Python binding、阻塞读取、持久化和零拷贝设计，是系统级跨语言长上下文样例。",
    summary: "增加通过 object stream 传输对象 ID 的客户端和服务端 API，接入 Python binding，处理阻塞读取与持久化语义，并验证零拷贝流式路径。",
    issue: "有关联 issue · 1 条评论",
    commits: 1,
    diffs: 12,
    tests: 1,
    relevant: 9,
    patchChars: 42648,
    task6Chars: 199615,
    tokens: 49904,
    files: ["C++ client / server stream APIs", "Python bindings", "C++ stream test"],
    tags: ["zero-copy", "object store", "bindings"]
  },
  {
    id: "unifi-motion",
    batch: "Full4",
    repo: "danielfernau/unifi-protect-video-downloader",
    repoId: 214804592,
    pr: 20,
    title: "Download motion events and heat maps; switch to Bearer token auth",
    group: "feature",
    category: "设备 API",
    language: "Python",
    color: "#9be3c9",
    why: "围绕真实设备 API 演进：功能扩展和鉴权迁移同时发生，并有 15 条 issue 讨论提供罕见的需求决策上下文。",
    summary: "增加运动事件与 heat map 下载，调整时间区间和文件组织，并将旧鉴权路径迁移为 Bearer token；配套更新测试与 CLI 行为。",
    issue: "有关联 issue · 15 条评论",
    commits: 4,
    diffs: 6,
    tests: 1,
    relevant: 3,
    patchChars: 15175,
    task6Chars: 55177,
    tokens: 13794,
    files: ["downloader / API client", "CLI entrypoint", "API test"],
    tags: ["Bearer token", "device API", "motion event"]
  },
  {
    id: "wp-rocket-regex",
    batch: "Full4",
    repo: "wp-media/wp-rocket",
    repoId: 62721640,
    pr: 6031,
    title: "Fix jQuery regex handling",
    group: "bug",
    category: "精炼修复",
    language: "PHP · Regex",
    color: "#9cc8ff",
    why: "最短样例之一，保留它是为了展示数据不只擅长大 PR：明确的字符串边界、fixture 与回归验证同样是优质训练信号。",
    summary: "修复 jQuery 识别正则在特定脚本形态下的匹配错误，调整规则并添加 fixture 回归用例，避免优化流程错误处理脚本。",
    issue: "有关联 issue · 5 条评论",
    commits: 7,
    diffs: 9,
    tests: 1,
    relevant: 3,
    patchChars: 3912,
    task6Chars: 20458,
    tokens: 5114,
    files: ["PHP regex handling", "regression fixture"],
    tags: ["regular expression", "fixture", "small & focused"]
  }
];

const categoryFilters = [
  { id: "all", label: "全部" },
  { id: "bug", label: "Bug 修复" },
  { id: "feature", label: "功能 / API" },
  { id: "security", label: "安全 / 性能" },
  { id: "systems", label: "架构 / 构建" },
  { id: "experience", label: "体验 / 文档" }
];

const batchData = [
  { name: "Full", prs: 2298284, repos: 82679, tokens: 49.985, color: "#9be3c9" },
  { name: "Full2", prs: 24228387, repos: 579072, tokens: 487.68, color: "#ff6b52" },
  { name: "Full3", prs: 12670426, repos: 295194, tokens: 244.845, color: "#9cc8ff" },
  { name: "Full4", prs: 20273341, repos: 510342, tokens: 355.235, color: "#f3cc62" }
];

const storedFields = [
  "repo_id", "repo_name", "repo_description", "pr_id", "title", "body",
  "related_issue", "issue.comments[]", "changed_py_files", "relevant_files[]",
  "commits[]", "commits[].diffs[]", "commits[].refined_message", "pr_summary"
];

const state = { filter: "all", search: "" };

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function compactNumber(value) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function fullNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function githubUrl(item) {
  return `https://github.com/${item.repo}/pull/${item.pr}`;
}

function renderSpotlight() {
  const item = examples[0];
  document.querySelector("#spotlight").innerHTML = `
    <div class="spotlight-main">
      <div>
        <p class="spotlight-kicker">Editor’s pick · 最完整的问题解决链</p>
        <h3>${escapeHtml(item.repo)} #${item.pr}<br>${escapeHtml(item.title)}</h3>
        <p class="spotlight-summary">${escapeHtml(item.summary)}</p>
      </div>
      <button class="spotlight-link" type="button" data-open-example="${item.id}">
        查看这条样例的完整画像 <span aria-hidden="true">→</span>
      </button>
    </div>
    <div class="spotlight-side">
      <div>
        <small>WHY THIS EXAMPLE MATTERS</small>
        <h4>${escapeHtml(item.why)}</h4>
      </div>
      <div class="spotlight-metrics">
        <div><strong>${item.commits}</strong><span>commits</span></div>
        <div><strong>${item.diffs}</strong><span>diffs</span></div>
        <div><strong>${compactNumber(item.tokens)}</strong><span>est. tokens</span></div>
      </div>
    </div>`;
}

function renderFilters() {
  const container = document.querySelector("#category-filters");
  container.innerHTML = categoryFilters.map((filter) => `
    <button
      type="button"
      class="filter-chip${state.filter === filter.id ? " active" : ""}"
      data-filter="${filter.id}"
      aria-pressed="${state.filter === filter.id}"
    >${filter.label}</button>`).join("");
}

function visibleExamples() {
  const query = state.search.trim().toLocaleLowerCase();
  return examples.filter((item) => {
    const matchesGroup = state.filter === "all" || item.group === state.filter;
    const searchable = [item.repo, item.title, item.category, item.language, item.summary, ...item.tags].join(" ").toLocaleLowerCase();
    return matchesGroup && (!query || searchable.includes(query));
  });
}

function renderExamples() {
  const visible = visibleExamples();
  const grid = document.querySelector("#example-grid");
  const empty = document.querySelector("#empty-state");
  document.querySelector("#visible-count").textContent = visible.length;
  empty.hidden = visible.length !== 0;
  grid.innerHTML = visible.map((item) => `
    <button
      type="button"
      class="example-card"
      data-open-example="${item.id}"
      style="--card-color:${item.color}"
      aria-label="查看 ${escapeHtml(item.repo)} PR ${item.pr} 的详情"
    >
      <span class="card-top">
        <span class="batch-pill">${item.batch}</span>
        <span class="category-pill">${escapeHtml(item.category)}</span>
      </span>
      <span class="repo-name">${escapeHtml(item.repo)} · #${item.pr}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <span class="card-reason">${escapeHtml(item.why)}</span>
      <span class="card-footer">
        <span class="card-tags">
          <span>${escapeHtml(item.language)}</span>
          <span>${item.commits} commits</span>
          <span>${compactNumber(item.tokens)} tok</span>
        </span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </span>
    </button>`).join("");
}

function openExample(id) {
  const item = examples.find((example) => example.id === id);
  if (!item) return;
  const dialog = document.querySelector("#example-dialog");
  const files = item.files.length
    ? `<ul class="dialog-files">${item.files.map((file) => `<li>${escapeHtml(file)}</li>`).join("")}</ul>`
    : `<p>此页只展示计数；完整记录中保留了 ${item.diffs} 条文件级 diff 及其 path / patch。</p>`;
  dialog.style.setProperty("--dialog-color", item.color);
  document.querySelector("#dialog-content").innerHTML = `
    <header class="dialog-hero">
      <div class="dialog-kicker"><span class="batch-pill">${item.batch}</span><span class="category-pill">${escapeHtml(item.category)}</span></div>
      <p class="dialog-repo">${escapeHtml(item.repo)} · repo_id ${item.repoId} · PR #${item.pr}</p>
      <h2 id="dialog-title">${escapeHtml(item.title)}</h2>
      <a class="dialog-gh-link" href="${githubUrl(item)}" target="_blank" rel="noopener noreferrer">在 GitHub 查看原始 PR ↗</a>
    </header>
    <div class="dialog-body">
      <div class="why-box">
        <small>WHY IT MATTERS</small>
        <p>${escapeHtml(item.why)}</p>
      </div>
      <div class="dialog-metrics">
        <div><strong>${item.commits}</strong><span>commits</span></div>
        <div><strong>${item.diffs}</strong><span>diff records</span></div>
        <div><strong>${item.tests}</strong><span>test cases/files</span></div>
        <div><strong>${item.relevant}</strong><span>relevant files</span></div>
        <div><strong>${compactNumber(item.patchChars)}</strong><span>patch chars</span></div>
        <div><strong>${compactNumber(item.tokens)}</strong><span>task 6 tokens</span></div>
      </div>
      <section class="dialog-section">
        <h3>PR summary</h3>
        <p>${escapeHtml(item.summary)}</p>
      </section>
      <section class="dialog-section">
        <h3>Issue context</h3>
        <p>${escapeHtml(item.issue)}</p>
      </section>
      <section class="dialog-section">
        <h3>Key modules</h3>
        ${files}
      </section>
      <section class="dialog-section">
        <h3>Stored fields</h3>
        <div class="field-chips">${storedFields.map((field) => `<code>${escapeHtml(field)}</code>`).join("")}</div>
      </section>
      <section class="dialog-section">
        <h3>Task 6 scale</h3>
        <p>${fullNumber(item.task6Chars)} 字符，按 4 字符/token 估算为 ${fullNumber(item.tokens)} tokens。该数用于容量比较，并非 tokenizer 精确值。</p>
      </section>
    </div>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  const dialog = document.querySelector("#example-dialog");
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function renderCoverage() {
  const maxPrs = Math.max(...batchData.map((item) => item.prs));
  document.querySelector("#batch-bars").innerHTML = batchData.map((item, index) => `
    <div class="batch-row">
      <span class="batch-label">${item.name}</span>
      <div class="batch-track"><div class="batch-fill" style="width:${(item.prs / maxPrs * 100).toFixed(2)}%;--bar-color:${item.color};animation-delay:${index * 80}ms"></div></div>
      <div class="batch-value"><strong>${(item.prs / 1e6).toFixed(2)}M</strong><small>${fullNumber(item.repos)} repos</small></div>
    </div>`).join("");

  const totalTokens = batchData.reduce((total, item) => total + item.tokens, 0);
  let cursor = 0;
  const segments = batchData.map((item) => {
    const start = cursor;
    cursor += item.tokens / totalTokens * 360;
    return `${item.color} ${start.toFixed(2)}deg ${cursor.toFixed(2)}deg`;
  });
  document.querySelector("#token-donut").style.background = `conic-gradient(${segments.join(",")})`;
  document.querySelector("#token-legend").innerHTML = batchData.map((item) => `
    <div class="legend-row" style="--legend-color:${item.color}">
      <i></i><span>${item.name}</span><strong>${item.tokens.toFixed(3)}B</strong>
      <small>${(item.tokens / totalTokens * 100).toFixed(1)}% of raw estimate</small>
    </div>`).join("");
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filter = filter.dataset.filter;
    renderFilters();
    renderExamples();
    return;
  }
  const example = event.target.closest("[data-open-example]");
  if (example) openExample(example.dataset.openExample);
});

document.querySelector("#example-search").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderExamples();
});

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
document.querySelector("#example-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closeDialog();
});
document.querySelector("#example-dialog").addEventListener("close", () => document.body.classList.remove("dialog-open"));

renderSpotlight();
renderFilters();
renderExamples();
renderCoverage();

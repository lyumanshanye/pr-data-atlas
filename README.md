# PR Data Atlas

这是 Full / Full2 / Full3 / Full4 四批 PR 合成数据的说明与可视化网页。页面把代表性样例放在第一屏之后，重点回答三件事：

1. 一条 PR 数据真正包含哪些工程上下文；
2. 哪些真实样例最能体现这些上下文的价值；
3. 当前数据覆盖多少 PR、仓库和估算 token。

直接打开 `index.html`，或通过静态 HTTP 服务预览：

```bash
python3 -m http.server 8080
```

## 代表性样例

网页展示 16 个经人工复核的公开 GitHub PR。它们不是随机质量评测，而是用于解释数据能力的精选样例。

| 工程类型 | Repo / PR | 选择原因 |
|---|---|---|
| Bug 修复 | GenericMappingTools/pygmt#1695 | 问题、根因、小修复和回归测试组成完整闭环 |
| 安全加固 | ingo-eichhorst/Irrlicht#544 | 威胁模型、资源上限、协议错误码和并发测试齐全 |
| 平台兼容 | apache/camel-quarkus#2254 | GraalVM native 注册、文档与集成测试 |
| 框架功能 | flutter/flutter#30884 | 动态状态、生命周期、API 设计和长 commit 历史 |
| 结构重构 | Shopify/tapioca#654 | 无 issue 条件下理解跨文件命名空间重构 |
| 性能优化 | alibaba/sentinel-golang#142 | `sync.Pool` 优化、benchmark 与边界修复 |
| 语言功能 | PrefectHQ/colin#86 | 自引用模板的两遍渲染语义和大规模测试 |
| 前端体验 | cuttle-cards/cuttle#569 | Vue 交互重构、响应式 UI 和端到端测试 |
| 认证体验 | dfinity/internet-identity#2680 | Passkey 领域类型、相对时间与单元测试 |
| API 语义 | sqlpage/SQLPage#1109 | 不可变参数命名空间、兼容性和 151 项测试 |
| 安全工具 | Checkmarx/kics#2122 | CLI、配置、核心过滤逻辑、文档和测试联动 |
| 构建打包 | fable-compiler/Fable.Package.SDK#12 | F#/MSBuild 多目标框架边界问题 |
| 技术文档 | getsentry/sentry-docs#7451 | 有实验指标与方法说明的工程型文档变更 |
| 分布式系统 | v6d-io/v6d#357 | C++/Python、客户端/服务端、持久化和零拷贝 |
| 设备 API | danielfernau/unifi-protect-video-downloader#20 | 功能扩展、Bearer 鉴权迁移和 15 条讨论 |
| 精炼修复 | wp-media/wp-rocket#6031 | 小而完整的 regex bug 与 fixture 回归测试 |

选择流程：四批各取 384 条候选，共 1,536 条；优先保留有 issue、讨论、测试、相关文件、refined commit 和有效 patch 的记录；排除纯版本升级、bot bump 和低信息量 release PR；最后按语言、任务类型、批次和长度人工复核。

## 一条数据包含什么

### Raw PR

- `repo_id`, `repo_name`
- `pr_number`, `title`, `body`
- `author`, `author_type`, `merged_at`
- `total_files_changed`, `py_files_count`, `extensions_list`
- `total_additions`, `total_deletions`, `total_changes`

### Enriched PR

- PR 与仓库字段：`pr_id`, `repo_id`, `repo_name`, `repo_description`, `title`, `body`
- `related_issue`：issue 标题、正文、作者、创建时间，以及 `comments[]`
- `changed_py_files`
- `relevant_files[]`：`path`, `content`
- `commits[]`：`sha`, `author`, `timestamp`, `message`, `diffs[]`
- `commits[].diffs[]`：`path`, `patch`

### LLM-enhanced PR

保留上述原始上下文，并增加：

- `pr_summary`
- `commits[].refined_message`

### Task 6 渲染文本

最终训练文本由 repository context、issue discussion、PR intent、相关源码、PR summary、commit 历史、refined commit message 和 patch 组成。交付中的 `rendered_text` 是另一种较短的摘要产物，不应与完整 Task 6 文本混为同一个字段。

## 覆盖规模

PR 唯一键统一使用 `(repo_id, pr_id)`。

| 批次 | 物化行数 | 批内唯一 PR | 唯一 repo | Task 6 估算 tokens |
|---|---:|---:|---:|---:|
| Full | 2,306,948 | 2,298,284 | 82,679 | 49.985B |
| Full2 | 24,492,614 | 24,228,387 | 579,072 | 487.680B |
| Full3 | 12,715,286 | 12,670,426 | 295,194 | 244.845B |
| Full4 | 20,381,883 | 20,273,341 | 510,342 | 355.235B |

- 四批物化总行数：59,896,731
- 各批内部去重后的数量之和：59,470,438
- 四批合并并处理批间重复：59,156,582 个唯一 PR
- 四批覆盖仓库并集：1,423,373 个唯一 repo
- 再移除与曾济已有数据重合的 1,360,946 个联合键后：57,795,636 个最终增量 PR
- 原始 Task 6 容量估算：约 1.138T tokens
- 去重后的最终增量估算：约 1.102T tokens

Token 口径统一为“Task 6 渲染文本字符数 ÷ 4”，用于量级和容量规划，并非 tokenizer 精确计数。

## 数据路径

```text
/inspire/hdd2/project/special-project-1/public/pt-data-yelvshenyu/yelv_synthesis_pr_smoke/full
/inspire/hdd2/project/special-project-1/public/pt-data-yelvshenyu/yelv_synthesis_pr_smoke/full2
/inspire/hdd2/project/special-project-1/public/pt-data-yelvshenyu/yelv_synthesis_pr_smoke/full3
/inspire/hdd2/project/special-project-1/public/pt-data-yelvshenyu/yelv_synthesis_pr_smoke/full4_815
```

统计快照日期：2026-09-06。

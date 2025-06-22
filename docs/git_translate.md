### Git 基本用法  
**usage:** `git` [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]  
     [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]  
     [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]  
     [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]  
     [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]  
     <command> [<args>]  

**以下是常用 Git 命令分类：**  

---

### 创建工作区（另见：`git help tutorial`）  
**start a working area (see also: git help tutorial)**  
| 命令 Command | 说明 Description |  
|-------------|----------------|  
| `clone`     | 将仓库克隆到新目录  
  *Clone a repository into a new directory* |  
| `init`      | 创建空 Git 仓库或重新初始化现有仓库  
  *Create an empty Git repository or reinitialize an existing one* |  

---

### 操作当前变更（另见：`git help everyday`）  
**work on the current change (see also: git help everyday)**  
| 命令 Command      | 说明 Description |  
|------------------|----------------|  
| `add`            | 将文件内容添加到暂存区  
  *Add file contents to the index* |  
| `mv`             | 移动/重命名文件、目录或符号链接  
  *Move or rename a file, a directory, or a symlink* |  
| `restore`        | 恢复工作树文件  
  *Restore working tree files* |  
| `rm`             | 从工作树和暂存区移除文件  
  *Remove files from the working tree and from the index* |  

---

### 检查历史与状态（另见：`git help revisions`）  
**examine the history and state (see also: git help revisions)**  
| 命令 Command | 说明 Description |  
|-------------|----------------|  
| `bisect`    | 用二分查找定位引入 Bug 的提交  
  *Use binary search to find the commit that introduced a bug* |  
| `diff`      | 显示提交之间、提交与工作树等的差异  
  *Show changes between commits, commit and working tree, etc* |  
| `grep`      | 打印匹配模式的行  
  *Print lines matching a pattern* |  
| `log`       | 显示提交日志  
  *Show commit logs* |  
| `show`      | 显示各种对象详情  
  *Show various types of objects* |  
| `status`    | 显示工作树状态  
  *Show the working tree status* |  

---

### 管理历史记录  
**grow, mark and tweak your common history**  
| 命令 Command | 说明 Description |  
|-------------|----------------|  
| `backfill`  | 在部分克隆中下载缺失对象  
  *Download missing objects in a partial clone* |  
| `branch`    | 列出、创建或删除分支  
  *List, create, or delete branches* |  
| `commit`    | 提交仓库变更  
  *Record changes to the repository* |  
| `merge`     | 合并多个开发历史  
  *Join two or more development histories together* |  
| `rebase`    | 在另一基点上重放提交  
  *Reapply commits on top of another base tip* |  
| `reset`     | 将当前 HEAD 重置到指定状态  
  *Reset current HEAD to the specified state* |  
| `switch`    | 切换分支  
  *Switch branches* |  
| `tag`       | 创建、列出、删除或验证 GPG 签名的标签  
  *Create, list, delete or verify a tag object signed with GPG* |  

---

### 协作（另见：`git help workflows`）  
**collaborate (see also: git help workflows)**  
| 命令 Command | 说明 Description |  
|-------------|----------------|  
| `fetch`     | 从其他仓库下载对象和引用  
  *Download objects and refs from another repository* |  
| `pull`      | 拉取并整合远程仓库或本地分支  
  *Fetch from and integrate with another repository or a local branch* |  
| `push`      | 更新远程引用及相关对象  
  *Update remote refs along with associated objects* |  

---

### 帮助提示  
- `git help -a` 和 `git help -g` 列出所有子命令和概念指南。  
  *'git help -a' and 'git help -g' list available subcommands and some concept guides.*  
- 使用 `git help <命令>` 或 `git help <概念>` 查看具体帮助。  
  *See 'git help <command>' or 'git help <concept>' to read about a specific subcommand or concept.*  
- `git help git` 查看系统概览。  
  *See 'git help git' for an overview of the system.*  

---

### 翻译说明：
1. **术语统一**：  
   - `working tree` → **工作树**  
   - `index` → **暂存区**  
   - `objects` → **对象**  
   - `refs` → **引用**  
2. **功能分类标题**：保留英文原意，使用括号标注中文（如“创建工作区”）。  
3. **命令说明**：中文描述注重简洁性，英文保留技术准确性。  
4. **参数格式**：代码块（如`<path>`）和选项（如`--bare`）不翻译，符合开发者习惯。
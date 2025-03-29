/**
 * Logseq 插件主文件
 */

// 主模块
const main = async () => {
  console.log("插件加载成功！");

  // 注册一个简单的斜杠命令
  logseq.Editor.registerSlashCommand(
    '示例命令',
    async () => {
      // 在当前块中插入文字
      await logseq.Editor.insertAtEditingCursor('这是来自我的插件的文字！');
    }
  );

  // 注册 UI 元素
  logseq.provideUI({
    key: 'demo-button',
    path: '#app-container',
    template: `
      <button class="button">点击我</button>
    `,
  });
}

// Logseq 入口点
logseq.ready(main).catch(console.error); 

# java-error-japanese README

This is the README for your extension "java-error-japanese". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

## 使い方の説明

これを元にしてF5で拡張機能開発ホストを開きます。
そして任意のフォルダを選択すると、エラーをRedHatで解析し、それを日本語で表示します。
エラーの内容を増やす時は
function translate(message: string): string
内の

 if (message.includes('エラー文の核となる部分')) {
      return `

  ～エラー内容を記述～

  ${message}
`;
  
  という形で追加できます。
  今後の機能開発として
  ・現在はフォルダ内全てのエラーを取得し通知するので、大量のエラーがある場合、通知が壊れる可能性があり、今後は開いているファイルのみのエラーを表示するように改修するつもりです。
  ・またエラーは随時追加する必要があります。
  ・期限未定ですが、MaketPlaceで公開し、拡張機能として利用できるようにしたいです。

**Enjoy!**

import * as vscode from 'vscode';

function translate(message: string): string {

    if (message.includes('undefined for the type')) {

        return `
【メソッドが存在しません】

原因:
・スペルミス
・存在しないメソッド呼び出し

元のエラー:
${message}
`;
    }

    if (message.includes('cannot be resolved to a variable')) {

        return `
【変数が見つかりません】

原因:
・宣言忘れ
・スペルミス
・スコープ外

元のエラー:
${message}
`;
    }

    return message;
}

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand(
        'java-error-japanese.helloWorld',
        () => {

            const diagnostics =
                vscode.languages.getDiagnostics();

            let result = '';

            for (const [uri, errors] of diagnostics) {

                result += uri.fsPath + '\n';

                for (const error of errors) {

                    result +=
                        translate(error.message) + '\n';
                }
            }

            vscode.window.showInformationMessage(
                result.substring(0, 500)
            );

        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
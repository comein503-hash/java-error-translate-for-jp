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

    if (message.includes('Duplicate local variable')) {

        return `
【同じ名前のローカル変数が重複しています】

元のエラー:
${message}
`;
    }

    if (message.includes('cannot be resolved')) {

        return `
【識別子が見つかりません】


元のエラー:
${message}
`;
    }

    if (message.includes('The method')) {

        return `
【メソッド呼び出しに問題があります】


元のエラー:
${message}
`;
    }

    if (message.includes('is not applicable for the arguments')) {

        return `
【引数の型や個数が一致していません】

元のエラー:
${message}
`;
    }

    if (message.includes('The constructor')) {

        return `
【指定された引数のコンストラクタが存在しません】

元のエラー:
${message}
`;
    }

    if (message.includes('Type mismatch')) {

        return `
【型が一致していません】

元のエラー:
${message}
`;
    }

    if (message.includes('cannot convert')) {

        return `
【型変換できません】

元のエラー:
${message}
`;
    }

    if (message.includes('possible lossy conversion')) {

        return `
【データ欠損の可能性があります】

元のエラー:
${message}
`;
    }

    if (message.includes('has private access')) {

        return `
【privateメンバにはアクセスできません】

元のエラー:
${message}
`;
    }

    if (message.includes('is not visible')) {

        return `
【アクセス権限の問題です】

元のエラー:
${message}
`;
    }

    if (message.includes('Cannot make a static reference')) {

        return `
【static参照の使い方が誤っています】

元のエラー:
${message}
`;
    }

    if (message.includes('cannot override')) {

        return `
【オーバーライドに失敗しています】

元のエラー:
${message}
`;
    }

    if (message.includes('@Override')) {

        return `
【オーバーライド対象が存在しません】

元のエラー:
${message}
`;
    }

    if (message.includes('ArrayIndexOutOfBoundsException')) {

        return `
【配列の範囲外アクセスです】

元のエラー:
${message}
`;
    }

    if (message.includes('IndexOutOfBoundsException')) {

        return `
【インデックスが範囲外です】

元のエラー:
${message}
`;
    }

    if (message.includes('NullPointerException')) {

        return `

【nullを参照しています】

元のエラー:
${message}
`;
    }

    if (message.includes('StringIndexOutOfBoundsException')) {

        return `

【文字列の範囲外アクセスです】

元のエラー:
${message}
`;
    }

    if (message.includes('Syntax error')) {

        return `

【構文エラーです】

元のエラー:
${message}
`;
    }

    if (message.includes('insert ";"')) {

        return `

【セミコロンが不足しています】

元のエラー:
${message}
`;
    }

    if (message.includes('insert ")"')) {

        return `

【閉じ括弧が不足しています】

元のエラー:
${message}
`;
    }

    if (message.includes('insert "}"')) {

        return `

【閉じ波括弧が不足しています】

元のエラー:
${message}
`;
    }

    if (message.includes('cannot be resolved to a type')) {

        return `

【クラスが見つかりません】

元のエラー:
${message}
`;
    }

    if (message.includes('Unhandled exception type')) {

        return `

【例外処理が不足しています】

元のエラー:
${message}
`;
    }

    if (message.includes('FileNotFoundException')) {

        return `

【指定されたファイルが見つかりません】

元のエラー:
${message}
`;
    }

    if (message.includes('No qualifying bean of type')) {

        return `

【Beanが見つかりません】

元のエラー:
${message}
`;
    }

    if (message.includes('APPLICATION FAILED TO START')) {

        return `

【Spring Bootの起動に失敗しました】

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

            const editor = vscode.window.activeTextEditor;

            if (!editor) {

                vscode.window.showInformationMessage(
                    'ファイルが開かれていません'
                );

                return;
            }

            const uri = editor.document.uri;

            const diagnostics =
                vscode.languages.getDiagnostics(uri);

            let result = '';

            result += uri.fsPath + '\n\n';

            for (const error of diagnostics) {

                result +=
                    translate(error.message) + '\n\n';
            }

            vscode.window.showInformationMessage(
                result.substring(0, 500)
            );

        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() { }
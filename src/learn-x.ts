import * as vscode from "vscode";

export class LearnXProvider implements vscode.TextDocumentContentProvider {
    private _onDidChange = new vscode.EventEmitter<vscode.Uri>();

    public provideTextDocumentContent(uri: vscode.Uri): string {
        return this.createCssSnippet();
    }

    get onDidChange(): vscode.Event<vscode.Uri> {
        return this._onDidChange.event;
    }

    public update(uri: vscode.Uri) {
        //this._onDidChange.fire(uri);
    }

    private createCssSnippet() {
        return `
                <html>
                    <head>
                        <style>
                            body {
                                padding: 0;
                                background: white;
                            }
                            iframe {
                                position: absolute; 
                                width: 100%;
                                height: 100%;
                                border: none;
                                margin: 0 auto;
                                -webkit-transform:scale(0.85);
                                -moz-transform-scale(0.85);
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="https://learnxinyminutes.com"/>
                    </body>
                </html>
            `;
    }
}
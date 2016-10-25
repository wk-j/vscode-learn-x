'use strict';

import * as vscode from "vscode";
import { LearnXProvider } from "./learn-x";

export function activate(context: vscode.ExtensionContext) {
    let previewUri = vscode.Uri.parse('learn-x-preview://authority/css-preview');
    let provider = new LearnXProvider();
    let registration = vscode.workspace.registerTextDocumentContentProvider('learn-x-preview', provider);

    let disposable = vscode.commands.registerCommand('extension.learnX.showPreview', () => {
        return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'Learn X in Y minutes').then((success) => {
        }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });

    context.subscriptions.push(disposable, registration);
}

export function deactivate() {
}
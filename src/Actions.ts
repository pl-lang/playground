import { Errors, Value, S3 } from 'interprete-pl'

export enum ActionKind {
    Execute,
    Step,
    MoveCursor,
    DragHandle,
    ShowMessage,
    ClearMessages,
    SendInput,
    Write,
    ClearOutput,
    ShowCompiledCode,
    ExecuteBySteps,
    StopExecution,
    CompileAndShow,
    StopExecutionWithError,
    StopExecutionUser,
    FocusEditor,
    DisableButtons,
    EnableButtons,
    HidePanel,
    ShowPanel,
    SendVarName,
    UpdateVars,
    RemoveVarFromInspection,
    RemoveMsgFromInspection,
}

export type Action = Execute
    | Step
    | MoveCursor
    | DragHandle
    | ShowMessage
    | ClearMessages
    | SendInput
    | Write
    | ClearOutput
    | ShowCompiledCode
    | ExecuteBySteps
    | StopExecution
    | CompileAndShow
    | StopExecutionWithError
    | StopExecutionUser
    | FocusEditor
    | DisableButtons
    | EnableButtons
    | HidePanel
    | ShowPanel
    | SendVarName
    | UpdateVars
    | RemoveVarFromInspection
    | RemoveMsgFromInspection;

export interface RemoveMsgFromInspection {
    kind: ActionKind.RemoveMsgFromInspection
    name: string
}

export interface RemoveVarFromInspection {
    kind: ActionKind.RemoveVarFromInspection
    name: string
}

export interface UpdateVars {
    kind: ActionKind.UpdateVars
}

export interface SendVarName {
    kind: ActionKind.SendVarName
    name: string
}

export interface ShowPanel {
    kind: ActionKind.ShowPanel
    container_index: number
    panel_index: number
}

export interface HidePanel {
    kind: ActionKind.HidePanel
    container_index: number
    panel_index: number
}

export interface EnableButtons {
    kind: ActionKind.EnableButtons
}

export interface DisableButtons {
    kind: ActionKind.DisableButtons
}

export interface FocusEditor {
    kind: ActionKind.FocusEditor
}

export interface StopExecutionWithError {
    kind: ActionKind.StopExecutionWithError
}

export interface StopExecutionUser {
    kind: ActionKind.StopExecutionUser
}
export interface CompileAndShow {
    kind: ActionKind.CompileAndShow
    code: string
}

export interface StopExecution {
    kind: ActionKind.StopExecution
}

export interface ExecuteBySteps {
    kind: ActionKind.ExecuteBySteps
    code: string
}

export interface ShowCompiledCode {
    kind: ActionKind.ShowCompiledCode
    code: string
}

export interface ClearOutput {
    kind: ActionKind.ClearOutput
}

export interface Write {
    kind: ActionKind.Write
    value: Value
}

export interface SendInput {
    kind: ActionKind.SendInput
    input: string
}

export interface Execute {
    kind: ActionKind.Execute
    code: string
}

export interface Step {
    kind: ActionKind.Step
}

export interface MoveCursor {
    kind: ActionKind.MoveCursor
    line: number
    column: number
}

export interface DragHandle {
    kind: ActionKind.DragHandle
    from: { x: number, y: number }
    to: { x: number, y: number }
}

export interface ShowMessage {
    kind: ActionKind.ShowMessage
    message: Errors.Base
}

export interface ClearMessages {
    kind: ActionKind.ClearMessages
}
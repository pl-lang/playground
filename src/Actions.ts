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
    SetUpInterpreter,
    ExecuteBySteps,
    StopExecution,
    CompileAndShow,
    StopExecutionWithError,
    StopExecutionUser,
    FocusEditor,
    DisableButtons,
    EnableButtons,
    RemovePanel
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
    | SetUpInterpreter
    | ExecuteBySteps
    | StopExecution
    | CompileAndShow
    | StopExecutionWithError
    | StopExecutionUser
    | FocusEditor
    | DisableButtons
    | EnableButtons;

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

export interface SetUpInterpreter {
    kind: ActionKind.SetUpInterpreter
    program: S3.Program
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
import { invoke as tauriInvoke } from "@tauri-apps/api/core";

type InvokeArgs = Record<string, unknown> | undefined;

export async function invoke<TResponse = unknown>(
  command: string,
  args?: InvokeArgs,
): Promise<TResponse> {
  try {
    return await tauriInvoke<TResponse>(command, args);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Tauri invoke error";
    throw new Error(`[tauriService.invoke] ${command}: ${message}`);
  }
}

export async function createWindow(): Promise<void> {
  await invoke<void>("create_window");
}

#[tauri::command]
pub fn create_window(app: tauri::AppHandle) -> Result<(), String> {
    let label = format!("window-{}", now_millis());

    tauri::WebviewWindowBuilder::new(
        &app,
        label,
        tauri::WebviewUrl::App("index.html".into()),
    )
    .title("New Window")
        .center()
        .focused(true)
        .decorations(false)
    .build()
    .map_err(|error| error.to_string())?;

    Ok(())
}

fn now_millis() -> u128 {
    use std::time::{SystemTime, UNIX_EPOCH};

    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_millis())
        .unwrap_or(0)
}

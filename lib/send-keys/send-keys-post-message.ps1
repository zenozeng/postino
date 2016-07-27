[CmdletBinding()]
Param()
Add-Type @"
  using System;
  using System.Runtime.InteropServices;
  public class User32 {
    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();

    [DllImport("user32.dll", SetLastError=true)]
    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);
}
"@

for (;;) {
    try {
        $ActiveHandle = [User32]::GetForegroundWindow()
        $ThreadProcessId = 0
        [User32]::GetWindowThreadProcessId($ActiveHandle, [ref] $ThreadProcessId)
        Write-Host "Process: $ThreadProcessId"
    } catch {
        Write-Error "Failed to get active Window details. More Info: $_"
    }
    Start-Sleep -s 3
}


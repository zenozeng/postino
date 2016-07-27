[CmdletBinding()]
Param()
Add-Type @"
    using System;
    using System.Runtime.InteropServices;
    public class User32 {
        [DllImport("user32.dll")]
        public static extern IntPtr GetForegroundWindow();

        [DllImport("user32.dll")]
        public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);

        [DllImport("user32.dll")]
        public static extern bool AttachThreadInput(uint idAttach, uint idAttachTo, bool fAttach);
    }

    public class Kernel32 {
        [DllImport("Kernel32.dll")]
        public static extern uint GetCurrentThreadId();
    }
"@

[void] [System.Reflection.Assembly]::LoadWithPartialName("'System.Windows.Forms")


for (;;) {
    try {
        $ActiveHandle = [User32]::GetForegroundWindow()
        $TargetThreadProcessId = 0
        [User32]::GetWindowThreadProcessId($ActiveHandle, [ref] $TargetThreadProcessId)
        $CurrentThreadId = [Kernel32]::GetCurrentThreadId()
        [User32]::AttachThreadInput($CurrentThreadId, $TargetThreadProcessId, $TRUE); # attach
        Write-Host "Process: $TargetThreadProcessId"
        [System.Windows.Forms.SendKeys]::SendWait("{Home}")
        [User32]::AttachThreadInput($CurrentThreadId, $TargetThreadProcessId, $FALSE); # detach
    } catch {
        Write-Error "Failed to get active Window details. More Info: $_"
    }
    Start-Sleep -s 3
}


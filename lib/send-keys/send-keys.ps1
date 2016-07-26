[void] [System.Reflection.Assembly]::LoadWithPartialName("'System.Windows.Forms")

For (;;) {
    $Key = Read-Host
    [System.Windows.Forms.SendKeys]::SendWait($Key)
}
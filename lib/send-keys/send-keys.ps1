[void] [System.Reflection.Assembly]::LoadWithPartialName("'System.Windows.Forms")

$Key = Read-Host
Write-Host $Key
[System.Windows.Forms.SendKeys]::SendWait($Key)

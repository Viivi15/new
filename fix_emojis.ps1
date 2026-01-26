# Fix emoji encoding in new.js
Write-Host "Fixing emoji encoding..." -ForegroundColor Cyan

# Read with UTF8
$content = [System.IO.File]::ReadAllText("d:\recents\new\new.js", [System.Text.Encoding]::UTF8)

# Replace corrupted emojis with correct ones
$replacements = @{
    'ðŸ¤—' = '🤗'
    'ðŸ'Ž' = '💎'
    'ðŸ"' = '📁'
    'âœ¨' = '✨'
    'ðŸŒŠ' = '🌊'
    'ðŸ'§' = '💧'
    'ðŸ'€' = '👀'
    'ðŸ'ï¸' = '👁️'
    'ðŸš¶' = '🚶'
    'ðŸŽµ' = '🎵'
    'ðŸ§¹' = '🧹'
    'ðŸ'­' = '💭'
    'ðŸ§©' = '🧩'
    'ðŸ˜„' = '😄'
    'ðŸ"œ' = '📜'
    'ðŸ–±ï¸' = '🖱️'
    'ðŸ"' = '🔐'
    'ðŸ¤"' = '🤔'
    'ðŸŒ™' = '🌙'
    'ðŸ'•' = '💕'
    'ðŸ¥°' = '🥰'
    'ðŸ'¦' = '💦'
    'ðŸ˜Š' = '😊'
    'â­' = '⭐'
    'ðŸ½ï¸' = '🍽️'
    'ðŸ§˜' = '🧘'
    'ðŸ'™' = '💙'
    'â˜€ï¸' = '☀️'
    'ðŸŒ¤ï¸' = '🌤️'
    'ðŸŒƒ' = '🌃'
    'âŒ' = '⏰'
    'ðŸŒŸ' = '🌟'
    'ðŸ'Œ' = '💌'
    'ðŸŽ‰' = '🎉'
    'âœ…' = '✅'
    'ðŸŒ±' = '🌱'
    'ðŸŽ§' = '🎧'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

# Write with UTF8 BOM
[System.IO.File]::WriteAllText("d:\recents\new\new.js", $content, [System.Text.UTF8Encoding]::new($true))

Write-Host "✅ Emojis fixed! Refresh your browser." -ForegroundColor Green

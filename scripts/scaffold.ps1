# This script creates the complete organized folder structure for Swasthya Sathi AI

$root = "d:\SWASTHYA SATHI AI"

# ============================================================
# FRONTEND
# ============================================================
$frontendDirs = @(
    "frontend\public",
    "frontend\src\assets\images",
    "frontend\src\assets\icons",
    "frontend\src\assets\fonts",
    "frontend\src\assets\lottie",
    # Components
    "frontend\src\components\chat",
    "frontend\src\components\voice",
    "frontend\src\components\hospital",
    "frontend\src\components\health-hub",
    "frontend\src\components\dashboard",
    "frontend\src\components\animations",
    "frontend\src\components\charts",
    "frontend\src\components\forms",
    "frontend\src\components\modals",
    "frontend\src\components\layouts",
    "frontend\src\components\providers",
    "frontend\src\components\common",
    "frontend\src\components\ui",
    # Pages
    "frontend\src\pages\dashboard",
    # Other src dirs
    "frontend\src\hooks",
    "frontend\src\context",
    "frontend\src\services",
    "frontend\src\utils",
    "frontend\src\types",
    "frontend\src\lib",
    "frontend\src\routes",
    "frontend\src\i18n\locales\en",
    "frontend\src\i18n\locales\hi",
    "frontend\src\i18n\locales\or"
)

# ============================================================
# ADMIN PANEL
# ============================================================
$adminDirs = @(
    "admin-panel\src\pages\Users",
    "admin-panel\src\pages\Knowledge",
    "admin-panel\src\pages\Hospitals",
    "admin-panel\src\pages\Schemes",
    "admin-panel\src\pages\Feedback",
    "admin-panel\src\pages\Analytics",
    "admin-panel\src\pages\Settings",
    "admin-panel\src\components"
)

# ============================================================
# BACKEND (Python FastAPI)
# ============================================================
$backendDirs = @(
    "backend\app\auth",
    "backend\app\api",
    "backend\app\services",
    "backend\app\repositories",
    "backend\app\ai_engine\nodes",
    "backend\app\ai_engine\prompts",
    "backend\app\ai_engine\tools",
    "backend\app\ai_engine\memory",
    "backend\app\ai_engine\validators",
    "backend\app\ai_engine\workflows",
    "backend\app\ai_engine\agents",
    "backend\app\integrations",
    "backend\app\models",
    "backend\app\middleware",
    "backend\app\webhooks"
)

# ============================================================
# KNOWLEDGE BASE
# ============================================================
$kbDirs = @(
    "knowledge_base\diseases",
    "knowledge_base\symptoms",
    "knowledge_base\prevention",
    "knowledge_base\maternal_health",
    "knowledge_base\child_health",
    "knowledge_base\women_health",
    "knowledge_base\elderly_health",
    "knowledge_base\emergency_first_aid",
    "knowledge_base\government_schemes",
    "knowledge_base\hospitals",
    "knowledge_base\faq",
    "knowledge_base\myths_and_facts",
    "knowledge_base\ingestion"
)

# ============================================================
# DATABASE, SCRIPTS, DOCS, TESTS, GITHUB
# ============================================================
$otherDirs = @(
    "database\mongodb\seed_data",
    "database\chromadb\collections",
    "scripts",
    "docs\architecture_diagrams",
    "docs\knowledge_base_prompts",
    "tests\backend\test_api",
    "tests\backend\test_ai_engine",
    "tests\frontend",
    ".github\workflows"
)

# Combine all and create
$allDirs = $frontendDirs + $adminDirs + $backendDirs + $kbDirs + $otherDirs

foreach ($dir in $allDirs) {
    $fullPath = Join-Path $root $dir
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
    }
}

# Create .gitkeep in leaf directories to preserve empty folders
foreach ($dir in $allDirs) {
    $fullPath = Join-Path $root $dir
    $gitkeep = Join-Path $fullPath ".gitkeep"
    if (-not (Test-Path $gitkeep)) {
        New-Item -ItemType File -Path $gitkeep -Force | Out-Null
    }
}

Write-Host "Complete folder structure created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Structure created at: $root" -ForegroundColor Cyan

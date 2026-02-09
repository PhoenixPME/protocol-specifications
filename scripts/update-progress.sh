#!/bin/bash
# Weekly progress updater for PhoenixPME

cd /home/greg/coreum-pme

echo "=== UPDATING PROGRESS REPORT ==="
echo ""

# Backup current progress
cp PROGRESS.md PROGRESS.md.backup

# Get latest metrics
CURRENT_DATE=$(date)
LAST_COMMIT=$(git log -1 --format="%ad" --date=short)
TOTAL_COMMITS=$(git rev-list --count HEAD)
WEEKLY_COMMITS=$(git log --since="1 week ago" --oneline | wc -l)

# Update the status section
sed -i "s/Last Updated:.*/Last Updated: $CURRENT_DATE/" PROGRESS.md

# Update development metrics
sed -i "s/Last Commit:.*/Last Commit: $LAST_COMMIT/" PROGRESS.md

echo "✅ Progress report updated"
echo "   Date: $CURRENT_DATE"
echo "   Weekly commits: $WEEKLY_COMMITS"
echo "   Total commits: $TOTAL_COMMITS"

# Commit and push
git add PROGRESS.md
git commit -m "Progress update: $CURRENT_DATE"
git push origin main

echo "✅ Pushed to GitHub"

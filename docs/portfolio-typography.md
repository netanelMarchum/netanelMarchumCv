# Portfolio display typography — awaiting licensed webfonts

The approved pairing is Coolvetica for headings, Stretch Pro for the short contact headline, and the existing Geist face for body text, navigation, and supporting UI.

This branch prepares those roles only. The selected fonts are not bundled or rendered yet; the existing Space Grotesk and Geist files remain the fallbacks. Do not merge this as a completed font replacement.

## Assets needed to complete

Supply Coolvetica Regular and Stretch Pro WOFF2 files with permission covering web embedding on netanel.online. A desktop license or the free personal-use downloads alone is insufficient. No purchase has been made.

Sources checked:
- https://www.dafont.com/coolvetica.font
- https://www.dafont.com/stretch-pro.font

After obtaining the licensed files, register distinct families `Portfolio Coolvetica` and `Portfolio Stretch Pro` with `font-display: swap` in HomePortfolio.css. Keep these faces portfolio-specific. Coolvetica Regular and Stretch Pro should use their actual weight (400), rather than synthetic bold. Recheck wrapping with the actual assets at 375, 430, 768, 1024, 1440, and 1920px before merging.

All proposed style changes are scoped to `.home-portfolio`. No shared typography, route configuration, or Studio implementation is changed.

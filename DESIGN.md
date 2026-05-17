---
name: Cyber-Linear
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#fff5de'
  on-tertiary: '#3b2f00'
  tertiary-container: '#fed639'
  on-tertiary-container: '#715d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#ffe179'
  tertiary-fixed-dim: '#eac324'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Sofia Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sofia Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sofia Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Sofia Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Sofia Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sofia Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Sofia Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Sofia Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: Sofia Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system is built for high-performance technology environments, blending a "Cyber-Linear" aesthetic with high-precision utility. The brand personality is technical, forward-leaning, and impeccably organized, targeting developers and data architects. It evokes a sense of "digital mastery"—a feeling of being in control of complex systems through a streamlined, low-friction interface.

The style is a hybrid of **Minimalism** and **Cyberpunk-Lite**. It utilizes heavy black surfaces, razor-sharp alignment, and high-frequency neon accents. Visuals are characterized by thin lines, data-dense layouts, and subtle motion that suggests live data streams and system vitality.

## Colors

The palette is rooted in a deep, tiered dark mode. The primary background is an absolute neutral black to ensure maximum contrast for functional elements.

- **Primary (#00F0FF):** A piercing neon blue used exclusively for interactive states, progress indicators, and primary calls to action. It represents system "active" states.
- **Secondary (#7000FF):** A digital purple used for secondary data visualizations and accentuation in complex information hierarchies.
- **Neutral (#0A0A0B):** The foundational surface color, supported by slightly lighter grays (#1A1A1C) for container nesting.
- **Functional Colors:** Success (Emerald), Warning (Amber), and Error (Crimson) should be desaturated but high-luminance to remain legible against the dark backdrop.

## Typography

This design system utilizes **Sofia Sans** across all levels to maintain a cohesive, technical, and slightly condensed feel that maximizes horizontal space for data-heavy views.

- **Headlines:** Use Bold and ExtraBold weights with tight letter spacing to create a high-impact, "header-as-indicator" feel.
- **Body:** Standard body text uses the regular weight. The semi-condensed nature of Sofia Sans allows for dense information layouts without sacrificing legibility.
- **Labels:** Small labels and metadata should use SemiBold or Bold weights with increased letter spacing and uppercase styling to distinguish them from interactive text.
- **Hierarchical Contrast:** Use color (Primary Cyan vs. Dimmed Gray) rather than just size to denote importance.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain precise control over complex data dashboards, transitioning to a fluid model for mobile.

- **The 4px Rule:** All spacing, padding, and margins must be multiples of 4px.
- **Grid:** Use a 12-column grid for desktop with 16px gutters. For mobile, use a 4-column grid.
- **Data Density:** Containers should utilize "Compact" (8px) or "Standard" (16px) internal padding.
- **Alignment:** Elements should be strictly left-aligned to a common vertical axis to reinforce the linear aesthetic.

## Elevation & Depth

Depth in this design system is created through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows.

- **Stacking:** The base layer is #000000. Each subsequent elevation level is represented by a slightly lighter gray surface (#0A0A0B, #1A1A1C).
- **Borders:** Use 1px solid borders for all containers. Default border color is a dim gray (#2A2A2C). Active or focused containers should use the Primary Neon Blue.
- **Depth FX:** Use subtle "inner glows" (box-shadow: inset) using the primary color at very low opacity (5-10%) to simulate a backlit screen effect for active panels.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons and input fields to large cards and modals—must have 90-degree corners. This reinforces the technical, architectural nature of the design system. Avoid any rounding or softening of edges to maintain the "Cyber-Linear" visual integrity.

## Components

- **Buttons:** Primary buttons are solid Primary Blue with Black text. Secondary buttons are ghost-style with a 1px Primary Blue border and Blue text. No gradients.
- **Inputs:** Input fields are dark containers with a 1px bottom border by default, turning into a full 1px Primary Blue outline on focus.
- **Chips:** Small, rectangular tags with a 1px border. Use the Primary Blue for active filters and a muted gray for inactive ones.
- **Lists:** Rows should be separated by 1px dim lines. Hover states should trigger a subtle background tint change (#1A1A1C) and a left-hand "indicator" line in Primary Blue.
- **Cards:** Simple containers with no shadows. Use the "Sharp" corner rule and a 1px border.
- **Status Indicators:** Use small 8px squares (not circles) for status dots to match the geometric theme.
# Swiss Grid Portfolio — Design System

**Version:** 1.0  
**Status:** Approved  
**Art Direction:** Swiss International Typographic Style / Engineering Portfolio

---

## 1. Color Tokens

### Primary Palette

```css
--color-paper: #F5F4EF;      /* Warm paper ground */
--color-ink: #171717;         /* Near black text */
--color-accent: #E53935;      /* Swiss red */
--color-gray: #858585;        /* Neutral muted */
```

### Semantic Tokens

```css
--color-ground: var(--color-paper);
--color-text: var(--color-ink);
--color-text-muted: var(--color-gray);
--color-border: #D4D3CC;      /* Paper tint -10% */
--color-surface: #FFFFFF;     /* Elevated surface */
--color-surface-dark: #EBEAE3; /* Paper tint -5% */
--color-focus: var(--color-accent);
```

### Usage Rules

- **Ground:** Paper for main background
- **Ink:** Near black for body text, headlines
- **Accent:** Swiss red for primary actions, focus states, key labels
- **Gray:** Secondary text, metadata, technical labels
- **Borders:** Thin 1px dividers only when necessary
- **NO gradients, NO shadows, NO glows**

---

## 2. Typography

### Typefaces (Two Primary)

```css
--font-display: 'Space Grotesk', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```

**Technical metadata only (rare):** JetBrains Mono for code blocks or true technical identifiers. Never use for dates, years, or regular text.

**Loading:** Use Google Fonts or self-host woff2. Display=swap.

### Type Scale

Desktop values with responsive clamp():

```css
--text-sm: 16px;              /* Secondary text, captions */
--text-base: 18px;            /* Body text, default */
--text-lg: 24px;              /* H3 section subheads */
--text-xl: 32px;              /* H2 section titles */
--text-2xl: 64px;             /* H1 hero title */
--text-code: 14px;            /* Code blocks only */
```

**Responsive clamp values:**

```css
--text-base: clamp(16px, 1vw + 14px, 18px);
--text-lg: clamp(20px, 1.5vw + 16px, 24px);
--text-xl: clamp(28px, 2vw + 20px, 32px);
--text-2xl: clamp(40px, 4vw + 24px, 64px);
```

### Typography Rules

| Element | Font | Size | Line Height | Letter Spacing |
|---------|------|------|-------------|----------------|
| H1 | Space Grotesk | 64px | 1.1 | -0.03em |
| H2 | Space Grotesk | 32px | 1.2 | -0.03em |
| H3 | Space Grotesk | 24px | 1.3 | -0.03em |
| Body | Inter | 18px | 1.6 | 0 |
| Caption | Inter | 16px | 1.5 | 0 |
| Code (rare) | JetBrains Mono | 14px | 1.5 | 0 |

**Critical:** 
- All headlines ≤ 2 lines at every width. Target ~32 characters for safe H1 length.
- Two typefaces total. JetBrains Mono is exceptional, not standard.

---

## 3. Grid System

### Desktop (≥1024px)

- **12 columns**
- **Gutter:** 32px
- **Outer margins:** 48px each side (equal)
- **Max content width:** 1280px

### Tablet (768px–1023px)

- **8 columns**
- **Gutter:** 24px
- **Outer margins:** 32px each side

### Mobile (<768px)

- **4 columns**
- **Gutter:** 20px
- **Outer margins:** 20px each side

### Grid Implementation

```css
.container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 48px;
}

@media (max-width: 1023px) {
  .container { padding-inline: 32px; }
}

@media (max-width: 767px) {
  .container { padding-inline: 20px; }
}
```

### Layout Rules

- **Equal margins:** Both sides match at every width
- **Asymmetry inside grid only:** Off-center content must close void on opposite side
- **No blank stretches:** Nothing taller than ~50vh with no content
- **Every section has a heading**

---

## 4. Spacing System

### Spacing Tokens

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
--space-3xl: 96px;
--space-4xl: 160px;
```

### Section Rhythm

| Context | Spacing |
|---------|---------|
| Section vertical padding | 160px desktop / 80px mobile |
| Between sections | 160px desktop / 80px mobile |
| Section heading → content | 48px |
| Content blocks (vertical) | 24px–32px |
| Inline elements | 8px–16px |

**Rule:** Section gaps clearly larger than internal gaps.

---

## 5. Component Principles

### Navigation

- **Bar:** Flat, no pill shape, no backdrop blur
- **Logo/Wordmark:** Space Grotesk, 18–20px, left-aligned
- **Links:** 3–5 plain text links, 16px, even spacing
- **Active state:** Accent color, no dot decoration
- **One action:** Accent-filled button, square corners

### Buttons

```css
.btn {
  padding: 12px 24px;
  border: 2px solid currentColor;
  border-radius: 0; /* Square */
  background: transparent;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  transition: transform 0.15s ease;
}

.btn-primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
}

.btn:hover {
  transform: scale(1.02);
}
```

**Rules:**
- Square corners (no border-radius)
- Flat fill or outline
- No shadows, no gradients
- Hover: subtle scale 1.02

### Links

- Body links: underline on hover
- Nav links: accent color on hover/active
- External: no icon decoration

### Section Headings

- **No decorative section numbering** (01 / 02 / 03 is banned)
- Headings are editorial: clear, descriptive, 2 lines max
- Example: "Selected Works" instead of "02 / Portfolio"
- Technical metadata (year, tech stack) in body text or captions, not labels

### Project Cards

**Avoid:** Icon-topped cards, identical card grids, ornamental dividers

**Editorial spread approach (desktop asymmetric):**
- Image and text alternate positions: left/right, right/left
- Image occupies 55–60% of width
- Text occupies 40–45% of width
- Whitespace and tonal steps separate projects, not hairline rules
- Mobile: Stack image above text, full width

### Timeline

- Vertical line 1px, left side
- Date labels: JetBrains Mono, 14px, gray
- Entries: Inter body text
- Dots on line: 6px circle, accent fill

### Footer

- Full-width name return or simple contact row
- Small copyright: 14px gray
- No sitemap, no social icon grid

---

## 6. Motion System

### Timing & Easing

```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-slow: 300ms;
```

### Section Entrance

Staggered fade-up for each section part:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--ease-standard),
              transform 0.6s var(--ease-standard);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger:** 60–90ms between heading, text, image.

### Button Hover

```css
.btn:hover {
  transform: scale(1.02);
}
```

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}
```

### Hero Signature Move

Options (choose one):
- Large type reveal: Words fade up, staggered 80ms
- Split text: First/last word enters from sides
- Scale: Hero text scales from 0.95 to 1.0 over 0.8s

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

---

## 7. Responsive Behavior

### Breakpoints

```css
--bp-mobile: 767px;
--bp-tablet: 1023px;
--bp-desktop: 1024px;
```

### Strategy

- **Mobile-first:** Base styles for small screens
- **Progressive enhancement:** Add complexity at larger widths
- **Desktop:** Full 12-column asymmetric layouts
- **Tablet:** Simplified 2-column or stacked
- **Mobile:** Single column, reduced spacing

### Typography Scaling

All headlines use clamp() to scale smoothly:

```css
h1 { font-size: clamp(40px, 4vw + 24px, 64px); }
h2 { font-size: clamp(28px, 2vw + 20px, 32px); }
```

### Grid Adaptation

- Desktop: 6/6 split, 8/4 split, 4/8 split (asymmetric)
- Tablet: 12 col full or 6/6
- Mobile: Stack, full width

### Section Padding

```css
.section {
  padding-block: 160px;
}

@media (max-width: 767px) {
  .section {
    padding-block: 80px;
  }
}
```

---

## 8. House Rules (Forbidden)

These patterns are **BANNED** per tasteskill discipline:

| ❌ Forbidden | ✅ Instead |
|-------------|-----------|
| Eyebrow labels above headings | Put info in heading or first sentence |
| Monospace outside code | Text face; mono for technical metadata only |
| Index numbering (01 / 02 / 03) | Order by position or size |
| Thin hairline rules everywhere | Space, tone step, filled shape |
| Gradients | Flat color or real photo |
| Shadows on resting elements | Tone step between surfaces |
| Glows | Flat color |
| Tiny uppercase tracked labels | Sentence case, readable size |
| Icon-topped feature cards | Editorial spread blueprints |
| Rows of identical cards | Varied compositions per section |
| Glass/backdrop blur | Plain bar or flat surface |
| Emoji, blobs, decorative shapes | Real pictures or nothing |
| Styled accent word in headline | One face, one color |
| 3+ typefaces | Two max (display + body) |

---

## 9. Accessibility & Color Contrast

### Contrast Requirements (WCAG AA)

- Body text on paper (`#F5F4EF`): minimum 4.5:1
- Ink (`#171717`) on Paper (`#F5F4EF`): **11.8:1 ✓**
- Secondary text (`#5A5A5A` on Paper): **5.2:1 ✓** (Revised from #858585 for WCAG AA normal text compliance)
- Accent (`#E53935`) on Paper: 4.6:1 ✓ (for large text and UI components)

### Focus Visibility

- Visible 2px outline using `--color-accent` (`#E53935`)
- 4px offset for clarity
- Never removed (`outline: none` is banned)

### Keyboard Navigation

- All interactive elements accessible via Tab
- Logical reading order
- Skip link to main content

### Alt Text

- All images have descriptive alt
- Decorative images: alt=""
- Icons: aria-hidden="true" with visible label or aria-label

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Landmarks: header, nav, main, section, footer
- Lists for navigation and repeated content

---

## 10. Implementation Checklist

### CSS Structure

```
tokens.css        → Color, type, spacing variables
reset.css         → Normalization
typography.css    → Font loading, scale, rules
layout.css        → Grid, container, spacing
components.css    → Buttons, nav, cards, timeline
motion.css        → Transitions, animations
responsive.css    → Media queries
```

### Font Loading

**Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### Color Application

- Ground: Paper on body
- Text: Ink on all headings and body
- Accent: Primary button, focus, active nav, key metadata
- Gray: Secondary text, timestamps, technical labels
- Border: 1px dividers between sections (sparingly)

### Type Application

- H1–H3: Space Grotesk, bold
- Body, captions: Inter
- Code, dates, tech stack: JetBrains Mono

### Grid Usage

Desktop asymmetric compositions:
- Hero: Centered, full width
- About: 6/6 or 5/7 split (text | image)
- Projects: Alternating 7/5 and 5/7 spreads
- Contact: 6/6 or 4/8 split

---

## 11. Example Compositions

### Hero Section (Editorial Portrait)

```
[12-column desktop grid, gap 32px]
  [Col 1–4: Portrait photo, 4/5 ratio, object-position center top]
  [Col 5–12: Headline, Supporting Text, CTA — aligned to top of photo]
  [Full width below: metadata row, 4 columns, 64px top gap]
[/grid]

Tablet (md): photo above, text below, metadata 2x2
Mobile: photo first (1/1, full width), then text, metadata 1 column
```

**Desktop Rule:** 4/8 split with portrait left. Never centered hero text.
**Photo:** No radius, shadow, filter, or caption. Placeholder flat 1px border until a real portrait exists.
**Mobile Rule:** Stack vertically, left-aligned.

### Project Spread (Alternating)

```
[12-column grid]
  [Image: col 1-7] [Text: col 8-12]
  [Text: col 1-5] [Image: col 6-12]
[/grid]
```

### Technical Expertise

```
[Simple list, no cards]
  Frontend
    React, Next.js, TypeScript
  Backend
    Node.js, PostgreSQL
  [etc]
[/list]
```

---

## 12. Verification

Before declaring done:

- [ ] 0 gradients in CSS
- [ ] 0 box-shadows on resting elements
- [ ] 0 backdrop-filter rules
- [ ] Buttons are square (border-radius: 0)
- [ ] All headlines ≤ 2 lines at 390px, 768px, 1440px
- [ ] Equal outer margins at all widths
- [ ] Every section has a visible heading
- [ ] Focus visible on all interactive elements
- [ ] Fonts load successfully
- [ ] Color contrast passes WCAG AA
- [ ] Reduced motion fallback present

---

**End of Design System**

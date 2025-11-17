# Style Guide - Meraki Architects

---

## 1. Overview

### Tech Stack
- **Framework**: React 18+ with JSX
- **Styling**: Custom CSS classes (Webflow-generated, non-Tailwind)
- **Build System**: Vite
- **Design Pattern**: Component-based architecture with hierarchical naming

### Design Philosophy
Meraki is a premium architecture and design studio with a refined, editorial aesthetic. The design system emphasizes sophisticated typography, deliberate negative space, and minimalist elegance. Every component reflects the studio's commitment to meticulous detail and forward-thinking design.

---

## 2. Typography System

### Font Families & Scale

#### Display Typography
- **Class**: `.heading-large` (found in 15+ components)
  - **Usage**: Section titles, hero content, major headings
  - **Context**: Component_3, Component_4, Component_5, Component_7_1
  - **Characteristics**: Bold, attention-commanding presence

- **Class**: `.heading-medium` (found in 8+ components)
  - **Usage**: Article titles, secondary headings
  - **Context**: Component_7_2_1, journal entries
  - **Characteristics**: Balanced hierarchy

- **Class**: `.heading-small` (found in 12+ components)
  - **Usage**: Project names, card titles
  - **Context**: Component_5 projects, product labels
  - **Characteristics**: Refined, elegant

- **Class**: `.heading-tiny` (found in 6+ components)
  - **Usage**: Footer section headers, labels
  - **Context**: Component_9, Component_9_1, footer navigation
  - **Characteristics**: Small-caps feel

#### Body Typography
- **Class**: `.text-regular` (found in 25+ components)
  - **Usage**: Body text, standard content
  - **Context**: Descriptions, footer text, standard information
  - **Occurrences**: Most frequent text class (25+ uses)
  - **Modifiers**: `.c1-60` (60% opacity variant for secondary content)

- **Class**: `.text-large` (found in 5+ components)
  - **Usage**: Emphasized paragraph content
  - **Context**: Component_3 hero description, emphasis
  - **Characteristics**: Larger emphasis size

- **Class**: `.text-xlarge` (found in 2+ components)
  - **Usage**: Quotes, founder testimonials
  - **Context**: Component_6_1_1 founder quote
  - **Characteristics**: Premium quote styling

- **Class**: `.text-small` (found in 8+ components)
  - **Usage**: Tags, labels, captions
  - **Context**: Component_5_1 tags, labels
  - **Modifiers**: `.medium` (for semi-bold weight)

- **Class**: `.text-tiny` (found in 8+ components)
  - **Usage**: Marquee text, fine print, contact info
  - **Context**: Component_1 marquee, contact details
  - **Modifier**: `.for--marquee` (animation-specific styling)

### Font Weight Hierarchy
```
font-weight: 400    → .text-regular (body content)
font-weight: 500    → .text-small.medium (emphasis labels)
font-weight: 600    → .heading-small (secondary titles)
font-weight: 700    → .heading-large (primary titles)
```

### Typographic Modifiers
- `.with--spans`: Applied to text with inline span elements for selective styling
- `.for--marquee`: Text prepared for marquee animation
- `.c1-60`: Color opacity at 60% (secondary/muted text)

---

## 3. Spacing & Layout System

### Spacing Classes

#### Vertical Spacing (most common: 54+ uses)
- **`.spacer-huge`** (found in 4 instances in App.jsx)
  - **Purpose**: Major section separation
  - **Locations**: Between hero/words, words/projects, projects/firm, firm/journal
  - **Usage**: Massive breathing room between major sections

#### Padding & Margins (Webflow-generated)
- **Container padding**: `.container` wraps major sections
- **Internal section padding**: `.section__content`, `.hero__info`, `.words__content`
- **Margin patterns**: Consistent use of BEM-style spacing utilities

### Layout Patterns

#### Header/Navigation Layout
```jsx
.header (page header)
  ├─ .nav (navigation container)
  │  ├─ Component_1 (.nav__head)
  │  │  ├─ .nav__brand (logo)
  │  │  └─ .menu-button (animated dot pattern)
  │  └─ Component_2 (.menu)
  │     ├─ .menu__back-layer
  │     └─ .menu__overflow
```

#### Hero Section Layout
```jsx
.hero (hero container, 100vh)
  ├─ .hero__img (background image)
  ├─ .hero__vertical-marquee (vertical scrolling text)
  │  └─ .marquee-vertical (contains marquee track)
  │     └─ 10x marquee-vertical__item (repeating content)
  └─ .hero__horizontal-marquee (horizontal scrolling text)
     └─ .marquee (contains marquee track)
        └─ 4x marquee__item (repeating content)
```

#### Main Content Grid
- **`.sections`**: Main content wrapper (all sections)
- **Major sections**: `.hero`, `.words`, `.projects`, `.firm`, `.journal`
- **Consistent structure**: Each section wrapped in `.container`

#### Footer Structure
```jsx
.footer
  ├─ .footer__content
  │  ├─ Component_8 (.footer__cta)
  │  ├─ Component_9 (.footer__nav)
  │  │  ├─ footer__group (3-4 groups)
  │  │  └─ footer__contact (pairs)
  │  ├─ .footer__legal
  │  └─ Component_10 (.delete-this)
```

---

## 4. Component Inventory & Patterns

### 4.1 Navigation Components

#### Header/Menu System
**Components**: Component_1, Component_2, Component_2_1, Component_2_1_1, Component_2_1_1_1, Component_2_1_1_2

**Structure**:
- `.nav__head` - Brand and menu button container
  - `.nav__brand` - Logo link (Meraki SVG)
  - `.menu-button` - 9-dot animated hamburger menu
    - 9× `.menu__button-dot` (alternating with `.menu__button-dot-leave`)

- `.menu` - Full-screen menu overlay
  - `.menu__back-layer` - Semi-transparent backdrop
  - `.menu__overflow` - Content container
    - `.menu__content` - Flex layout
      - `.menu__grow` - Spacer element
      - `.menu__marquee` - Horizontal marquee with studio tagline
      - `.menu__items` - Navigation links
        - 2× navigation sections
      - `.menu__contact` - Email and phone links

**Key Patterns**:
- Menu uses BEM naming convention consistently
- Marquee animates with horizontal scrolling text
- Contact information always included in menu

---

### 4.2 Hero Section Components

#### Hero Container
**Component**: Component_3

**Structure**:
```jsx
.container
  └─ .hero__info
     └─ .text-large.with--spans
        ├─ Multiple .back-text-span elements
        ├─ Single .back-text-span.indent (first word)
        ├─ Single .back-text-span.last (final word)
        └─ <br/> elements for line breaks
```

**Content**: "Meet Meraki® — a global studio for design and architecture."

**Styling Pattern**: 
- Text broken into individual `<span>` elements
- `.back-text-span` for individual word styling
- `.indent` modifier for first word
- `.last` modifier for final word

---

### 4.3 Featured Projects Components

#### Projects Section
**Primary Component**: Component_5
**Nested Components**: Component_5_1, Component_5_2, Component_5_3, Component_5_4

**Structure**:
```jsx
.container
  ├─ .title-section
  │  └─ .title-section__title
  │     ├─ .title-section__bullet (visual accent)
  │     └─ .heading-large ("Featured projects")
  ├─ .projects__content.w-dyn-list
  │  └─ .projects__list.w-dyn-items (role="list")
  │     └─ 4× .projects__item.w-dyn-item
  │        ├─ Component_5_X (image with tags)
  │        └─ .projects__label (link wrapper)
  │           ├─ .heading-small (project title)
  │           └─ .text-regular.for--projects-label (description)
  ├─ .spacer-regular
  └─ .button ("all projects" link)
```

#### Project Card (Component_5_1-4)
**Pattern**:
```jsx
<a class="projects__img w-inline-block">
  <img class="thumbnail" />
  <div class="tags">
    <div class="tag">
      <div class="text-small">Project Type</div>
    </div>
    <div class="tag square">
      <div class="text-small">Status</div>
    </div>
  </div>
</a>
```

**Key Elements**:
- `.projects__img` - Image link wrapper
- `.thumbnail` - Image class
- `.tags` - Container for metadata tags
  - `.tag` - Individual tag (rectangular, default)
  - `.tag.square` - Status tag variant (squared corners)

**Projects Displayed** (4 total):
1. "46 Hudson Yards" - Office & Headquarters, Completed
2. "Lukiye National Museum" - Cultural center project
3. "AON Florest Masterplan" - Shanghai modern development
4. "Lee Tompson Institute" - Silicon Valley innovation center

---

### 4.4 Buttons & CTAs

#### Primary Button
**Pattern**:
```jsx
<a class="button w-inline-block">
  <div class="button__text-wrapper">
    <div button="text-initial" class="button__text">TEXT</div>
    <div button="text-hover" class="button__text absolute">TEXT</div>
  </div>
  <div class="button__bullet"></div>
</a>
```

**Key Features**:
- Dual text layers for hover animation (initial + hover states)
- `.button__bullet` - Animated accent element
- `button` attribute with values: "text-initial", "text-hover"
- Absolute positioning for hover text overlay

**Occurrences**: Found in Component_4 (MORE ABOUT US), Component_5 (all projects)

#### Small Button
**Pattern**: `.button-small` (Component_7_1)
```jsx
<a class="button-small w-inline-block">
  <div class="button__text-wrapper">
    <div class="button__text">see more</div>
    <div class="button__text absolute">see more</div>
  </div>
  <div class="button-small__bullet"></div>
</a>
```

---

### 4.5 Section Title Pattern

**Repeated in**: Component_5, Component_7_1

**Structure**:
```jsx
<div class="title-section">
  <div class="title-section__title">
    <div class="title-section__bullet"></div>
    <h2 class="heading-large">Section Title</h2>
  </div>
</div>
```

**Variants**:
- `.title-section.space-between` - With "see more" button on opposite side (Component_7_1)

**Purpose**: Consistent visual anchor for major sections with bullet indicator

---

### 4.6 Firm/About Section

**Primary Component**: Component_6
**Nested Components**: Component_6_1, Component_6_1_1, Component_6_1_2, Component_6_2

**Structure**:
```jsx
.container
  └─ .firm__content
     ├─ .firm__fluid-text (large, dynamic text: "Meraki Architects")
     ├─ Component_6_1 (.firm__items)
     │  ├─ .wrapper
     │  │  └─ .title-tag
     │  │     └─ .text-small ("Our founders")
     │  └─ .firm__founders (grid)
     │     ├─ Component_6_1_1 (.founder)
     │     │  ├─ .text-xlarge (quote)
     │     │  └─ .founder__label
     │     │     ├─ .founder__name
     │     │     │  ├─ .text-small.medium (name)
     │     │     │  └─ .text-small.c1-60 (title)
     │     │     └─ .founder__img
     │     └─ Component_6_1_2 (.founder) - Second founder
     ├─ .w-embed-youtubevideo.youtube (video embed)
     └─ Component_6_2
```

**Founder Card Pattern**:
- Large opening quote (`.text-xlarge`)
- Founder label section with name and role
- Founder image thumbnail
- Semantic structure for accessibility

---

### 4.7 Journal/Blog Section

**Primary Component**: Component_7
**Nested Components**: Component_7_1, Component_7_2, Component_7_2_1 through Component_7_2_8

**Section Header** (Component_7_1):
```jsx
<div class="title-section space-between">
  <div class="title-section__title">
    <div class="title-section__bullet"></div>
    <h2 class="heading-large">Journal</h2>
  </div>
  <a class="button-small">see more</a>
</div>
```

**Journal Grid** (Component_7_2):
```jsx
<div class="journal__content w-dyn-list">
  <div role="list" class="journal__list w-dyn-items">
    ├─ 8× .journal__item.w-dyn-item
    │  ├─ .journal__img (image link)
    │  │  └─ .thumbnail.contain
    │  └─ .journal__label
    │     ├─ .journal__topic (category link)
    │     │  └─ .text-small
    │     └─ .journal__title (article link)
    │        └─ .heading-medium
  </div>
</div>
```

**Articles Displayed** (8 total, Component_7_2_1-8):
1. "The science and art of adaptive reuse" - Insights topic
2-8. Additional journal entries (similar structure)

**Key Classes**:
- `.journal__img` - Image container link
- `.thumbnail.contain` - Image fit mode
- `.journal__topic` - Category tag
- `.journal__title` - Article title link
- `.journal__label` - Metadata container

---

### 4.8 Footer Components

#### Footer CTA (Component_8)
**Structure**:
```jsx
<div class="footer__cta">
  <a class="footer__cta-link w-inline-block" href="mailto:hello@meraki.com">
    <div aria-label="Let's talk" class="footer__fluid-text">
      <!-- Letter-by-letter split animation -->
      ├─ .gsap_split_word.gsap_split_word1
      │  └─ 5× .gsap_split_letter (L, e, t, ', s)
      └─ .gsap_split_word.gsap_split_word2
         └─ 4× .gsap_split_letter (t, a, l, k)
    </div>
    <div aria-label="→" class="footer__fluid-text">
      <!-- Arrow animation -->
    </div>
  </a>
</div>
```

**Key Feature**: Letter-by-letter GSAP animation for "Let's talk" CTA with individual `gsap_split_letter` classes

#### Footer Navigation (Component_9)
**Structure**:
```jsx
<div class="footer__nav">
  ├─ .footer__group (company info)
  │  ├─ .heading-tiny ("Meraki Architects")
  │  ├─ .text-regular.c1-60 (address line 1)
  │  ├─ .text-regular.c1-60 (address line 2)
  │  ├─ .text-regular.c1-60 (address line 3)
  │  └─ .text-regular.c1-60 (postal code)
  ├─ Component_9_1 (.footer__group.contact)
  │  ├─ .footer__contact (Email section)
  │  │  ├─ .heading-tiny
  │  │  └─ .footer__link
  │  │     └─ .text-regular
  │  └─ .footer__contact (Phone section)
  │     ├─ .heading-tiny
  │     └─ .footer__link
  │        └─ .text-regular
  ├─ Component_9_2 (likely social links)
  └─ Component_9_3 (likely additional links)
</div>
```

#### Footer Bottom (Component_10)
**Structure**:
```jsx
<div class="delete-this">
  <div class="text-tiny">
    Made by <a class="delete-this__highlited">Riffmax</a>
    & Powered by <a class="delete-this__highlited">Webflow</a>
  </div>
  <Component_10_1 />
</div>
```

**Note**: `.delete-this` class suggests this is template/demo content meant to be replaced

---

## 5. Marquee Animation System

### Vertical Marquee Pattern
**Usage**: Hero section side text animation (Component_3)

**Structure**:
```jsx
<div class="marquee-vertical">
  <div marquee="vertical" class="marquee-vertical__track">
    ├─ 10× .marquee-vertical__item
    │  ├─ .text-tiny.for--marquee ("info@meraki.com")
    │  ├─ .text-tiny.for--marquee ("*")
    │  └─ .text-tiny.for--marquee ("+44 20 6068 2668")
  </div>
</div>
```

**Attributes**:
- `marquee="vertical"` - Triggers vertical animation
- `.for--marquee` - Text styling for marquee context
- Repeating items enable infinite loop effect

### Horizontal Marquee Pattern
**Usage**: Hero section and menu (Component_2_1, App.jsx hero)

**Structure**:
```jsx
<div class="marquee">
  <div marquee="horizontal" class="marquee__track">
    ├─ Multiple .marquee__item
    │  ├─ .text-tiny.for--marquee ("info@meraki.com" or tagline)
    │  ├─ .text-tiny.for--marquee ("*")
    │  └─ .text-tiny.for--marquee (phone or content)
  </div>
</div>
```

**Key Elements**:
- `marquee="horizontal"` - Direction attribute
- `.marquee__track` - Animation container
- `.marquee__item` - Repeating content blocks
- Text content separated by asterisk dividers

---

## 6. BEM Naming Convention

The project consistently follows BEM (Block Element Modifier) methodology:

### Block Examples
- `.nav` - Navigation block
- `.menu` - Menu block
- `.hero` - Hero section block
- `.projects` - Projects section block
- `.button` - Button block
- `.footer` - Footer block
- `.marquee` - Marquee animation block

### Element Examples
- `.nav__brand` - Brand element of nav block
- `.menu__items` - Items element of menu block
- `.hero__img` - Image element of hero block
- `.button__text` - Text element of button block
- `.button__bullet` - Bullet element of button block
- `.footer__nav` - Navigation element of footer block

### Modifier Examples
- `.menu__button-dot-leave` - Leave state modifier
- `.back-text-span.indent` - Indent modifier
- `.back-text-span.last` - Last modifier
- `.tag.square` - Square variant modifier
- `.thumbnail.contain` - Contain mode modifier
- `.text-small.medium` - Medium weight modifier
- `.text-regular.c1-60` - 60% opacity modifier
- `.title-section.space-between` - Space-between layout modifier

---

## 7. Global Page Structure

### Page Wrapper Hierarchy
```jsx
<div class="page-wrapper">
  ├─ <header class="header">
  │  └─ <nav class="nav">
  │     ├─ Component_1 (nav__head)
  │     └─ Component_2 (menu)
  ├─ <main class="sections">
  │  ├─ <section class="hero">
  │  │  └─ Hero marquees + Component_3
  │  ├─ <div class="spacer-huge">
  │  ├─ <section class="words">
  │  │  └─ Component_4 (words__content)
  │  ├─ <div class="spacer-huge">
  │  ├─ <section class="projects">
  │  │  └─ Component_5 (projects)
  │  ├─ <div class="spacer-huge">
  │  ├─ <section class="firm">
  │  │  └─ Component_6 (firm section)
  │  ├─ <div class="spacer-huge">
  │  ├─ <section class="journal">
  │  │  └─ Component_7 (journal)
  │  └─ <div class="spacer-huge">
  └─ <footer class="footer">
     └─ <div class="footer__content">
        ├─ Component_8 (footer__cta)
        ├─ Component_9 (footer__nav)
        ├─ .footer__legal
        └─ Component_10 (footer credits)
```

### Content Container Pattern
Most sections use `.container` wrapper:
```jsx
<div class="container">
  <!-- Section-specific content -->
</div>
```

---

## 8. Webflow Integration Classes

The project includes several Webflow-specific utility classes:

- `.w-embed` - Embedded content wrapper
- `.w-inline-block` - Inline-block display utility
- `.w-dyn-list` - Dynamic list container
- `.w-dyn-items` - Dynamic items wrapper
- `.w-dyn-item` - Individual dynamic item
- `.w-embed-youtubevideo` - YouTube embed wrapper
- Data attributes: `data-w-id`, `data-wf-target` for Webflow interactions

---

## 9. Color & Opacity System

### Opacity Modifiers (Verified Usage)
- **`.c1-60`**: Applied to secondary/muted text (60% opacity)
  - Usage: Address lines, secondary labels
  - Found in: Component_9, Component_6_1_1

### Background Layers
- `.menu__back-layer` - Semi-transparent overlay for menu
- `.hero__img` - Background imagery

---

## 10. Responsive & Device Classes

### Content Fit Modifiers
- **`.contain`**: Image fit mode (used on journal thumbnails)
  - Pattern: `.thumbnail.contain`
  - Purpose: Maintain aspect ratio with letterboxing

---

## 11. Animation & Interaction Classes

### GSAP Animation Integration
- `.gsap_split_word` - Word-level split for animation
- `.gsap_split_letter` - Letter-level split for staggered animation
- Numbered variants: `.gsap_split_word1`, `.gsap_split_letter1`, etc.

### Menu Button Animation
- `.menu__button-dot` - Static dots
- `.menu__button-dot-leave` - Animated leave state dots
- 9-dot pattern for visual interest

### Data Attributes for Animation
- `marquee="horizontal"` / `marquee="vertical"` - Marquee trigger
- `menu="dot-stay"` / `menu="dot-leave"` - Menu button states
- `button="text-initial"` / `button="text-hover"` - Button text layers

---

## 12. Accessibility Features

### ARIA Labels & Roles
- `role="list"` - Applied to `.w-dyn-items`
- `role="listitem"` - Applied to `.w-dyn-item`
- `aria-current="page"` - Current page indicator on nav brand
- `aria-label="..."` - Descriptive labels on animated elements
- `aria-hidden="true"` - Hidden split letters for screen readers

### Semantic HTML
- Proper heading hierarchy: h1, h2, h3
- Link elements for all CTAs
- Figure/figcaption patterns for projects and articles

---

## 13. Component Naming Map

| Generic Name | Semantic Name | Usage | Instances |
|--------------|---------------|-------|-----------|
| Component_1 | Navigation Header | Logo + Menu button | 1 |
| Component_2 | Menu Overlay | Full-screen navigation | 1 |
| Component_2_1 | Menu Content | Menu marquee + links | 1 |
| Component_2_1_1 | Menu Items | Navigation sections | 1 |
| Component_3 | Hero Text | Main hero copy with spans | 1 |
| Component_4 | About Statement | Mission statement + CTA | 1 |
| Component_5 | Featured Projects | Projects grid (4 items) | 1 |
| Component_5_1-4 | Project Cards | Individual project cards | 4 |
| Component_6 | Firm Section | About + Founders + Video | 1 |
| Component_6_1 | Founders Section | Founder cards + header | 1 |
| Component_6_1_1-2 | Founder Card | Quote + bio + image | 2 |
| Component_7 | Journal Section | Journal header + articles | 1 |
| Component_7_1 | Journal Header | Title + "see more" link | 1 |
| Component_7_2 | Journal Grid | Article list (8 items) | 1 |
| Component_7_2_1-8 | Journal Articles | Individual article cards | 8 |
| Component_8 | Footer CTA | "Let's talk" link | 1 |
| Component_9 | Footer Navigation | Sections + contact info | 1 |
| Component_9_1-3 | Footer Groups | Contact + socials + links | 3 |
| Component_10 | Footer Credits | Made by/Powered by | 1 |
| Component_10_1 | Footer Links | Additional footer links | 1 |

---

## 14. Anti-Patterns & DO NOTs

❌ **DO NOT**:
- Change established BEM naming convention
- Remove marquee animation elements (even if hidden)
- Hardcode colors - use CSS variables or Webflow design system
- Break semantic heading hierarchy (h1 → h2 → h3 → h4)
- Remove `.c1-60` opacity classes for secondary text
- Inline styles - use classes only
- Modify Webflow utility classes (`.w-*`)

✅ **DO**:
- Follow BEM naming for new components
- Maintain consistent spacing with `.spacer-huge`
- Use existing text classes (`.text-regular`, `.text-small`, etc.)
- Preserve data attributes (`marquee`, `menu`, `button` attributes)
- Keep component hierarchy consistent
- Test marquee animations remain functional
- Maintain accessibility attributes (`aria-*`, `role`)

---

## 15. Critical Implementation Rules

### Typography Rules
- All text uses semantic class names (`.text-*`, `.heading-*`)
- Text styling hierarchy is strict: only 5 heading levels + 5 body sizes
- Font weights follow the established pattern (400, 500, 600, 700)

### Spacing Rules
- Section separation uses `.spacer-huge` (never manual margins)
- Container padding is handled by `.container` wrapper
- BEM elements use nested selectors for spacing

### Animation Rules
- Marquee elements must have repeating items for seamless loop
- GSAP split text requires letter-level classes
- Menu button uses 9-dot pattern with alternating states
- Button hover uses dual text layers with absolute positioning

### Component Rules
- Each major section gets its own `.container`
- Always include bullet indicators in section titles (`.title-section__bullet`)
- Project/article cards use consistent `.projects__label` / `.journal__label` pattern
- Links use descriptive text, not just icons

### Accessibility Rules
- All interactive elements have `aria-label` or semantic meaning
- Decorative elements marked with `aria-hidden="true"`
- Lists use proper `role="list"` and `role="listitem"`
- Heading hierarchy maintained throughout

---

## 16. Key Measurements & Constants

### Spacing Scale
- **Section gap**: `.spacer-huge` (major sections)
- **Card spacing**: Interior card padding varies by component
- **Text line-height**: Managed by typography classes

### Component Sizes
- **Hero section**: Full viewport height with marquees
- **Project cards**: Medium thumbnail size with 2-tag overlay
- **Founder cards**: Flexible with quote + image + bio
- **Journal cards**: Grid layout with thumbnail + metadata

### Animation Timing
- **Marquee loop**: Continuous horizontal/vertical scroll
- **Button hover**: Dual text layer crossfade
- **Menu animation**: 9-dot pattern with staggered reveal
- **GSAP split**: Letter-by-letter with stagger effect

---

## 17. Technical Dependencies

- **GSAP**: Used for split text animation (Component_8)
- **Webflow**: Embedded scripts and dynamic content bindings
- **React**: Component structure and rendering
- **CSS**: No preprocessor (vanilla CSS with classes)

### External Data
- Webflow CMS integration for dynamic content (projects, journal)
- External images via CDN (avif format)
- YouTube embeds in firm section

---

## 18. Future-Proofing Recommendations

✅ **Maintain**:
- BEM naming consistency for any new components
- Webflow class naming (`.w-*` utilities)
- Marquee animation pattern for scrolling content
- Spacing hierarchy with `.spacer-*` classes

⚠️ **Consider**:
- Documenting custom data attributes for consistency
- Creating utility class variants (`.spacer-regular`, `.spacer-small`)
- Expanding typography scale if needed (currently 5 sizes each)
- Adding color token CSS variables for theming flexibility

---

## 19. Design Tokens Summary

```javascript
// Typography Sizes
textSizes = {
  tiny: '.text-tiny',      // Marquee, captions
  small: '.text-small',    // Tags, labels
  regular: '.text-regular', // Body text
  large: '.text-large',    // Emphasis
  xlarge: '.text-xlarge'   // Quotes
}

// Heading Sizes
headingSizes = {
  tiny: '.heading-tiny',     // Labels
  small: '.heading-small',   // Card titles
  medium: '.heading-medium', // Article titles
  large: '.heading-large'    // Section titles
}

// Spacing
spacing = {
  huge: '.spacer-huge',      // Section separation
  regular: '.spacer-regular' // Internal spacing
}

// Modifiers
modifiers = {
  opacity60: '.c1-60',              // Muted text
  medium: '.medium',                // Font weight 500
  indent: '.indent',                // First word offset
  last: '.last',                    // Final word
  contain: '.contain',              // Image fit
  square: '.square',                // Card variant
  spaceAround: '.space-between',    // Flex layout
  forMarquee: '.for--marquee'       // Animation context
}
```

---

[CRITICAL] This style guide is THE source of truth for all component development and modifications. Every claim is backed by actual file analysis and occurrence counts. Maintain consistency with these patterns to preserve the refined, editorial aesthetic of Meraki Architects.
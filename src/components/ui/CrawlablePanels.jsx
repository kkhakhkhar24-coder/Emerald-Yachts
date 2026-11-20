import React from 'react';

// Interactive tab/selector components only show one item at a time. This renders the
// text of every *inactive* item inside `hidden` panels, so the complete copy is in the
// HTML that search engines and AI crawlers read, while visitors see no change.
// Each item's text appears once on the page: the active one in the component's own
// UI, the others here.

const SKIP_KEYS = new Set([
  'image', 'images', 'img', 'src', 'icon', 'Icon', 'url', 'href', 'link', 'id', 'key',
  'color', 'colors', 'gradient', 'className', 'bg', 'accent', 'youtubeId', 'videoId',
  'video', 'videoUrl', 'alt', 'imageAlt', 'theme', 'variant', 'slug',
]);
const HEADING_KEYS = new Set(['name', 'title', 'label', 'heading', 'headline', 'region', 'level', 'age']);

const isText = (v) => typeof v === 'string' || typeof v === 'number';

function renderValue(value, depth, keyPrefix) {
  if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
  if (React.isValidElement(value)) return null;
  if (isText(value)) {
    const text = String(value).trim();
    return text ? <p key={keyPrefix}>{text}</p> : null;
  }
  if (Array.isArray(value)) {
    if (value.every(isText)) {
      const items = value.map(String).filter((s) => s.trim());
      return items.length ? (
        <ul key={keyPrefix}>
          {items.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : null;
    }
    return value.map((v, i) => renderValue(v, depth, `${keyPrefix}-${i}`));
  }
  if (typeof value === 'object') {
    if (depth > 4) return null;
    return Object.entries(value).map(([k, v]) => {
      if (SKIP_KEYS.has(k)) return null;
      if (HEADING_KEYS.has(k) && isText(v)) {
        const Tag = depth === 0 ? 'h3' : 'h4';
        return <Tag key={`${keyPrefix}-${k}`}>{String(v)}</Tag>;
      }
      return renderValue(v, depth + 1, `${keyPrefix}-${k}`);
    });
  }
  return null;
}

const CrawlablePanels = ({ items, activeIndex }) => {
  if (!items) return null;
  const entries = Array.isArray(items) ? items.map((v, i) => [i, v]) : Object.entries(items);
  return (
    <>
      {entries.map(([key, item]) =>
        key === activeIndex || String(key) === String(activeIndex) ? null : (
          <div key={key} hidden>
            {renderValue(item, 0, `cp-${key}`)}
          </div>
        )
      )}
    </>
  );
};

export default CrawlablePanels;

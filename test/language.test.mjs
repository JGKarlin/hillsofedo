import { test } from 'node:test';
import assert from 'node:assert/strict';
import '../js/language.js';

test('defaults to Japanese when browser language is ja-JP and nothing stored', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: null, browserLanguage: 'ja-JP' });
  assert.equal(result, 'ja');
});

test('defaults to English when browser language is en-US and nothing stored', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: null, browserLanguage: 'en-US' });
  assert.equal(result, 'en');
});

test('defaults to English when browser language is unrelated (e.g. fr-FR)', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: null, browserLanguage: 'fr-FR' });
  assert.equal(result, 'en');
});

test('a stored "en" preference overrides a Japanese browser language', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: 'en', browserLanguage: 'ja-JP' });
  assert.equal(result, 'en');
});

test('a stored "ja" preference overrides an English browser language', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: 'ja', browserLanguage: 'en-US' });
  assert.equal(result, 'ja');
});

test('an unrecognized stored value falls back to browser-language detection', () => {
  const result = globalThis.HoeLanguage.resolveLang({ stored: 'fr', browserLanguage: 'ja-JP' });
  assert.equal(result, 'ja');
});

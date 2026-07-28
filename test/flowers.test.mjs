import { test } from 'node:test';
import assert from 'node:assert/strict';
import '../js/flowers.js';

test('January (month 1) maps to the January flower image', () => {
  assert.equal(globalThis.HoeFlowers.fileForMonth(1), 'January');
});

test('December (month 12) maps to the December flower image', () => {
  assert.equal(globalThis.HoeFlowers.fileForMonth(12), 'December');
});

test('July (month 7) maps to the July flower image', () => {
  assert.equal(globalThis.HoeFlowers.fileForMonth(7), 'July');
});

test('month 0 is out of range and returns null', () => {
  assert.equal(globalThis.HoeFlowers.fileForMonth(0), null);
});

test('month 13 is out of range and returns null', () => {
  assert.equal(globalThis.HoeFlowers.fileForMonth(13), null);
});

const transfer = require('./index')

test('transfer different bank amount 1', () => {
  expect(transfer('KBANK', 'SCB', 1)).toBe(0)
})

test('transfer different bank amount 500', () => {
  expect(transfer('KBANK', 'SCB', 500)).toBe(0)
})

test('transfer different bank amount 4999', () => {
  expect(transfer('KBANK', 'SCB', 4999)).toBe(0)
})

test('transfer different bank amount 5000', () => {
  expect(transfer('KBANK', 'SCB', 5000)).toBe(0)
})

test('transfer different bank amount 5001', () => {
  expect(transfer('KBANK', 'SCB', 5001)).toBe(1)
})

test('transfer different bank amount 9999', () => {
  expect(transfer('KBANK', 'SCB', 9999)).toBe(1)
})

test('transfer different bank amount 10000', () => {
  expect(transfer('KBANK', 'SCB', 10000)).toBe(1)
})

test('transfer different bank amount 10001', () => {
  expect(transfer('KBANK', 'SCB', 10001)).toBe(2)
})

test('transfer different bank amount 14999', () => {
  expect(transfer('KBANK', 'SCB', 14999)).toBe(2)
})

test('transfer different bank amount 15000', () => {
  expect(transfer('KBANK', 'SCB', 15000)).toBe(2)
})

test('transfer different bank amount 15001', () => {
  expect(transfer('KBANK', 'SCB', 15001)).toBe(3)
})

test('transfer different bank amount 19999', () => {
  expect(transfer('KBANK', 'SCB', 19999)).toBe(3)
})

test('transfer different bank amount 20000', () => {
  expect(transfer('KBANK', 'SCB', 20000)).toBe(3)
})

test('transfer same bank amount 10000', () => {
  expect(transfer('KBANK', 'KBANK', 10000)).toBe(0)
})

test('transfer same bank amount 15000', () => {
  expect(transfer('KBANK', 'KBANK', 15000)).toBe(0)
})

test('transfer same bank amount 20000', () => {
  expect(transfer('KBANK', 'KBANK', 20000)).toBe(0)
})

test('transfer same bank amount -1', () => {
  expect(transfer('KBANK', 'KBANK', -1)).toBe(null)
})

test('transfer same bank amount 0', () => {
  expect(transfer('KBANK', 'KBANK', 0)).toBe(null)
})

test('transfer same bank amount 20001', () => {
  expect(transfer('KBANK', 'KBANK', 20001)).toBe(null)
})

test('transfer same bank amount 1000.9', () => {
  expect(transfer('KBANK', 'KBANK', 1000.9)).toBe(null)
})

import assert from "node:assert"
import { test } from "node:test"

import findFirstRepeated from "./index.ts"

test('01', () => {
  const data: number[] = [2, 1, 3, 5, 3, 2]
  const result: number = findFirstRepeated(data)
  const expected: number = 3
  assert.deepStrictEqual(result, expected, 'Test 01 was failed!')
})

test('02', () => {
  const data: number[] = [2, 2]
  const result: number = findFirstRepeated(data)
  const expected: number = 2
  assert.deepStrictEqual(result, expected, 'Test 02 was failed!')
})

test('03', () => {
  const data: number[] = [2, 4, 3, 5, 1]
  const result: number = findFirstRepeated(data)
  const expected: number = -1
  assert.deepStrictEqual(result, expected, 'Test 03 was failed!')
})

test('04', () => {
  const data: number[] = [1, 3, 4, 5, 0, 1, 3, 0, 7]
  const result: number = findFirstRepeated(data)
  const expected: number = 1
  assert.deepStrictEqual(result, expected, 'Test 04 was failed!')
})

test('05', () => {
  const data: number[] = []
  const result: number = findFirstRepeated(data)
  const expected: number = -1
  assert.deepStrictEqual(result, expected, 'Test 05 was failed!')
})
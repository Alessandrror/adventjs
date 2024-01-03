import assert from "node:assert"
import { test } from "node:test"

import manufacture from "./index.ts"

test('01', () => {
  const gifts: string[] = ["tren", "oso", "pelota"]
  const materials: string = "tronesa"
  const result: string[] = manufacture(gifts, materials)
  const expected: string[] = ["tren", "oso"]
  assert.deepEqual(result, expected, 'Test 01 was failed!')
})

test('02', () => {
  const gifts: string[] = ["coche", "mueñca", "balon"]
  const materials: string = "ocmuñalb"
  const result: string[] = manufacture(gifts, materials)
  const expected: string[] = []
  assert.deepEqual(result, expected, 'Test 02 was failed!')
})

test('03', () => {
  const gifts: string[] = ["patineta", "robot", "libro"]
  const materials: string = "nopor"
  const result: string[] = manufacture(gifts, materials)
  const expected: string[] = []
  assert.deepEqual(result, expected, 'Test 03 was failed!')
})

test('04', () => {
  const gifts: string[] = []
  const materials: string = "letras"
  const result: string[] = manufacture(gifts, materials)
  const expected: string[] = []
  assert.deepEqual(result, expected, 'Test 04 was failed!')
})
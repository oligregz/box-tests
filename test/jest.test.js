describe('Validate jest', () =>{

  test('1 - Primitive type', () => {
    let num = 12
    expect(num).not.toBeNull()
    expect(num).toBe(12)
  }),
  
  test('2 - Object', () => {
    let player = {
      name: 'Ancara Messi',
      age: 36,
      level: 'legend'
    }
    expect(player).toHaveProperty('level')
    expect(player.age).toBeGreaterThan(30)
  })
})
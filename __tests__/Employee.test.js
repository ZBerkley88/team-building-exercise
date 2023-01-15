const Employee = require('../lib/Employee')

test('Can I pass name, ID, email to this new class instance constructor', () => {
    const emp = new Employee('a', 'b', 'c')
    expect(emp.name).toBe('a')
    expect(emp.id).toBe('b')
    expect(emp.email).toBe('c')
})

test('Can getName return Name ', () => {
  
    const emp = new Employee('a', 'b', 'c')
    
    expect(emp.getName()).toBe('a')
    
})
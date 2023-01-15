const Employee = require('../lib/Employee')

test(`Can I pass name, ID, email to this new class instance constructor?`, () => {
    const emp = new Employee(`Edward Scissorhands`, `12`, `Eddie@scissors.com`)
    expect(emp.name).toBe(`Edward Scissorhands`)
    expect(emp.id).toBe(`12`)
    expect(emp.email).toBe(`Eddie@scissors.com`)
})


test(`Can getName return an employee's name?`, () => {
  
    const emp = new Employee(`Edward Scissorhands`, `12`, `Eddie@scissors.com`)
    expect(emp.getName()).toBe(`Edward Scissorhands`)

})


test(`Can getName return an employee's ID number?`, () => {
  
    const emp = new Employee(`Edward Scissorhands`, `12`, `Eddie@scissors.com`)
    expect(emp.getId()).toBe(`12`)

})


test(`Can getName return an employee's email address?`, () => {
  
    const emp = new Employee(`Edward Scissorhands`, `12`, `Eddie@scissors.com`)
    expect(emp.getEmail()).toBe(`Eddie@scissors.com`)

})


test(`Can getName return an employee's role?`, () => {
  
    const emp = new Employee(`Edward Scissorhands`, `12`, `Eddie@scissors.com`)
    expect(emp.getRole()).toBe(`Employee`)

})

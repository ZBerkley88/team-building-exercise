const Employee = require('../lib/Employee')

test(`Can I pass name, ID, email to this new class instance constructor?`, () => {
    const emp = new Employee(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`)
    expect(emp.name).toBe(`Jean Luc Picard`)
    expect(emp.id).toBe(`01`)
    expect(emp.email).toBe(`makeitso@enterprise.com`)
})


test(`Can getName return an employee's name?`, () => {
  
    const emp = new Employee(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`)
    expect(emp.getName()).toBe(`Jean Luc Picard`)

})


test(`Can getId return an employee's ID number?`, () => {
  
    const emp = new Employee(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`)
    expect(emp.getId()).toBe(`01`)

})


test(`Can getEmail return an employee's email address?`, () => {
  
    const emp = new Employee(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`)
    expect(emp.getEmail()).toBe(`makeitso@enterprise.com`)

})


test(`Can getRole return an employee's role?`, () => {
  
    const emp = new Employee(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`)
    expect(emp.getRole()).toBe(`Employee`)

})

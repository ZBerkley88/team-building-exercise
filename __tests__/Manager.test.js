const Manager = require('../lib/Manager')

test(`Can I pass an office number to this new class instance constructor?`, () => {
    const emp = new Manager(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`, `001`)
    expect(emp.officeNumber).toBe(`001`)

})


test(`Can getOfficeNumber return an employee's office number?`, () => {
  
    const emp = new Manager(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`, `001`)
    expect(emp.getOfficeNumber()).toBe(`001`)

})


test(`Can getRole return an employee's role?`, () => {
  
    const emp = new Manager(`Jean Luc Picard`, `01`, `makeitso@enterprise.com`, `001`)
    expect(emp.getRole()).toBe(`Manager`)

})

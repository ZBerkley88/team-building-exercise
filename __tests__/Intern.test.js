const Intern = require('../lib/Intern')

test(`Can I pass a school name to this new class instance constructor?`, () => {
    const emp = new Intern(`Wesley Crusher`, `00`, `shutup@wesley.com`, `Space Camp`)
    expect(emp.school).toBe(`Space Camp`)
})


test(`Can getSchool return an employee's school name?`, () => {
  
    const emp = new Intern(`Wesley Crusher`, `00`, `shutup@wesley.com`, `Space Camp`)
    expect(emp.getSchool()).toBe(`Space Camp`)

})


test(`Can getRole return an employee's role?`, () => {
  
    const emp = new Intern(`Wesley Crusher`, `00`, `shutup@wesley.com`, `Space Camp`)
    expect(emp.getRole()).toBe(`Intern`)

})
const Engineer = require('../lib/Engineer')

test(`Can I pass a GitHub user name to this new class instance constructor?`, () => {
    const emp = new Engineer(`Geordi La Forge`, `11`, `butterfly@thesky.com`, `readingRainbow`)
    expect(emp.github).toBe(`readingRainbow`)
})


test(`Can getGitHub return an employee's office number?`, () => {
  
    const emp = new Engineer(`Geordi La Forge`, `11`, `butterfly@thesky.com`, `readingRainbow`)
    expect(emp.getGitHub()).toBe(`readingRainbow`)

})


test(`Can getRole return an employee's role?`, () => {
  
    const emp = new Engineer(`Geordi La Forge`, `11`, `butterfly@thesky.com`, `readingRainbow`)
    expect(emp.getRole()).toBe(`Engineer`)

})
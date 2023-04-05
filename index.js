// Write your solution in this file!
let employee = {
    name: 'John Smith',
    streetAddress: '123 Main Street'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  describe('employees', function() {
    beforeEach(function() {
      employee = {
        name: 'John Smith',
        streetAddress: '123 Main Street'
      };
    });
  
    describe('updateEmployeeWithKeyAndValue(employee, key, value)', function() {
      it('returns an employee with the original key value pairs and the new key value pair', function() {
        expect(updateEmployeeWithKeyAndValue(employee, 'email', 'john.smith@company.com')).to.eql({
          name: 'John Smith',
          streetAddress: '123 Main Street',
          email: 'john.smith@company.com'
        });
        expect(employee).to.eql({
          name: 'John Smith',
          streetAddress: '123 Main Street'
        });
      });
    });
  
    describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function() {
      it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function() {
        expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'email', 'john.smith@company.com')).to.eql({
          name: 'John Smith',
          streetAddress: '123 Main Street',
          email: 'john.smith@company.com'
        });
        expect(employee).to.eql({
          name: 'John Smith',
          streetAddress: '123 Main Street',
          email: 'john.smith@company.com'
        });
      });
    });
  
    describe('deleteFromEmployeeByKey(employee, key)', function() {
      it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function() {
        expect(deleteFromEmployeeByKey(employee, 'name')).to.eql({
          streetAddress: '123 Main Street'
        });
        expect(employee).to.eql({
          name: 'John Smith',
          streetAddress: '123 Main Street'
        });
      });
    });
  
    describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function() {
      it('returns employee without the deleted key/value pair', function() {
        expect(destructivelyDeleteFromEmployeeByKey(employee, 'name')).to.eql({
          streetAddress: '123 Main Street'
        });
        expect(employee).to.eql({
          streetAddress: '123 Main Street'
        });
      });
    });
  });
  
  
  
  
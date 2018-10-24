import GitService from './GitService'
import mock from 'mock-fs'
import fs from 'fs'

describe("The GitService", function(){
  let service = new GitService()
  beforeEach(function(){
      mock({
        'tmp': {
          'jest-mock-fs-bug': {}
        }
      })
  })

  afterEach(function(){
    mock.restore()
  })

  describe("clone method", function() {
    it("should clone a copy of the remote repository to the local path", function(){
      service.Clone('https://github.com/nknapp/jest-mock-fs-bug.git', '/tmp', function(repo){
        expect(fs.existsSync('/tmp/jest-mock-fs-bug')).toBe(true)
      })
    })
  })
})

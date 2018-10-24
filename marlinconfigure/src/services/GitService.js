var Git = require('nodegit')

export default class GitService {
    Clone = (remotePath, localPath, callback) => {
      Git.Clone(remotePath, localPath).then(function(repo){
        callback(repo)
      })
    }
}

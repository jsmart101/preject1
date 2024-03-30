const { PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username:'meetups',
        mongodb_password:'marvinsroom',
        mongodb_clustername:'cluster0',
        mongodb_database:'meetups_dev'
      }
    }
  }


  return {
    env: {
      mongodb_username:'meetups',
      mongodb_password:'marvinsroom',
      mongodb_clustername:'cluster0',
      mongodb_database:'meetups'
    }
  }

}
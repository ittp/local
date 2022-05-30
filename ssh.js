import { spawn } from 'child_process';

const config = require('./config')
const forward = (config) => {
  let type
  switch(config.type) {
    case 'remote': type="R"; break;
    case 'local': type="L"; break;
  }
  if(config.remote) {
  
  }
  if(config.local) {
  
  }
  
  let co = config.isArray()
  
}
const params = {

  
}
const ssh = spawn('ssh', [
    '-fN',
    '-S', '/tmp/TEMP_SSH_CTL_FILE',
    '-L', 'LOCAL_PORT:REMOTE_HOST:REMOTE_HOST_PORT',
    '-R', 'REMOTE_PORT:LOCAL_HOST:LOCAL_HOST_PORT',
    '-J', 'JUMP_USER@JUMP_IP',
    'user@REMOTE_HOST.com',
]);
process.on('exit', () => {
    ssh.kill();
});

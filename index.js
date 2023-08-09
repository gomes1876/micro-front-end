const { exec } = require('child_process');

const comandos = [
  'cd ./root && npm start', 
  'cd ./app-01 && npm start', 
  'cd ./app-02 && npm start',
  'cd ./app-03 && npm start'
];

const promessas = comandos.map(comando => {
  return new Promise((resolve, reject) => {
    exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar "${comando}": ${error}`);
        reject(error);
      } else {
        console.log(`Saída de "${comando}": ${stdout}`);
        resolve(stdout);
      }
    });
  });
});

Promise.all(promessas)
  .then(results => {
    console.log('Todos os comandos foram concluídos:', results);
  })
  .catch(error => {
    console.error('Pelo menos um comando falhou:', error);
  });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um nome para a migration 🚀:  ", name => {
  rl.close();

  const command = `typeorm-ts-node-commonjs migration:create  src/database/migrations/${name}`;

  const { exec } = require("child_process");
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro no STDERR: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
});

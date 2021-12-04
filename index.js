import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Igor', 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Gabriel', 5000, 12345678601);
gerente.cadastrarSenha('123');


const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');


console.log(gerenteEstaLogado, diretorEstaLogado);
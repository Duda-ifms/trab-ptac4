
import {Cadastro} from './Usuario/Cadastro'
import {Perfil} from './Usuario/Perfil'
import {Login} from './Usuario/Login'
import {CadastrarMesas} from './CadastraMesas/CadastrarMesas'
import {BuscarMesas} from './buscarMesas/BuscarMesas'
import {ReservarMesas} from './ReservasdeMesas/ReservarMesas'
import {Cardapio} from './Cardapio/Cardapio'
import {ListarReservas} from './ListarReservas'
import {ConsultarMesas} from './ConsultarMesas'
export default function App() {
  return(
    <main>
      <Cadastro/>
      <Perfil/>
      <Login/>
      <CadastrarMesas/>
      <BuscarMesas/>
      <ReservarMesas/>
      <Cardapio/>
      <ListarReservas/>
      <ConsultarMesas/>
    </main>
  )
}